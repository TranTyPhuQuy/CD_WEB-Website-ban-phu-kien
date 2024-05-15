package com.cdweb.springboot.service;

import java.util.List;
import java.util.Map;

import com.cdweb.springboot.entities.Category;
import com.cdweb.springboot.entities.Product;

public interface CategoryService {

	public List<Category> getListCategory();
	public Map<String, List<Product>> findTop10ByCategoryId();
}
