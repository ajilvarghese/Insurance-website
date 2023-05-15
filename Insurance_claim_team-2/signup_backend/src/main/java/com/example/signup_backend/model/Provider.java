package com.example.signup_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="provider")
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "provider_id")
    private Long providerId;
    @Column(name = "hospital_clinic")
    private String hospitalClinic;
    @Column(name = "state")
    private String state;
    @Column(name = "city")
    private String city;
    @Column(name = "contact_number")
    private Long contactNumber;
    public Long getProviderId() {
        return providerId;
    }
    public void setProviderId(Long providerId) {
        this.providerId = providerId;
    }
    public String getHospitalClinic() {
        return hospitalClinic;
    }
    public void setHospitalClinic(String hospitalClinic) {
        this.hospitalClinic = hospitalClinic;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public Long getContactNumber() {
        return contactNumber;
    }
    public void setContactNumber(Long contactNumber) {
        this.contactNumber = contactNumber;
    }
}
