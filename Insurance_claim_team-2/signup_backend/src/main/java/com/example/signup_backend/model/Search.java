package com.example.signup_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="search")

public class Search {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "search_id")
    private Long search_id;
    @Column(name = "doctor_id")
    private Long doctor_id;

    @Column(name = "provider_id")
    private Long provider_id;
    public Long getSearch_id() {
        return search_id;
    }
    public void setSearch_id(Long search_id) {
        this.search_id = search_id;
    }
    public Long getDoctor_id() {
        return doctor_id;
    }
    public void setDoctor_id(Long doctor_id) {
        this.doctor_id = doctor_id;
    }
    public Long getProvider_id() {
        return provider_id;
    }
    public void setProvider_id(Long provider_id) {
        this.provider_id = provider_id;
    }
}
