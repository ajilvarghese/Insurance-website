package com.example.signup_backend.signup_model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "illness")
public class Illness {
    @Id
    private int illness_id;

    public int getIllness_id() {
        return illness_id;
    }

    public void setIllness_id(int illness_id) {
        this.illness_id = illness_id;
    }

    public String getIllness_name() {
        return illness_name;
    }

    public void setIllness_name(String illness_name) {
        this.illness_name = illness_name;
    }

    private String illness_name;


}
