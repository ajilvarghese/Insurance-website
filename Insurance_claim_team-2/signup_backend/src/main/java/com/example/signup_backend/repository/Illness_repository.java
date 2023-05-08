package com.example.signup_backend.repository;

import com.example.signup_backend.model.Illness;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Illness_repository extends JpaRepository<Illness,Long> {
}
