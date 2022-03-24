package com.uptc.summicroservice.controllers;

import com.uptc.summicroservice.models.Operation;
import com.uptc.summicroservice.services.OperationService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("operation")
public class OperationController {
    
    private final OperationService service;
    
    public OperationController(OperationService operationService) {
        this.service = operationService;
    }

    @PostMapping
    public double evaluateOperationAndDo(@RequestBody Operation operation) {
        switch(operation.getOperation()) {
            case "+" : 
                return service.addition(operation.getNumberA(), operation.getNumberB());
            case "-" :
                return service.subtraction(operation.getNumberA(), operation.getNumberB());
            case "*":
                return service.multiplication(operation.getNumberA(), operation.getNumberB());
            case "/":
                return service.division(operation.getNumberA(), operation.getNumberB());
        }   
        return -1;
    }
}
