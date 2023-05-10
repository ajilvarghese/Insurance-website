package com.example.signup_backend.exceptions;

public class EmptyDatabaseException extends RuntimeException{
    public EmptyDatabaseException(String message){
        super(message);
    }
}
