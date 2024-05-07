package com.cdweb.springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.repository.ProductRepository;


@Service
public class ProductServiceImpl implements ProductService{

	private ProductRepository productRepository;
	
	public ProductServiceImpl(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}
	
	@Override
	public Product getProductById(Long id) {
		// TODO Auto-generated method stub
		Optional<Product> opt =productRepository.findById(id);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
//		System.out.print("Product not found with id: "+id);
	}

	@Override
	public Page<Product> getListProduct(String category,Integer minPrice, Integer maxPrice,Integer minDiscount, String sort, Integer page, Integer limit){
		// TODO Auto-generated method stub
//		System.out.println("pagenumber truoc:"+pageNumber);
		page = page>0 ? page-1:page;
//		System.out.println("pagenumber sau:"+pageNumber);
		
		Pageable pageable = PageRequest.of(page, limit);
		
		List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);
		
		int startIndex = (int)pageable.getOffset();
		int endIndex = Math.min(startIndex+ pageable.getPageSize(), products.size());
		
		List<Product> pageContent = products.subList(startIndex, endIndex);
		
		Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable,products.size());
		
		return filteredProducts;
	}
}
