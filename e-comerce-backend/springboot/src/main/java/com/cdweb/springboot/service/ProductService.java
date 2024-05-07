package com.cdweb.springboot.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.cdweb.springboot.entities.Product;


public interface ProductService {

	public Product getProductById(Long id);
	public Page<Product> getListProduct(String category,Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, Integer page, Integer limit);
	
}
