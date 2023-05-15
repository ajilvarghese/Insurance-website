package com.example.signup_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="search")

public class Search {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "search_id")
    private Long searchId;

    @Column(name = "doctor_id")
    private Long doctorId;

    @Column(name = "provider_id")
    private Long providerId;
    public Long getSearchId() {
        return searchId;
    }
    public void setSearchId(Long searchId) {
        this.searchId = searchId;
    }
    public Long getDoctorId() {
        return doctorId;
    }
    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }
    public Long getProviderId() {
        return providerId;
    }
    public void setProviderId(Long providerId) {
        this.providerId = providerId;
    }
}
