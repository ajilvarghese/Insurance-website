package com.example.signup_backend.controller;
import com.example.signup_backend.exceptions.*;
import com.example.signup_backend.model.Doctor;
import com.example.signup_backend.repository.DoctorRepository;
import com.example.signup_backend.service.DoctorService;
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
    @Autowired
    DoctorRepository doctor_repository;
    @Autowired
    DoctorService doctor_service;

    //get all doctors
    @GetMapping("/doctors")
    public List<Doctor> getAllDoctors(){
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
            String doctorName = doctor.getDoctorName();
            if(doctorName == null || doctorName.isEmpty()){
                throw new IllegalArgumentException("Doctor name cannot be empty or null.");
            }
            return doctor_repository.save(doctor);
        } catch (DataIntegrityViolationException ex) {
            throw new DatabaseAccessException("Duplication of Phone Number");
        } catch (Exception ex){
            throw new DatabaseAccessException("Error occurred while creating a new doctor");
        }
    }

    //get doctor by id
    @GetMapping("/doctors/{doctorId}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable Long doctorId){
        Doctor doctor = doctor_repository.findById(doctorId).orElseThrow(() -> new UserNotFoundException("Doctor does not exist !! id :"+ doctorId));
        return ResponseEntity.ok(doctor);
    }

    //update Doctors
    @PutMapping("/doctors/{doctorId}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long doctorId,@RequestBody Doctor doctorDetails){
        try {
            Doctor doctor = doctor_repository.findById(doctorId).orElseThrow(() -> new UserNotFoundException("Doctor does not exist !! id :"+ doctorId));
            String doctorName = doctorDetails.getDoctorName();
            if(doctorName == null || doctorName.isEmpty()){
                throw new IllegalArgumentException("Doctor name cannot be empty or null.");
            }

            doctor.setDoctorName(doctorDetails.getDoctorName());
            try {
                doctor.setDoctor_speciality(doctorDetails.getDoctorSpeciality());
            } catch (Exception ex) {
                throw new InvalidSpecialtyException("ENUM in Speciality error", ex);
            }
            doctor.setDoctorDescription(doctorDetails.getDoctorDescription());
            Long phoneNumber = doctorDetails.getPhoneNo();
            if(phoneNumber == null || String.valueOf(phoneNumber).isEmpty()){
                throw new IllegalArgumentException("Doctor mobile number cannot be empty or null.");
            }
            doctor.setPhone_no(doctorDetails.getPhoneNo());
            Doctor updateDoctor = doctor_repository.save(doctor);
            return ResponseEntity.ok(updateDoctor);
        }catch (DataIntegrityViolationException ex){
            throw  new UpdateFailedException("Failed to update doctor with Doctor id: " + doctorId + ". Phone number already exists.");
        } catch (IllegalArgumentException ex){
            throw new UpdateFailedException("Doctor name and mobile no cannot be empty");
        }
        catch (Exception ex){
            throw new UpdateFailedException("Updating failed for the doctors");
        }
    }

    //delete doctor rest api
    @DeleteMapping("/doctors/{doctorId}")
    public ResponseEntity<Map<String,Boolean>> deleteDoctor(@PathVariable Long doctorId){
        Doctor doctor = doctor_repository.findById(doctorId).orElseThrow(() -> new UserNotFoundException("Doctor does not exit !! id :"+ doctorId));
        try {
            doctor_repository.delete(doctor);
            Map<String, Boolean> response = new HashMap<>();
            response.put("Deleted", Boolean.TRUE);
            return ResponseEntity.ok(response);
        }catch (Exception ex){
            throw new DatabaseAccessException("Failed to delete doctor with id: " + doctorId);
        }

    }

}
