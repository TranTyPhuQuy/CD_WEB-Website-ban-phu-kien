package com.cdweb.springboot.service;

import java.util.List;
import java.util.Optional;

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
	public Product getProductById(Long id) throws ProductException {
		// TODO Auto-generated method stub
		Optional<Product> opt =productRepository.findById(id);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new ProductException("Product not found with id: "+id);
	}

	@Override
	public List<Product> findProductByCategory(String category) throws ProductException {
		// TODO Auto-generated method stub
		
		return null;
	}

	@Override
	public Page<Product> getListProduct(String category,Integer minPrice, Integer maxPrice,Integer minDiscount, String sort, Integer pageNumber, Integer pageSize){
		// TODO Auto-generated method stub
		System.out.println("pagenumber truoc:"+pageNumber);
		pageNumber = pageNumber>0 ? pageNumber-1:pageNumber;
		System.out.println("pagenumber sau:"+pageNumber);
		
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		
		List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);
		
		int startIndex = (int)pageable.getOffset();
		int endIndex = Math.min(startIndex+ pageable.getPageSize(), products.size());
		
		List<Product> pageContent = products.subList(startIndex, endIndex);
		
		Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable,products.size());
		
		return filteredProducts;
	}

	@Override
	public Page<Product> getAllProduct(Integer pageNumber, Integer pageSize) {
		// TODO Auto-generated method stub
		return null;
	}
}
