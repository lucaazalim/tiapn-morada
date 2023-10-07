package br.pucminas.morada.services.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter
public class GenericException extends RuntimeException {

    private final HttpStatus httpStatus;

    public GenericException(HttpStatus httpStatus, String message) {
        super(message);
        this.httpStatus = httpStatus;
    }

    public GenericException(String message) {
        this(HttpStatus.BAD_REQUEST, message);
    }

}
