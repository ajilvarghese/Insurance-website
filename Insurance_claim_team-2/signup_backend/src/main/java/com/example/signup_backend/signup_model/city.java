package com.example.signup_backend.signup_model;

//public class city {
//}
import jakarta.persistence.*;

@Entity
@Table(name = "city")
public class city {


    @Id
    private Long id;
    private String name;
    @ManyToOne
    @JoinColumn(name = "state_id")
    private state state;

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

    public state getState() {
        return state;
    }

    public void setState(state state) {
        this.state = state;
    }
}
