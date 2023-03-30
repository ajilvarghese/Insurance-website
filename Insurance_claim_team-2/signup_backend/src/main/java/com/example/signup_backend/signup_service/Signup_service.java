package com.example.signup_backend.signup_service;

import com.example.signup_backend.signup_model.Signup;
import com.example.signup_backend.signup_repository.Sigup_repositiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Signup_service {
    @Autowired static Sigup_repositiory sigupRepositiory;

    public void saveSignup(Signup signup){
        sigupRepositiory.save(signup);
    }
}
