package com.example.signup_backend.exceptions;

public class UpdateFailedException extends RuntimeException{
    public UpdateFailedException(String message, Exception ex){
        super(message);
    }
}