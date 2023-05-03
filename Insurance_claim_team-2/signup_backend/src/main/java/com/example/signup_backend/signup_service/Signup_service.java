package com.example.signup_backend.signup_service;

import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.signup_model.Signup;
import com.example.signup_backend.signup_repository.Sigup_repositiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class Signup_service {
    @Autowired Sigup_repositiory sigupRepositiory;

    public Signup saveSignup(Signup signup){
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String encryptedPwd=bcrypt.encode(signup.getPassword());
        signup.setPassword(encryptedPwd);
        signup.setRole("user");
        return sigupRepositiory.save(signup);
    }
    public ResponseEntity<?> authenticateUser(@RequestBody Signup signup) throws UserNotFoundException {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        Optional<Signup> opUser=sigupRepositiory.findById(signup.getPhone_no());
//        Optional<Signup> opUser = sigupRepositiory.findByGovIdOrPhoneNumber(signup.getEmail_id(), signup.getPhone_no());
        if(opUser.isPresent())
        {
            Signup dbUser = opUser.get();
            if(bcrypt.matches(signup.getPassword(),dbUser.getPassword())) {
                Map<String, String> response = new HashMap<>();
                response.put("first_name", dbUser.getFirst_name());
                response.put("role", dbUser.getRole());
//                return ResponseEntity.ok("Signed In Successfully");
                return ResponseEntity.ok(response);
            }
            else
                throw new UserNotFoundException("Incorrect Password");

//               return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");


        }
        throw new UserNotFoundException("No user is not found for this username !!");
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Phone Number");
    }
    public List<Signup> getAllSignups() {
        return sigupRepositiory.findAll();
    }


}
