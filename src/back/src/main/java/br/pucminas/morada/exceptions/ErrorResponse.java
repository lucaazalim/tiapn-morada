package br.pucminas.morada.exceptions;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.*;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.*;

@Getter
@Setter
@RequiredArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorResponse {

    private final int status;
    private final String message;
    private String stackTrace;
    private List<ValidationError> errors;

    public ErrorResponse(
            Exception exception,
            HttpStatus httpStatus) {

        this(httpStatus.value(), exception.getMessage());

    }

    public ErrorResponse(
            Exception exception,
            String message,
            HttpStatus httpStatus) {

        this(httpStatus.value(), message);
        this.setStackTrace(ExceptionUtils.getStackTrace(exception));

    }

    public void setStackTrace(String stackTrace) {
        this.stackTrace = stackTrace;
    }

    public void addValidationError(String field, String message) {

        if (this.errors == null) {
            this.errors = new ArrayList<>();
        }

        this.errors.add(new ValidationError(field, message));

    }

    public ResponseEntity<Object> toResponseEntity() {
        return ResponseEntity.status(this.status).body(this);
    }

    public String toJson() {

        ObjectMapper objectMapper = new ObjectMapper();

        try {
            return objectMapper.writeValueAsString(this);
        } catch (JsonProcessingException ignored) {
            return null;
        }

    }

    @Getter
    @Setter
    @RequiredArgsConstructor
    private static class ValidationError {
        private final String field;
        private final String message;
    }

}
