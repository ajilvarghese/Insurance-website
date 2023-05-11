package com.example.signup_backend.exceptions;

public class UpdateFailedException extends RuntimeException{
    public UpdateFailedException(String message){
        super(message);
    }
}