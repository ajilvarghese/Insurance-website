package com.example.signup_backend.model;

import jakarta.persistence.*;


import java.sql.Date;

@Entity
@Table(name="signup")
public class Signup {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private long member_id;
    @Column(name = "first_name")
    private String first_name;
    @Column(name = "last_name")
    private String last_name;
    @Column(name = "email_id")
    private String email_id;
    @Id
    @Column(name = "phone_no")
    private Long phone_no;

    @Column(name = "gender")
    @Enumerated(EnumType.STRING)

    private Gender gender;
    //    private enum gender{Male,Female,Other}
    @Column(name = "dob")
    private Date dob;
    @Column(name = "postal_code")
    private int postal_code;
    @Column(name = "address")
    private  String address;

    @Column(name = "gov_id")
    private Long gov_id;

    @Column(name = "medical_history")
    private String medical_history;
    @Column(name = "is_tobacco_user")
    private String is_tobacco_user;

    private String password;
    @Column(name = "city_id")
    private String city_id;
    @Column(name = "state_id")
    private String state_id;
    @Column(name="role")
    private String role;

    public Long getPhone_no() {
        return phone_no;
    }
    public void setPhone_no(Long phone_no) {
        this.phone_no = phone_no;
    }
    public Gender getGender() {
        return gender;
    }
    public void setGender(Gender gender) {
        this.gender = gender;
    }
    public long getMember_id() {
        return member_id;
    }
    public void setMember_id(long member_id) {
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
    public Long getGov_id() {
        return gov_id;
    }
    public void setGov_id(Long gov_id) {
        this.gov_id = gov_id;
    }
    public String getMedical_history() {
        return medical_history;
    }
    public void setMedical_history(String medical_history) {
        this.medical_history = medical_history;
    }
    public String getIs_tobacco_user() {
        return is_tobacco_user;
    }
    public void setIs_tobacco_user(String is_tobacco_user) {
        this.is_tobacco_user = is_tobacco_user;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getCity_id() {
        return city_id;
    }
    public void setCity_id(String city_id) {
        this.city_id = city_id;
    }
    public String getState_id() {
        return state_id;
    }
    public void setState_id(String state_id) {
        this.state_id = state_id;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
}
