package com.example.signup_backend.repository;

import com.example.signup_backend.model.Signup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Sigup_repositiory extends JpaRepository<Signup,Long>{

}
