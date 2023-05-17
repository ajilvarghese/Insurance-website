package com.example.signup_backend.service;

import com.example.signup_backend.model.City;
import com.example.signup_backend.model.State;
import com.example.signup_backend.repository.CityRepository;
import com.example.signup_backend.repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StateService {
    @Autowired
    private StateRepository stateRepository;



    @Autowired
    private CityRepository cityRepository;



    public List<State> getStates() {
        return stateRepository.findAll();
    }




    public List<City> getCitiesByStateId(Long stateId) {
        return cityRepository.findByStateId(stateId);
    }
}