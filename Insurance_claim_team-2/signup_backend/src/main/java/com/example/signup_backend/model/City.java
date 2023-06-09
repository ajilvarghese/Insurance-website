package com.example.signup_backend.model;

import jakarta.persistence.*;


@Entity
@Table(name = "cities")
public class City {



    @Id
    @Column(name="city_id")
    private Long id;

    @Column(name="city_name")
    private String name;



    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;

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

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }


// getters and setters
}