package com.example.signup_backend.signup_controller;

import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.signup_model.Search;
import com.example.signup_backend.signup_repository.Search_repository;
import com.example.signup_backend.signup_service.Search_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/signup")
public class search_controller {
    //..........Search.........................
    @Autowired
    Search_repository search_repository;
    @Autowired
    Search_service search_service;
    @GetMapping("/search")
    public List<Search> getallsearch(){
        return search_service.getallsearch();
    }
    //create search
    @PostMapping("/search")
    public Search createSearch(@RequestBody Search search){
        return search_repository.save(search);
    }
    //get search by id
    @GetMapping("/search/{search_id}")
    public ResponseEntity<Search> getSearchBYId(@PathVariable Long search_id){
        Search search = search_repository.findById(search_id).orElseThrow(() -> new UserNotFoundException("search variable does not exit !! id :"+ search_id));
        return ResponseEntity.ok(search);
    }
    //update search
    @PutMapping("/search/{search_id}")
    public ResponseEntity<Search> updateSearch(@PathVariable Long search_id,@RequestBody Search searchDetails){
        Search search = search_repository.findById(search_id).orElseThrow(() -> new UserNotFoundException("search variable does not exit !! id :"+ search_id));
        search.setSearch_id(searchDetails.getSearch_id());
        search.setDoctor_id(searchDetails.getDoctor_id());
        search.setProvider_id(searchDetails.getProvider_id());
        Search updatesearch = search_repository.save(search);
        return ResponseEntity.ok(updatesearch);
    }
    //delete search rest api
    @DeleteMapping("/search/{search_id}")
    public ResponseEntity<Map<String,Boolean>> deletesearch(@PathVariable Long search_id){
        Search search = search_repository.findById(search_id).orElseThrow(() -> new UserNotFoundException("search variable does not exit !! id :"+ search_id));
        search_repository.delete(search);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @GetMapping("/search1")
    public List<Map<String, Object>> search() {
        String query = "SELECT search_id,provider.provider_id,doctor.doctor_id,provider.hospital_clinic ,provider.state,provider.city,provider.contact_number, doctor.doctor_name, doctor.doctor_speciality, doctor.doctor_description FROM search JOIN doctor ON search.doctor_id = doctor.doctor_id JOIN provider ON search.provider_id = provider.provider_id";
        List<Map<String, Object>> results = jdbcTemplate.queryForList(query);
        return results;
    }

    //........................................
}
