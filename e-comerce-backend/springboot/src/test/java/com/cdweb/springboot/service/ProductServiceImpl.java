package com.cdweb.springboot.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.exception.ProductException;
import com.cdweb.springboot.repository.CategoryRepository;
import com.cdweb.springboot.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

	private ProductRepository productRepository;
	private CategoryRepository categoryRepository;
	
	public ProductServiceImpl(ProductRepository productRepository, CategoryRepository categoryRepository) {
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
	}

	@Override
	public Product findProductById(Long id) throws ProductException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Product> findProductByCategory(String category) throws ProductException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Product> getAllProduct() throws ProductException {
		// TODO Auto-generated method stub
		return null;
	}

}
