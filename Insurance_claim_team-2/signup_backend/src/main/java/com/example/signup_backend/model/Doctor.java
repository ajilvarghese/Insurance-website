package com.example.signup_backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "doctor_id")
    private Long doctorId;
    @Column(name = "doctor_name")
    private String doctorName;
    @Column(name = "doctor_speciality")
    @Enumerated(EnumType.STRING)
    private DoctorSpeciality doctorSpeciality;
    @Column(name = "doctor_description")
    private String doctorDescription;
    @Column(name="phone_no")
    private Long phoneNo;

    public Long getPhoneNo() {
        return phoneNo;
    }

    public void setPhone_no(Long phoneNo) {
        this.phoneNo = phoneNo;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public DoctorSpeciality getDoctorSpeciality() {
        return doctorSpeciality;
    }

    public void setDoctor_speciality(DoctorSpeciality doctorSpeciality) {
        this.doctorSpeciality = doctorSpeciality;
    }

    public String getDoctorDescription() {
        return doctorDescription;
    }

    public void setDoctorDescription(String doctorDescription) {
        this.doctorDescription = doctorDescription;
    }
}

