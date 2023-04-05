package com.example.signup_backend.signup_service;

import com.example.signup_backend.signup_model.Signup;
import com.example.signup_backend.signup_repository.Sigup_repositiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Signup_service {
    @Autowired Sigup_repositiory sigupRepositiory;

    public Signup saveSignup(Signup signup){

        return sigupRepositiory.save(signup);
    }
    public List<Signup> getAllSignups() {
        return sigupRepositiory.findAll();
    }
}
