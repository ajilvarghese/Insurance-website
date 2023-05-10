package com.example.signup_backend.controller;

import com.example.signup_backend.exceptions.*;
import com.example.signup_backend.model.Doctor;
import com.example.signup_backend.repository.Doctor_repository;
import com.example.signup_backend.service.Doctor_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/signup")

public class DoctorController {
//    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
    @Autowired
    Doctor_repository doctor_repository;
    @Autowired
    Doctor_service doctor_service;

    //get all doctors
    @GetMapping("/doctors")
    public List<Doctor> getallDoctors(){

        List<Doctor> doctors= doctor_service.getallDoctors();
        if(doctors.isEmpty()){

            throw new EmptyDatabaseException(" Doctor database is empty");

            }
        return doctor_service.getallDoctors();
        }


    //create doctor
    @PostMapping("/doctors")
    public Doctor createDoctor(@RequestBody Doctor doctor){
        try{
            return doctor_repository.save(doctor);
        }
        catch (DataIntegrityViolationException ex) {
            throw new DatabaseAccessException("Duplication of Phone Number",ex);
        }
        catch (Exception ex){
            throw new DatabaseAccessException("Error occurred while creating a new doctor", ex);
        }

    }
    //get doctor by id
    @GetMapping("/doctors/{doctor_id}")
    public ResponseEntity<Doctor> getDoctorBYId(@PathVariable Long doctor_id){

        Doctor doctor = doctor_repository.findById(doctor_id).orElseThrow(() -> new UserNotFoundException("Doctor does not exist !! id :"+ doctor_id));
        return ResponseEntity.ok(doctor);

    }

    //update Doctors
    @PutMapping("/doctors/{doctor_id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long doctor_id,@RequestBody Doctor doctorDetails){

        Doctor doctor = doctor_repository.findById(doctor_id).orElseThrow(() -> new UserNotFoundException("Doctor does not exist !! id :"+ doctor_id));
        try {
            doctor.setDoctor_name(doctorDetails.getDoctor_name());
            try {
                doctor.setDoctor_speciality(doctorDetails.getDoctor_speciality());
            } catch (Exception ex) {
                throw new InvalidSpecialtyException("ENUM in Speciality error", ex);
            }
            doctor.setDoctor_description(doctorDetails.getDoctor_description());
            doctor.setPhone_no(doctorDetails.getPhone_no());
            Doctor updateDoctor = doctor_repository.save(doctor);
            return ResponseEntity.ok(updateDoctor);
        }
        catch (DataIntegrityViolationException ex){
            throw  new UpdateFailedException("Failed to update doctor with Doctor id: " + doctor_id + ". Phone number already exists.");
        }
        catch (Exception ex){
            throw new UpdateFailedException("Updating failed for the doctors");
        }


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

}
