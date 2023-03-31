package com.example.signup_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@SpringBootApplication
public class SignupBackendApplication {

	public static void main(String[] args) {

		SpringApplication.run(SignupBackendApplication.class, args);
		System.out.println("Started");
	}

}
