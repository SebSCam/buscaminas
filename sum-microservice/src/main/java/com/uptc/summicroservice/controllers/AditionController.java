package com.uptc.summicroservice.controllers;

import com.uptc.summicroservice.Adition;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class AditionController {
    

    @GetMapping("/adition/{nums}")
    public Adition getMethodName(@RequestParam String nums) {
        return new Adition(parseNums(nums));
    }

    private double[] parseNums(String nums) {
        return null;
    }
    
}
