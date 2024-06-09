package com.cdweb.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cdweb.springboot.service.VNPAYService;

import jakarta.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class VNPAYController {
    @Autowired
    private VNPAYService vnPayService;

    @GetMapping("/create-order")
    public Map<String, String> createOrder(@RequestParam("amount") int orderTotal,
                                           @RequestParam("orderInfo") String orderInfo,
                                           HttpServletRequest request) {
//        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
        String baseUrl = "http://localhost:3000/payment-result";
        System.out.println("baseUrl:  "+baseUrl);
        String vnpayUrl = vnPayService.createOrder(request, orderTotal, orderInfo, baseUrl);
        Map<String, String> response = new HashMap<>();
        response.put("paymentUrl", vnpayUrl);
        return response;
    }

    @GetMapping("/vnpay-payment-return")
    public Map<String, Object> paymentCompleted(HttpServletRequest request) {
    	System.out.println("return chayj");
        int paymentStatus = vnPayService.orderReturn(request);

        String orderInfo = request.getParameter("vnp_OrderInfo");
        String paymentTime = request.getParameter("vnp_PayDate");
        String transactionId = request.getParameter("vnp_TransactionNo");
        String totalPrice = request.getParameter("vnp_Amount");

        Map<String, Object> response = new HashMap<>();
        response.put("orderId", orderInfo);
        response.put("totalPrice", totalPrice);
        response.put("paymentTime", paymentTime);
        response.put("transactionId", transactionId);
        response.put("paymentStatus", paymentStatus == 1 ? "success" : "fail");

        return response;
    }
}
