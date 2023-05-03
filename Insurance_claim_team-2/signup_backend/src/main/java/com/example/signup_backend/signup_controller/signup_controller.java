package com.example.signup_backend.signup_controller;


import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.signup_model.*;
import com.example.signup_backend.signup_repository.*;
import com.example.signup_backend.signup_service.Doctor_service;
import com.example.signup_backend.signup_service.Provider_service;
import com.example.signup_backend.signup_service.Search_service;
import com.example.signup_backend.signup_service.Signup_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/signup")
public class signup_controller {

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
