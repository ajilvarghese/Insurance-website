package com.example.signup_backend.controller;

import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.model.ErrorResponse;
import com.example.signup_backend.model.Illness;
import com.example.signup_backend.repository.Illness_repository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/signup")
public class IllnessController {
    private static final Logger logger = LoggerFactory.getLogger(UserNotFoundException.class);
    @Autowired
    Illness_repository illnessRepository;
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFoundException(UserNotFoundException ex) {
        logger.error(ex.getMessage(), ex);
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND, ex.getMessage(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, errorResponse.getStatus());
    }

    //.....to fetch illlness.......
    @GetMapping("/illnesses")
    public List<Illness> getIllnesses() {

        return (List<Illness>) illnessRepository.findAll();
    }
}
