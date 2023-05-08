package com.example.signup_backend.repository;

import com.example.signup_backend.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Provider_repository extends JpaRepository<Provider,Long> {
}
