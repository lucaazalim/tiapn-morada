package br.pucminas.morada.exceptions;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import org.springframework.beans.factory.annotation.Value;

import java.util.*;

@Getter
@Setter
@RequiredArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorResponse {

    @Value("${server.error.include-exception}")
    private static boolean printStackTrace;

    private final int status;
    private final String message;
    private String stackTrace;
    private List<ValidationError> errors;

    public void setStackTrace(String stackTrace) {
        if(printStackTrace) {
            this.stackTrace = stackTrace;
        }
    }

    public void addValidationError(String field, String message) {

        if (this.errors ==  null) {
            this.errors = new ArrayList<>();
        }

        this.errors.add(new ValidationError(field, message));

    }

    @Getter
    @Setter
    @RequiredArgsConstructor
    private static class ValidationError {
        private final String field;
        private final String message;
    }

}
