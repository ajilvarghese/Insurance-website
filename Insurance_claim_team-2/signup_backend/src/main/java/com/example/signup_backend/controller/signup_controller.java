package com.example.signup_backend.controller;


import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.model.*;
import com.example.signup_backend.repository.*;
import com.example.signup_backend.service.Signup_service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/signup")
public class signup_controller {
    private static final Logger logger = LoggerFactory.getLogger(UserNotFoundException.class);

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFoundException(UserNotFoundException ex) {
        logger.error(ex.getMessage(), ex);
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND, ex.getMessage(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, errorResponse.getStatus());
    }

    @Autowired
    Signup_service signupService;

    private Sigup_repositiory sigupRepositiory;
    //......getting the details
    @GetMapping("/all")
    public List<Signup> getAllSignups() {
        return signupService.getAllSignups();
    }
    //............Signup ........
    @PostMapping("/create")
    public ResponseEntity<Signup> saveSignup(@RequestBody Signup signup){

        Signup savedMember= signupService.saveSignup(signup);
//        return ResponseEntity.ok("User Inserted");
        return new ResponseEntity<>(savedMember, HttpStatus.CREATED);
    }

    //......Sign-in............
    @PostMapping("/authenticateUser")
    public ResponseEntity<?> authenticateUser(@RequestBody Signup signup){
        return new ResponseEntity<>(signupService.authenticateUser(signup), HttpStatus.CREATED);
    }



}
