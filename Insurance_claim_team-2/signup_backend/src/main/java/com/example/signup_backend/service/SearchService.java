package com.example.signup_backend.service;

import com.example.signup_backend.model.Search;
import com.example.signup_backend.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {
    @Autowired
    SearchRepository search_repository;
    public List<Search> getallsearch(){
        return search_repository.findAll();
    }

}
