package com.example.signup_backend.repository;

import com.example.signup_backend.model.Illness;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IllnessRepository extends JpaRepository<Illness,Long> {
}
