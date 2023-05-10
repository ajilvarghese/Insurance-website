package com.example.signup_backend.exceptions;

import com.example.signup_backend.model.ErrorResponse;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.slf4j.Logger;
import java.time.LocalDateTime;


@RestControllerAdvice
public class GlobalExceptionHandler extends RuntimeException {
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(EmptyDatabaseException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFoundException(Exception ex) {
        logger.error(ex.getMessage(), ex);
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND, ex.getMessage(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, errorResponse.getStatus());
    }
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> UserNotFoundException(Exception ex) {
        logger.error(ex.getMessage(), ex);
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND, ex.getMessage(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, errorResponse.getStatus());
    }
    @ExceptionHandler(DatabaseAccessException.class)
    public ResponseEntity<ErrorResponse> DatabaseAccessException(Exception ex) {
        logger.error(ex.getMessage(), ex);
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND, ex.getMessage(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, errorResponse.getStatus());
    }
    @ExceptionHandler(InvalidSpecialtyException.class)
    public ResponseEntity<ErrorResponse> InvalidSpecialtyException(Exception ex) {
        logger.error(ex.getMessage(), ex);
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND, ex.getMessage(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, errorResponse.getStatus());
    }
    @ExceptionHandler(UpdateFailedException.class)
    public ResponseEntity<ErrorResponse> UpdateFailedException(Exception ex) {
        logger.error(ex.getMessage(), ex);
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND, ex.getMessage(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, errorResponse.getStatus());
    }
    @ExceptionHandler(ForeignKeyNotFoundException.class)
    public ResponseEntity<ErrorResponse> ForeignKeyNotFoundException(Exception ex) {
        logger.error(ex.getMessage(), ex);
        ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND, ex.getMessage(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, errorResponse.getStatus());
    }


}
