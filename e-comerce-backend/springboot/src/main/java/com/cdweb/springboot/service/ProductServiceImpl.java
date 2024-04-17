package com.cdweb.springboot.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.exception.ProductException;
import com.cdweb.springboot.repository.ProductRepository;


@Service
public class ProductServiceImpl implements ProductService{

	private ProductRepository productRepository;
	
	public ProductServiceImpl(ProductRepository productRepository) {
		this.productRepository = productRepository;
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
	public Page<Product> getListProduct(String category,Integer minPrice, Integer maxPrice,Integer minDiscount, String sort, Integer pageNumber, Integer pageSize) throws ProductException {
		// TODO Auto-generated method stub
		
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		
		List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);
		
		int startIndex = (int)pageable.getOffset();
		int endIndex = Math.min(startIndex+ pageable.getPageSize(), products.size());
		
		List<Product> pageContent = products.subList(startIndex, endIndex);
		
		Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable,products.size());
		
		return filteredProducts;
	}

}
