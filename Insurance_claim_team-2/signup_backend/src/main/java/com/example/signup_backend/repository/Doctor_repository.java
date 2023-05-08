package com.example.signup_backend.repository;

import com.example.signup_backend.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Doctor_repository extends JpaRepository<Doctor,Long> {
}
