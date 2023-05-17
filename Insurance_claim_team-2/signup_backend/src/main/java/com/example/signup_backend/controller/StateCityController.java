package com.example.signup_backend.controller;

import com.example.signup_backend.model.City;
import com.example.signup_backend.model.State;
import com.example.signup_backend.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/state-city")
public class StateCityController {



    @Autowired
    private StateService stateCityService;



    @GetMapping("/states")
    public List<State> getStates() {
        return stateCityService.getStates();
    }



    @GetMapping("/{stateId}/cities")
    public List<City> getCitiesByStateId(@PathVariable Long stateId) {
        return stateCityService.getCitiesByStateId(stateId);
    }
}
