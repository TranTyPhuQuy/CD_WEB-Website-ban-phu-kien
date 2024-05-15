package com.cdweb.springboot.service.Impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdweb.springboot.entities.Category;
import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.repository.CategoryRespository;
import com.cdweb.springboot.repository.ProductRepository;
import com.cdweb.springboot.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{

	@Autowired
	private CategoryRespository categoryRespository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public List<Category> getListCategory() {
		// TODO Auto-generated method stub
		return categoryRespository.findAll();
	}

	@Override
	public Map<String, List<Product>> findTop10ByCategoryId() {
		// TODO Auto-generated method stub
		Map<String, List<Product>> m = new HashMap<>();
		
		List<Category> categories = categoryRespository.findAll();
		
		for (Category category : categories) {
			m.put(category.getName(), productRepository.findTop10ByCategoryId(category.getId()));
		}
		
		return m;
	}

}
