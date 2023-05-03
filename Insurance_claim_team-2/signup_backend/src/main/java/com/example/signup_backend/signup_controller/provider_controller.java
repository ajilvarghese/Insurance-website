package com.example.signup_backend.signup_controller;

import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.signup_model.Provider;
import com.example.signup_backend.signup_repository.Provider_repository;
import com.example.signup_backend.signup_service.Provider_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/signup")
public class provider_controller {
    //................Providers................
    @Autowired
    Provider_service provider_service;
    @Autowired
    Provider_repository provider_repository;
    @GetMapping("/providers")
    public List<Provider> getallProviders(){
        return provider_service.getallProviders();
    }
    //create provider
    @PostMapping("/providers")
    public Provider createProvider(@RequestBody Provider provider){
        return provider_repository.save(provider);
    }
    //get provider by id
    @GetMapping("/providers/{provider_id}")
    public ResponseEntity<Provider> getProviderBYId(@PathVariable Long provider_id){
        Provider provider = provider_repository.findById(provider_id).orElseThrow(() -> new UserNotFoundException("Provider does not exit !! id :"+ provider_id));
        return ResponseEntity.ok(provider);
    }
    //update Providers
    @PutMapping("/providers/{provider_id}")
    public ResponseEntity<Provider> updateProvider(@PathVariable Long provider_id,@RequestBody Provider providerDetails){
        Provider provider = provider_repository.findById(provider_id).orElseThrow(() -> new UserNotFoundException("Provider does not exit !! id :"+ provider_id));
        provider.setHospital_clinic(providerDetails.getHospital_clinic());
        provider.setState(providerDetails.getState());
        provider.setCity(providerDetails.getCity());
        provider.setContact_number(providerDetails.getContact_number());
        Provider updateprovider = provider_repository.save(provider);
        return ResponseEntity.ok(updateprovider);
    }
    //delete provider rest api
    @DeleteMapping("/providers/{provider_id}")
    public ResponseEntity<Map<String,Boolean>> deleteProvider(@PathVariable Long provider_id){
        Provider provider = provider_repository.findById(provider_id).orElseThrow(() -> new UserNotFoundException("Provider does not exit !! id :"+ provider_id));
        provider_repository.delete(provider);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }



    //.........................................
}
