package com.example.signup_backend.exceptions;

public class DeleteFailedException  extends RuntimeException{
    public DeleteFailedException(String message){
        super(message);
    }
}
