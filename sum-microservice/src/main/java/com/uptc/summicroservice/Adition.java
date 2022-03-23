package com.uptc.summicroservice;

public class Adition {
    private double [] nums;
    private double result;

    public Adition(double[] nums) {
        this.nums = nums;
        this.result = calculateResult();
    }

    private double calculateResult() {
        double result = 0;
        for (double num : nums) {
            result += num;
        }
        return result;
    }

    public double[] getNums() {
        return nums;
    }

    public double getResult() {
        return result;
    }
}
