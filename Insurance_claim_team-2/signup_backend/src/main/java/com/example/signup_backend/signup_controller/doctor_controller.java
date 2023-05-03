package com.example.signup_backend.signup_controller;

import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.signup_model.Doctor;
import com.example.signup_backend.signup_repository.Doctor_repository;
import com.example.signup_backend.signup_service.Doctor_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/signup")
public class doctor_controller {

    @Autowired
    Doctor_repository doctor_repository;
    @Autowired
    Doctor_service doctor_service;
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
}
