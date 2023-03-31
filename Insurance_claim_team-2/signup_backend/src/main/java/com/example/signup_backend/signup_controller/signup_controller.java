package com.example.signup_backend.signup_controller;

import com.example.signup_backend.signup_model.Illness;
import com.example.signup_backend.signup_repository.Illness_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/signup")
public class signup_controller {
    @Autowired
    private Illness_repository illnessRepository;


    @GetMapping("/illnesses")
    public List<Illness> getIllnesses() {
        return (List<Illness>) illnessRepository.findAll();
    }

}
