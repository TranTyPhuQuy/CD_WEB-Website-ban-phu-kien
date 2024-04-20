package com.cdweb.springboot.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.exception.ProductException;


public interface ProductService {

	public Product findProductById(Long id) throws ProductException;
	public List<Product> findProductByCategory(String category) throws ProductException;
	public Page<Product> getListProduct(String category,Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, Integer pageNumber, Integer pageSize);
	public Page<Product> getAllProduct(Integer pageNumber, Integer pageSize);
	
}
