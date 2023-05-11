package com.example.signup_backend.repository;

import com.example.signup_backend.model.Search;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SearchRepository extends JpaRepository<Search,Long> {
}
