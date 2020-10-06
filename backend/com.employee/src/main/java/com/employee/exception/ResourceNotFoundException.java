package com.employee.exception;

//Exception Handling

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
//Annotate with ResponseStatus and pass params HttpStatus.NOT_FOUND  to throw error if resource not found
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
    //https://www.tutorialspoint.com/spring_boot/spring_boot_exception_handling.htm
    private static final long serialVersionUID = 1L;

public  ResourceNotFoundException(String message){
        super(message);
}
}
