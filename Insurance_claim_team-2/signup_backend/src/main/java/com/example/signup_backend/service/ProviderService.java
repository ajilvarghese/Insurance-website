package com.example.signup_backend.service;
import com.example.signup_backend.model.Provider;
import com.example.signup_backend.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProviderService {
    @Autowired
    ProviderRepository provider_repository;
    public List<Provider> getallProviders(){
        return provider_repository.findAll();

    }

}
