package com.cdweb.springboot.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.repository.UserRepository;

@Service
public class CustomerServiceImpl implements UserDetailsService{

	private UserRepository userRepository;
	public CustomerServiceImpl(UserRepository repository ) {
		this.userRepository = repository;
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user = userRepository.findByEmail(username);
		if(user==null) {
		throw new UsernameNotFoundException("user not found with email - "+username);
		}
		List<GrantedAuthority> authorities=new ArrayList<>();
		return new org.springframework.security.core.userdetails. User (user.getEmail(),user.getPassword(),authorities);
	}

}
