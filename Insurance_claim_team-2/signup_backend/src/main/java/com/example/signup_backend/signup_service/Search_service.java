package com.example.signup_backend.signup_service;

import com.example.signup_backend.signup_model.Search;
import com.example.signup_backend.signup_repository.Search_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Search_service {
    @Autowired
    Search_repository search_repository;
    public List<Search> getallsearch(){
        return search_repository.findAll();
    }

}
