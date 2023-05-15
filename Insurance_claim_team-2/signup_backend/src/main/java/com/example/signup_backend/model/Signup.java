package com.example.signup_backend.model;

import jakarta.persistence.*;


import java.sql.Date;

@Entity
@Table(name="signup")
public class Signup {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private long memberId;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email_id")
    private String emailId;
    @Id
    @Column(name = "phone_no")
    private Long phoneNo;

    @Column(name = "gender")
    @Enumerated(EnumType.STRING)

    private Gender gender;
    //    private enum gender{Male,Female,Other}
    @Column(name = "dob")
    private Date dob;
    @Column(name = "postal_code")
    private int postalCode;
    @Column(name = "address")
    private  String address;

    @Column(name = "gov_id")
    private Long govId;

    @Column(name = "medical_history")
    private String medicalHistory;
    @Column(name = "is_tobacco_user")
    private String isTobaccoUser;

    private String password;
    @Column(name = "city_id")
    private String cityId;
    @Column(name = "state_id")
    private String stateId;
    @Column(name="role")
    private String role;

    public Long getPhoneNo() {
        return phoneNo;
    }
    public void setPhoneNo(Long phoneNo) {
        this.phoneNo = phoneNo;
    }
    public Gender getGender() {
        return gender;
    }
    public void setGender(Gender gender) {
        this.gender = gender;
    }
    public long getMemberId() {
        return memberId;
    }
    public void setMemberId(long memberId) {
        this.memberId = memberId;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public int getPostalCode() {

        return postalCode;
    }
    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public Long getGovId() {
        return govId;
    }
    public void setGovId(Long govId) {
        this.govId = govId;
    }
    public String getMedicalHistory() {
        return medicalHistory;
    }
    public void setMedicalHistory(String medicalHistory) {
        this.medicalHistory = medicalHistory;
    }
    public String getIsTobaccoUser() {
        return isTobaccoUser;
    }
    public void setIsTobaccoUser(String isTobaccoUser) {
        this.isTobaccoUser = isTobaccoUser;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getCityId() {
        return cityId;
    }
    public void setCityId(String cityId) {
        this.cityId = cityId;
    }
    public String getStateId() {
        return stateId;
    }
    public void setStateId(String state_id) {
        this.stateId = state_id;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
}
