package com.nguyenquyen.hotelcalifornia.excepttion;

public class ResourceNotFoundException extends RuntimeException{
    public ResourceNotFoundException(String message){
        super(message);
    }
}
