package com.example.signup_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="provider")
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "provider_id")
    private Long provider_id;
    @Column(name = "hospital_clinic")
    private String hospital_clinic;
    @Column(name = "state")
    private String state;
    @Column(name = "city")
    private String city;
    @Column(name = "contact_number")
    private Long contact_number;

    public Long getProvider_id() {

        return provider_id;
    }

    public void setProvider_id(Long provider_id) {

        this.provider_id = provider_id;
    }

    public String getHospital_clinic() {

        return hospital_clinic;
    }

    public void setHospital_clinic(String hospital_clinic) {

        this.hospital_clinic = hospital_clinic;
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

    public Long getContact_number() {

        return contact_number;
    }

    public void setContact_number(Long contact_number) {

        this.contact_number = contact_number;
    }
}
