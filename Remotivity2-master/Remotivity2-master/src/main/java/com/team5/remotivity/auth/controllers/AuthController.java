package com.team5.remotivity.auth.controllers;

import javax.validation.Valid;

import com.sun.org.slf4j.internal.Logger;
import com.sun.org.slf4j.internal.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.team5.remotivity.auth.models.User;
import com.team5.remotivity.auth.payload.request.LoginRequest;
import com.team5.remotivity.auth.payload.request.SignupRequest;
import com.team5.remotivity.auth.payload.response.JwtResponse;
import com.team5.remotivity.auth.payload.response.MessageResponse;
import com.team5.remotivity.auth.repository.UserRepository;
import com.team5.remotivity.auth.security.jwt.JwtUtils;
import com.team5.remotivity.auth.security.services.UserDetailsImpl;

@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/login")
	public ResponseEntity authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												 userDetails.getUsername()));
	}

	@PostMapping("/signup")
	public ResponseEntity registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		try {
			User user = new User(signUpRequest.getFirstName(), signUpRequest.getLastName(), signUpRequest.getUsername(),
					encoder.encode(signUpRequest.getPassword()));

			userRepository.save(user);
		} catch (NullPointerException e) {
			Logger log = LoggerFactory.getLogger(this.getClass());
			log.error("An error has occured. Please try again later.");
		}

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
