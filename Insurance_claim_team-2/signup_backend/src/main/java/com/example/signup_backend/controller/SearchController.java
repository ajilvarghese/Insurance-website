package com.example.signup_backend.controller;

import com.example.signup_backend.exceptions.DatabaseAccessException;
import com.example.signup_backend.exceptions.EmptyDatabaseException;
import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.model.Doctor;
import com.example.signup_backend.model.ErrorResponse;
import com.example.signup_backend.model.Provider;
import com.example.signup_backend.model.Search;
import com.example.signup_backend.repository.Doctor_repository;
import com.example.signup_backend.repository.Provider_repository;
import com.example.signup_backend.repository.Search_repository;
import com.example.signup_backend.service.Search_service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/signup")
public class SearchController {
    private static final Logger logger = LoggerFactory.getLogger(UserNotFoundException.class);
    @Autowired
    Search_repository search_repository;
    @Autowired
    Search_service search_service;
    @Autowired
    Doctor_repository doctorRepository;
    @Autowired
    Provider_repository providerRepository;

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFoundException(UserNotFoundException ex) {
        logger.error(ex.getMessage(), ex);
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND, ex.getMessage(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, errorResponse.getStatus());
    }
    //..........Search.........................


    @GetMapping("/search")
    public List<Search> getallsearch() {
        List<Search> searches=search_service.getallsearch();
        if(searches.isEmpty()){
            throw new EmptyDatabaseException("Search database is empty");
        }
        return search_service.getallsearch();
    }

    //create search
    @PostMapping("/search")
    public Search createSearch(@RequestBody Search search) {
        try{
            return search_repository.save(search);
        }catch (Exception ex){
            throw new DatabaseAccessException("Error occurred while creating ", ex);
        }

    }

    //get search by id
    @GetMapping("/search/{search_id}")
    public ResponseEntity<Search> getSearchBYId(@PathVariable Long search_id) {
        Search search = search_repository.findById(search_id).orElseThrow(() -> new UserNotFoundException("search variable does not exist !! id :" + search_id));
        return ResponseEntity.ok(search);
    }

    //update search
    @PutMapping("/search/{search_id}")
    public ResponseEntity<Search> updateSearch(@PathVariable Long search_id, @RequestBody Search searchDetails) {
        Search search = search_repository.findById(search_id).orElseThrow(() -> new UserNotFoundException("search variable does not exist !! id :" + search_id));
        search.setSearch_id(searchDetails.getSearch_id());
        search.setDoctor_id(searchDetails.getDoctor_id());
        search.setProvider_id(searchDetails.getProvider_id());
        Search updatesearch = search_repository.save(search);
        return ResponseEntity.ok(updatesearch);
    }

    //delete search rest api
    @DeleteMapping("/search/{search_id}")
    public ResponseEntity<Map<String, Boolean>> deletesearch(@PathVariable Long search_id) {
        Search search = search_repository.findById(search_id).orElseThrow(() -> new UserNotFoundException("search variable does not exist !! id :" + search_id));
        search_repository.delete(search);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


    @GetMapping("/search1")
    public List<Map<String, Object>> search() {
        List<Search> searchResults = search_repository.findAll();
        List<Map<String, Object>> results = new ArrayList<>();

        for (Search search : searchResults) {
            Map<String, Object> result = new HashMap<>();
            result.put("search_id",search.getSearch_id());
            Doctor doctor = doctorRepository.findById(search.getDoctor_id()).orElse(null);
            Provider provider = providerRepository.findById(search.getProvider_id()).orElse(null);
            if (doctor != null && provider != null) {
                result.put("doctor_id", doctor.getDoctor_id());
                result.put("doctor_name", doctor.getDoctor_name());
                result.put("doctor_speciality", doctor.getDoctor_speciality());
                result.put("doctor_description", doctor.getDoctor_description());
                result.put("provider_id", provider.getProvider_id());
                result.put("hospital_clinic", provider.getHospital_clinic());
                result.put("state", provider.getState());
                result.put("city", provider.getCity());
                result.put("contact_number", provider.getContact_number());
                results.add(result);
            }
        }
        return results;
        //........................................
    }
}
