package com.cdweb.springboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdweb.springboot.config.JwtProvider;
import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.repository.AuthResponse;
import com.cdweb.springboot.repository.UserRepository;
import com.cdweb.springboot.request.LoginRequest;
import com.cdweb.springboot.service.CustomerServiceImpl;

@RestController
@RequestMapping("/auth")
public class AuthController {

	private UserRepository userRepository;
	private JwtProvider jwtProvider;
	private PasswordEncoder passwordEncoder;
	private CustomerServiceImpl customerServiceImpl;

	public AuthController(UserRepository userRepository, CustomerServiceImpl customerServiceImpl,
			PasswordEncoder passwordEncoder,JwtProvider jwtProvider) {
		this.userRepository = userRepository;
		this.customerServiceImpl = customerServiceImpl;
		this.passwordEncoder = passwordEncoder;
		this.jwtProvider = jwtProvider;
	}

	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user){
		String email = user.getEmail();
		String password = user.getPassword();
		String firstName = user.getFirstName();
		String lastName = user.getLastName();
		User isEmailExist = userRepository.findByEmail(email);
		
		if (isEmailExist != null) {
			System.out.print("Email Is Already Used With Another Account");
			return null;
		}

		User createdUser = new User();
		createdUser.setEmail(email);
		createdUser.setPassword(passwordEncoder.encode(password));
		createdUser.setFirstName(firstName);
		createdUser.setLastName(lastName);
		User savedUser = userRepository.save(createdUser);
		Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(),
				savedUser.getPassword());
		SecurityContextHolder.getContext().setAuthentication(authentication);

		String token = jwtProvider.generateToken(authentication);

		AuthResponse authResponse = new AuthResponse(token, "Signup Success");
		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
	}
	@PostMapping("/signin")
	public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest)  {
		String userName = loginRequest.getEmail();
		String password = loginRequest.getPassword();

		Authentication authentication = authenticate(userName, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String token = jwtProvider.generateToken(authentication);

		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwt(token);
		authResponse.setMessage("signin success");
		
		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
	
	}

	private Authentication authenticate(String username, String password) {
		UserDetails userDetails = customerServiceImpl.loadUserByUsername(username);
		if (userDetails == null) {
			throw new BadCredentialsException("Invalid Username...");
		}
		if (!passwordEncoder.matches(password, userDetails.getPassword())) {
			throw new BadCredentialsException("Invalid Password...");
		}
		return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
	}
}
