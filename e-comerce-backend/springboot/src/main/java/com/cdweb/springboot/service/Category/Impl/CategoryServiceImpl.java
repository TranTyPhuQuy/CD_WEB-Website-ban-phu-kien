package com.cdweb.springboot.service.Category.Impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cdweb.springboot.entities.Category;
import com.cdweb.springboot.repository.CategoryResponse;
import com.cdweb.springboot.service.Category.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{

	private CategoryResponse categoryResponse;
	
	public CategoryServiceImpl(CategoryResponse categoryResponse) {
		this.categoryResponse = categoryResponse;
	}
	
	@Override
	public List<Category> getListCategory() {
		// TODO Auto-generated method stub
		return categoryResponse.findAll();
	}

}
