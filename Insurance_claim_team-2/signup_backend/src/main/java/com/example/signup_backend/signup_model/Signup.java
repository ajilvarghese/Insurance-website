package com.example.signup_backend.signup_model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
@Entity
@Table(name="signup")
public class Signup {
    @Id
    private int id;

    private String email_id;
    private String first_name;
    private String last_name;
    private Long phone_number;
    private String gender;
    private LocalDate dob;
    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;

    @ManyToOne
    @JoinColumn(name="city_id")
    private City city;
    private int postal_code;
    private  String address;
    private int govt_id;
    private String tobacco_details;

    private String password;
    private String confirm_password;


}
