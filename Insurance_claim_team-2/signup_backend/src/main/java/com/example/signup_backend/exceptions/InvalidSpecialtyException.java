package com.example.signup_backend.exceptions;

public class InvalidSpecialtyException extends  RuntimeException {
    public InvalidSpecialtyException(String message, Exception ex) {
        super(message);
    }
}
