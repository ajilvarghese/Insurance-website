package com.example.signup_backend.signup_service;

import com.example.signup_backend.exceptions.UserNotFoundException;
import com.example.signup_backend.signup_model.Signup;
import com.example.signup_backend.signup_repository.Sigup_repositiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Signup_service {
    @Autowired Sigup_repositiory sigupRepositiory;

    public Signup saveSignup(Signup signup){
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String encryptedPwd=bcrypt.encode(signup.getPassword());
        signup.setPassword(encryptedPwd);
        return sigupRepositiory.save(signup);
    }
    public ResponseEntity<?> authenticateUser(Signup signup) throws UserNotFoundException {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        Optional<Signup> opUser=sigupRepositiory.findById(signup.getGov_id());
        if(opUser.isPresent())
        {
            Signup dbUser = opUser.get();
            if(bcrypt.matches(signup.getPassword(),dbUser.getPassword()))

                return ResponseEntity.ok("Signed In Successfully");

            else
                throw new UserNotFoundException("Incorrect Password");

//                return ResponseEntity.badRequest().body("Incorrect Password") ;


        }
        throw new UserNotFoundException("No user is not found for this username !!");
    }
    public List<Signup> getAllSignups() {
        return sigupRepositiory.findAll();
    }


}
