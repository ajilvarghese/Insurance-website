package com.example.signup_backend.model;

import jakarta.persistence.*;


@Entity
@Table(name = "states")
public class State {
    @Id
    @Column(name = "state_id")
    private Long id;

    @Column(name = "state_name")
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}