package com.example.signup_backend.signup_controller;


import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.signup_model.*;
import com.example.signup_backend.signup_repository.*;
import com.example.signup_backend.signup_service.Doctor_service;
import com.example.signup_backend.signup_service.Provider_service;
import com.example.signup_backend.signup_service.Search_service;
import com.example.signup_backend.signup_service.Signup_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/signup")
public class signup_controller {
  @Autowired
    Doctor_service doctor_service;
    @Autowired
    Signup_service signupService;
    @Autowired
    Illness_repository illnessRepository;
    private Sigup_repositiory sigupRepositiory;
    @Autowired Doctor_repository doctor_repository;
    //...........................................
    //get all doctors
    @GetMapping("/doctors")
    public List<Doctor> getallDoctors(){
        return doctor_service.getallDoctors();
    }

    //create doctor
    @PostMapping("/doctors")
    public Doctor createDoctor(@RequestBody Doctor doctor){
        return doctor_repository.save(doctor);
    }
    //get doctor by id
    @GetMapping("/doctors/{doctor_id}")
    public ResponseEntity<Doctor> getDoctorBYId(@PathVariable Long doctor_id){
        Doctor doctor = doctor_repository.findById(doctor_id).orElseThrow(() -> new UserNotFoundException("Doctor does not exit !! id :"+ doctor_id));
        return ResponseEntity.ok(doctor);
    }
    //update Doctors
    @PutMapping("/doctors/{doctor_id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long doctor_id,@RequestBody Doctor doctorDetails){
        Doctor doctor = doctor_repository.findById(doctor_id).orElseThrow(() -> new UserNotFoundException("Doctor does not exit !! id :"+ doctor_id));
        doctor.setDoctor_name(doctorDetails.getDoctor_name());
        doctor.setDoctor_speciality(doctorDetails.getDoctor_speciality());
        doctor.setDoctor_description(doctorDetails.getDoctor_description());
        Doctor updateDoctor = doctor_repository.save(doctor);
        return ResponseEntity.ok(updateDoctor);
    }
    //delete employee rest api
    @DeleteMapping("/doctors/{doctor_id}")
    public ResponseEntity<Map<String,Boolean>> deleteDoctor(@PathVariable Long doctor_id){
        Doctor doctor = doctor_repository.findById(doctor_id).orElseThrow(() -> new UserNotFoundException("Doctor does not exit !! id :"+ doctor_id));
        doctor_repository.delete(doctor);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    //.........................................
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
        String query = "SELECT * FROM search JOIN doctor ON search.doctor_id = doctor.doctor_id JOIN provider ON search.provider_id = provider.provider_id";
        List<Map<String, Object>> results = jdbcTemplate.queryForList(query);
        return results;
    }

    //........................................
    @GetMapping("/all")
    public List<Signup> getAllSignups() {
        return signupService.getAllSignups();
    }
    @PostMapping("/create")
    public ResponseEntity<Signup> saveSignup(@RequestBody Signup signup){

        Signup savedMember= signupService.saveSignup(signup);
//        return ResponseEntity.ok("User Inserted");
        return new ResponseEntity<>(savedMember, HttpStatus.CREATED);
    }
    @GetMapping("/illnesses")
    public List<Illness> getIllnesses() {
        return (List<Illness>) illnessRepository.findAll();
    }

    @PostMapping("/authenticateUser")
    public ResponseEntity<?> authenticateUser(@RequestBody Signup signup){
        return new ResponseEntity<>(signupService.authenticateUser(signup), HttpStatus.CREATED);
    }


}
