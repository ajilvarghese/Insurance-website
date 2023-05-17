package com.example.signup_backend.repository;
import com.example.signup_backend.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository


public interface CityRepository extends JpaRepository<City,Long> {


    List<City> findByStateId(Long stateId);

}