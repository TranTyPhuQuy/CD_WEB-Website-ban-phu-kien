package com.cdweb.springboot.service;

import java.util.List;

import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.exception.ProductException;

public interface ProductService {

	public Product findProductById(Long id) throws ProductException;
	public List<Product> findProductByCategory(String category) throws ProductException;
	public List<Product> getAllProduct() throws ProductException;
}
