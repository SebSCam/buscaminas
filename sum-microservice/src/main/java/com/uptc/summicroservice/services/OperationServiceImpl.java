package com.uptc.summicroservice.services;

import org.springframework.stereotype.Service;

@Service
public class OperationServiceImpl implements OperationService {

    @Override
    public double addition(double a, double b) {
        return a + b;
    }

    @Override
    public double subtraction(double a, double b) {
        return a - b;
    }

    @Override
    public double multiplication(double a, double b) {
        return a * b;
    }

    @Override
    public double division(double a, double b) {
        if(b == 0) throw new ArithmeticException("division by zero");
        return a / b;
    }
    
}
