package com.example.signup_backend.signup_repository;

import com.example.signup_backend.signup_model.Signup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface Sigup_repositiory extends JpaRepository<Signup,Long>{
//    Signup save(Signup signup);
//
//    List<Signup> findAll();
//    Optional<Signup> findByGovIdOrPhoneNumber(String email_id , Long phone_no);
}
