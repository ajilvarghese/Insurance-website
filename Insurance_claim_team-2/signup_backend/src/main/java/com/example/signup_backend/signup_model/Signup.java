package com.example.signup_backend.signup_model;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.sql.Date;
import java.time.LocalDate;
@Entity
@Table(name="signup")
public class Signup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int member_id;
    private String first_name;
    private String last_name;
    private String email_id;
    private Long phone_number;
    private enum gender{Male,Female,Other}
    private Date dob;

    private int postal_code;
    private  String address;
    private int govt_id;
    private String tobacco_details;

    private String password;

    public int getMember_id() {
        return member_id;
    }

    public void setMember_id(int member_id) {
        this.member_id = member_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail_id() {
        return email_id;
    }

    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }

    public Long getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(Long phone_number) {
        this.phone_number = phone_number;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public int getPostal_code() {
        return postal_code;
    }

    public void setPostal_code(int postal_code) {
        this.postal_code = postal_code;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getGovt_id() {
        return govt_id;
    }

    public void setGovt_id(int govt_id) {
        this.govt_id = govt_id;
    }

    public String getTobacco_details() {
        return tobacco_details;
    }

    public void setTobacco_details(String tobacco_details) {
        this.tobacco_details = tobacco_details;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
