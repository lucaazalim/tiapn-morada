package br.pucminas.morada.models.property.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.property.PropertyStatus;
import br.pucminas.morada.models.property.PropertyType;
import br.pucminas.morada.models.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@JsonIgnoreProperties(ignoreUnknown = true)
public record PropertyDTO(
        Long id,
        Long userId,
        PropertyType type,
        String zipCode,
        String street,
        Integer number,
        String complement,
        String neighborhood,
        String city,
        String state,
        String country,
        String description,
        Integer area,
        Integer bedrooms,
        Integer bathrooms,
        Integer garageSpaces,
        Boolean acceptsPet,
        Boolean furnished,
        BigDecimal rentValue,
        BigDecimal condominiumFee,
        BigDecimal iptuValue,
        String photoBase64,
        PropertyStatus status,
        LocalDateTime createdAt
) implements DTO<Property> {}
