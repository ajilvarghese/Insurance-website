package com.example.signup_backend.signup_repository;

import com.example.signup_backend.signup_model.Illness;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Illness_repository extends JpaRepository<Illness,Long> {

}
