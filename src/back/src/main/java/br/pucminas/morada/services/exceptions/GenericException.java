package br.pucminas.morada.services.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class GenericException extends RuntimeException {

    public GenericException(String message) {
        super(message);
    }

}
