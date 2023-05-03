package com.example.signup_backend.signup_model;

import jakarta.persistence.*;

@Entity
@Table(name="doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doctor_id")
    private Long doctor_id;
    @Column(name = "doctor_name")
    private String doctor_name;
    @Column(name = "doctor_speciality")
    @Enumerated(EnumType.STRING)
    private Doctor_speciality doctor_speciality;
    @Column(name = "doctor_description")
    private String doctor_description;

    public Long getDoctor_id() {
        return doctor_id;
    }

    public void setDoctor_id(Long doctor_id) {
        this.doctor_id = doctor_id;
    }

    public String getDoctor_name() {
        return doctor_name;
    }

    public void setDoctor_name(String doctor_name) {
        this.doctor_name = doctor_name;
    }

    public Doctor_speciality getDoctor_speciality() {
        return doctor_speciality;
    }

    public void setDoctor_speciality(Doctor_speciality doctor_speciality) {
        this.doctor_speciality = doctor_speciality;
    }

    public String getDoctor_description() {
        return doctor_description;
    }

    public void setDoctor_description(String doctor_description) {
        this.doctor_description = doctor_description;
    }
}

