package com.cdweb.springboot.service;

import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.exception.UserException;

public interface UserService {

	public User findUserById(Long userld) throws UserException;
	public User findUserProfileByJwt(String jwt) throws UserException;
}
