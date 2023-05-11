package com.example.signup_backend.service;

import com.example.signup_backend.model.Doctor;
import com.example.signup_backend.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DoctorService {
    @Autowired
    DoctorRepository doctor_repository;
    public List<Doctor> getallDoctors(){
        return doctor_repository.findAll();
    }
}
