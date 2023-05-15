package com.example.signup_backend.model;

import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

public class ErrorResponse {
    private HttpStatus status;
    private String message;
    private LocalDateTime timeStamp;
    public ErrorResponse(HttpStatus status, String message, LocalDateTime timeStamp) {
        this.status = status;
        this.message = message;
        this.timeStamp = timeStamp;
    }
    public HttpStatus getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }
    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }
}
