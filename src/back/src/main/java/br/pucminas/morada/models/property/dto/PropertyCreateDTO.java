package br.pucminas.morada.models.property.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.property.PropertyType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public record PropertyCreateDTO(
        @NotNull @Enumerated(EnumType.STRING) PropertyType type,
        @NotNull String zipCode,
        @NotBlank @Length(max = 100) String street,
        @NotNull @Min(1) Integer number,
        @Length(max = 100) String complement,
        @NotBlank @Length(max = 100) String neighborhood,
        @NotBlank @Length(max = 100) String city,
        @NotBlank @Length(min = 2, max = 2) String state,
        @NotBlank @Length(min = 2, max = 2) String country,
        @NotBlank String description,
        @NotNull @Min(1) @Max(32767) Integer area,
        @NotNull @Min(0) Integer bedrooms,
        @NotNull @Min(0) Integer bathrooms,
        @NotNull @Min(0) Integer garageSpaces,
        @NotNull Boolean acceptsPet,
        @NotNull Boolean furnished,
        @NotNull BigDecimal rentValue,
        BigDecimal condominiumFee,
        @NotNull BigDecimal iptuValue,
        @NotBlank String photoBase64
) implements DTO<Property> {}
