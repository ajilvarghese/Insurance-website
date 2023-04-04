package com.example.signup_backend.signup_controller;


import com.example.signup_backend.signup_model.Signup;
import com.example.signup_backend.signup_repository.Sigup_repositiory;
import com.example.signup_backend.signup_service.Signup_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/signup")
public class signup_controller {
    @Autowired
    Signup_service signupService;
    private Sigup_repositiory sigupRepositiory;
    @GetMapping("/signup")
    public List<Signup> getSignup(){
        return (List<Signup>)sigupRepositiory.findAll();
    }
    @PostMapping("/signup")
    public ResponseEntity<String> saveSignup(@RequestBody Signup signup){
        signupService.saveSignup(signup);
        return ResponseEntity.ok("User Inserted");
    }


}
