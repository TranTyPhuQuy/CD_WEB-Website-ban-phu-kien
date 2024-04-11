package com.cdweb.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdweb.springboot.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

	
}
