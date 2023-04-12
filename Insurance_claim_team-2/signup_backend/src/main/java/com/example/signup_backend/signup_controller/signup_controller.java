package com.example.signup_backend.signup_controller;


import com.example.signup_backend.signup_model.Illness;
import com.example.signup_backend.signup_model.Signup;
import com.example.signup_backend.signup_repository.Illness_repository;
import com.example.signup_backend.signup_repository.Sigup_repositiory;
import com.example.signup_backend.signup_service.Signup_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/signup")
public class signup_controller {
    @Autowired
    Signup_service signupService;
    @Autowired
    Illness_repository illnessRepository;
    private Sigup_repositiory sigupRepositiory;

    @GetMapping("/all")
    public List<Signup> getAllSignups() {
        return signupService.getAllSignups();
    }
    @PostMapping("/create")
    public ResponseEntity<Signup> saveSignup(@RequestBody Signup signup){

        Signup savedMember= signupService.saveSignup(signup);
//        return ResponseEntity.ok("User Inserted");
        return new ResponseEntity<>(savedMember, HttpStatus.CREATED);
    }
    @GetMapping("/illnesses")
    public List<Illness> getIllnesses() {
        return (List<Illness>) illnessRepository.findAll();
    }

    @PostMapping("/authenticateUser")
    public ResponseEntity<?> authenticateUser(@RequestBody Signup signup){
        return new ResponseEntity<>(signupService.authenticateUser(signup), HttpStatus.CREATED);
    }


}
