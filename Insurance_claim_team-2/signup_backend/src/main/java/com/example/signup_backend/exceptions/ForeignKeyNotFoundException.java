package com.example.signup_backend.exceptions;

public class ForeignKeyNotFoundException extends RuntimeException {
    public ForeignKeyNotFoundException(String message) {
        super(message);
    }

    public ForeignKeyNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}