package com.cdweb.springboot.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdweb.springboot.config.JwtProvider;
import com.cdweb.springboot.entities.PasswordResetToken;
import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.repository.AuthResponse;
import com.cdweb.springboot.repository.PasswordResetTokenRepository;
import com.cdweb.springboot.repository.UserRepository;
import com.cdweb.springboot.request.LoginRequest;
import com.cdweb.springboot.service.EmailService;
import com.cdweb.springboot.service.Impl.UserDetailsServiceImpl;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;
    
    @Autowired
    private PasswordResetTokenRepository tokenRepository;

    @Autowired
    private EmailService emailService;
    
    @PostMapping("/reset-password/request")
    public String resetPassword(@RequestParam String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return "Email not found";
        }

        String token = UUID.randomUUID().toString();
        
        PasswordResetToken passwordResetToken = new PasswordResetToken(token, user);
        tokenRepository.save(passwordResetToken);

        String resetUrl = "http://localhost:3000/reset-password?token=" + token;
        emailService.sendEmail(email, "Reset Password", "Click the link to reset your password: " + resetUrl);

        return "Password reset email sent";
    }

    @PostMapping("/reset-password/confirm")
    public String confirmReset(@RequestParam String token, @RequestParam String newPassword) {
       PasswordResetToken passwordResetToken = tokenRepository.findByToken(token);
        if (passwordResetToken == null) {
            return "Invalid token";
        }

        User user = passwordResetToken.getUser();
        user.setPassword(new BCryptPasswordEncoder().encode(newPassword));
        userRepository.save(user);

        tokenRepository.delete(passwordResetToken);
        return "Password reset successful";
    }
    @PostMapping("/change-password")
    public String confirmReset(@RequestParam String email, @RequestParam String oldPassword) {
        User user = u;
        user.setPassword(new BCryptPasswordEncoder().encode(newPassword));
        userRepository.save(user);

        tokenRepository.delete(passwordResetToken);
        return "Password reset successful";
    }
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new AuthResponse(null, "Email is already used"));
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("ROLE_ADMIN");
        userRepository.save(user);

        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtProvider.generateToken(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(new AuthResponse(token, "Signup Success"));
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = userRepository.findByEmail(email);
        String token = jwtProvider.generateToken(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(new AuthResponse(token, "Signin Success"));
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = userDetailsServiceImpl.loadUserByUsername(username);
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
