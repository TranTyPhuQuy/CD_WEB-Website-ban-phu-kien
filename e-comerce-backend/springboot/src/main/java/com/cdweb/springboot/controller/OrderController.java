package com.cdweb.springboot.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdweb.springboot.request.OrderRequest;
import com.cdweb.springboot.response.ResponseApi;

@RestController
@RequestMapping("/api/oder")
public class OrderController {

	
	
	@PostMapping("/create")
	public ResponseApi createOder(@RequestBody OrderRequest oderRequest) {
		return null;
	}
}
