package com.example.signup_backend.signup_repository;

import com.example.signup_backend.signup_model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Provider_repository extends JpaRepository<Provider,Long> {
}
