package com.example.signup_backend.signup_service;
import com.example.signup_backend.signup_model.Provider;
import com.example.signup_backend.signup_repository.Provider_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Provider_service {
    @Autowired
    Provider_repository provider_repository;
    public List<Provider> getallProviders(){
        return provider_repository.findAll();

    }

}
