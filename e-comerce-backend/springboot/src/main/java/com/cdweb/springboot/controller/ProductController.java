package com.cdweb.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@GetMapping("/findByCategory")
	public ResponseEntity<Page<Product>> findProductByCategory(@RequestParam String category,
			@RequestParam Integer minPrice, @RequestParam Integer maxPrice, @RequestParam Integer minDiscount, @RequestParam String sort,
			@RequestParam String stock, @RequestParam Integer pageNumber, @RequestParam Integer pageSize) {
		Page<Product> respo = productService.getListProduct(category, minPrice, maxPrice, minDiscount, sort, pageNumber, pageSize);
		System.out.println(" Find product By Category Successfully");
		
		return new ResponseEntity<>(respo, HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/find")
	public String findProductByCategory() {
		return "find product";
	}
}

