package com.cdweb.springboot.service;

import jakarta.servlet.http.HttpServletRequest;

public interface VNPAYService {
	public String createOrder(HttpServletRequest request, int amount, String orderInfor, String urlReturn);
	public int orderReturn(HttpServletRequest request);
	
}
