package com.cdweb.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cdweb.springboot.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

//	public List<Product> filterProducts(@Param("category")String category,
//			@Param("minPrice") Integer minPrice,
//			@Param("maxPrice") Integer maxPrice,
//			@Param("minDiscount") Integer minDiscount,
//			@Param("sort") String sort);
	@Query("SELECT * FROM products")
	public List<Product> getAllProduct();
}