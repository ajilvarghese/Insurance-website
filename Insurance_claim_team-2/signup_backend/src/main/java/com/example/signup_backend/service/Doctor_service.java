package com.example.signup_backend.service;

import com.example.signup_backend.model.Doctor;
import com.example.signup_backend.repository.Doctor_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class Doctor_service {
    @Autowired
    Doctor_repository doctor_repository;
    public List<Doctor> getallDoctors(){
        return doctor_repository.findAll();
    }
}
