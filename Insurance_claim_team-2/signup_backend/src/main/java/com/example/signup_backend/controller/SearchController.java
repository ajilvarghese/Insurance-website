package com.example.signup_backend.controller;
import com.example.signup_backend.exceptions.*;
import com.example.signup_backend.model.Doctor;
import com.example.signup_backend.model.Provider;
import com.example.signup_backend.model.Search;
import com.example.signup_backend.repository.DoctorRepository;
import com.example.signup_backend.repository.ProviderRepository;
import com.example.signup_backend.repository.SearchRepository;
import com.example.signup_backend.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/signup")
public class SearchController {
    @Autowired
    SearchRepository search_repository;
    @Autowired
    SearchService search_service;
    @Autowired
    DoctorRepository doctorRepository;
    @Autowired
    ProviderRepository providerRepository;


    //..........Search.........................


    @GetMapping("/search")
    public List<Search> getallsearch() {

        List<Search> searches = search_service.getallsearch();
        if (searches.isEmpty()) {
            throw new EmptyDatabaseException("Search database is empty");
        }
        return search_service.getallsearch();

    }

    //create search
    @PostMapping("/search")
    public Search createSearch(@RequestBody Search search) {
        Long doctorId = search.getDoctorId();
        if (!doctorRepository.existsById(doctorId)) {
            throw new UserNotFoundException("Doctor does not exist !! id :" + doctorId);
        }
        Long providerId = search.getProviderId();
        if (!providerRepository.existsById(providerId)) {
            throw new UserNotFoundException("Provider does not exist !! id :" + providerId);
        }
        try {
            return search_repository.save(search);
        } catch (Exception ex) {
            throw new ForeignKeyNotFoundException("Duplicate Entry");
        }

    }

    //get search by id
    @GetMapping("/search/{searchId}")
    public ResponseEntity<Search> getSearchBYId(@PathVariable Long searchId) {

        Search search = search_repository.findById(searchId).orElseThrow(() -> new UserNotFoundException("search variable does not exist !! id :" + searchId));
        return ResponseEntity.ok(search);

    }

    //update search
    @PutMapping("/search/{searchId}")
    public ResponseEntity<Search> updateSearch(@PathVariable Long searchId, @RequestBody Search searchDetails) {

        Search search = search_repository.findById(searchId).orElseThrow(() -> new UserNotFoundException("search variable does not exist !! id :" + searchId));
        Long doctorId = searchDetails.getDoctorId();
        if (!doctorRepository.existsById(doctorId)) {
            throw new UserNotFoundException("Doctor does not exist !! id :" + doctorId);
        }
        Long providerId = searchDetails.getProviderId();
        if (!providerRepository.existsById(providerId)) {
            throw new UserNotFoundException("Provider does not exist !! id :" + providerId);
        }
        try {
            search.setSearchId(searchDetails.getSearchId());
            search.setDoctorId(searchDetails.getDoctorId());
            search.setProviderId(searchDetails.getProviderId());
            Search updatesearch = search_repository.save(search);
            return ResponseEntity.ok(updatesearch);
        } catch (Exception ex) {
            throw new ForeignKeyNotFoundException("Duplicate Entry");
        }

    }

    //delete search rest api
    @DeleteMapping("/search/{searchId}")
    public ResponseEntity<Map<String, Boolean>> deleteSearch(@PathVariable Long searchId) {

        Search search = search_repository.findById(searchId).orElseThrow(() -> new UserNotFoundException("search variable does not exist !! id :" + searchId));
        try {
            search_repository.delete(search);
            Map<String, Boolean> response = new HashMap<>();
            response.put("Deleted", Boolean.TRUE);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            throw new DeleteFailedException("Failed to delete " + searchId);
        }

    }


    @GetMapping("/search1")
    public List<Map<String, Object>> search() {

        List<Search> searchResults = search_repository.findAll();
        List<Map<String, Object>> results = new ArrayList<>();

        for (Search search : searchResults) {
            Map<String, Object> result = new HashMap<>();
            result.put("searchId", search.getSearchId());
            Doctor doctor = doctorRepository.findById(search.getDoctorId()).orElse(null);
            Provider provider = providerRepository.findById(search.getProviderId()).orElse(null);
            if (doctor != null && provider != null) {
                result.put("doctorId", doctor.getDoctorId());
                result.put("doctorName", doctor.getDoctorName());
                result.put("doctorSpeciality", doctor.getDoctorSpeciality());
                result.put("doctorDescription", doctor.getDoctorDescription());
                result.put("providerId", provider.getProviderId());
                result.put("hospitalClinic", provider.getHospitalClinic());
                result.put("state", provider.getState());
                result.put("city", provider.getCity());
                result.put("contactNumber", provider.getContactNumber());
                results.add(result);
            }
        }
            return results;

        }

    }

