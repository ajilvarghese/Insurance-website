package com.example.signup_backend.controller;

import com.example.signup_backend.exceptions.*;
import com.example.signup_backend.model.Provider;
import com.example.signup_backend.exceptions.DatabaseAccessException;
import com.example.signup_backend.exceptions.EmptyDatabaseException;
import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.repository.ProviderRepository;
import com.example.signup_backend.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/signup")
public class ProviderController {
    @Autowired
    ProviderService provider_service;
    @Autowired
    ProviderRepository provider_repository;

    //................Providers................
    @GetMapping("/providers")

    public List<Provider> getAllProviders(){
        List<Provider> providers=provider_service.getallProviders();
        if(providers.isEmpty()){
            throw new EmptyDatabaseException("Provider database is empty");
        }
        return provider_service.getallProviders();

    }
    //create provider
    @PostMapping("/providers")
    public Provider createProvider(@RequestBody Provider provider){

        try {
            return provider_repository.save(provider);
        } catch (Exception ex){
            throw new DatabaseAccessException("Error occurred while creating a new provider");
        }

    }
    //get provider by id
    @GetMapping("/providers/{providerId}")
    public ResponseEntity<Provider> getProviderBYId(@PathVariable Long providerId){

        Provider provider = provider_repository.findById(providerId).orElseThrow(() -> new UserNotFoundException("Provider does not exist !! id :"+ providerId));
        return ResponseEntity.ok(provider);

    }
    //update Providers
    @PutMapping("/providers/{providerId}")
    public ResponseEntity<Provider> updateProvider(@PathVariable Long providerId,@RequestBody Provider providerDetails){

        Provider provider = provider_repository.findById(providerId).orElseThrow(() -> new UserNotFoundException("Provider does not exist !! id :"+ providerId));
        try {
            provider.setHospitalClinic(providerDetails.getHospitalClinic());
            provider.setState(providerDetails.getState());
            provider.setCity(providerDetails.getCity());
            provider.setContactNumber(providerDetails.getContactNumber());
            Provider updateprovider = provider_repository.save(provider);
            return ResponseEntity.ok(updateprovider);
        }catch (Exception ex){
            throw new UpdateFailedException("Updating Provider Failed !!!");
        }
    }
    //delete provider rest api
    @DeleteMapping("/providers/{providerId}")
    public ResponseEntity<Map<String,Boolean>> deleteProvider(@PathVariable Long providerId){

        Provider provider = provider_repository.findById(providerId).orElseThrow(() -> new UserNotFoundException("Provider does not exist !! id :"+ providerId));
       try {
           provider_repository.delete(provider);
           Map<String, Boolean> response = new HashMap<>();
           response.put("Deleted", Boolean.TRUE);
           return ResponseEntity.ok(response);
       }catch (Exception ex){
           throw new DeleteFailedException("Failed to delete Provider with id: " + providerId);
       }
    }

}
