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

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class PropertyDTO implements DTO<Property> {

    private Long id;
    private Long userId;
    private PropertyType type;
    private String zipCode;
    private String street;
    private Integer number;
    private String complement;
    private String neighborhood;
    private String city;
    private String state;
    private String country;
    private String description;
    private Integer area;
    private Integer bedrooms;
    private Integer bathrooms;
    private Integer garageSpaces;
    private Boolean acceptsPet;
    private Boolean furnished;
    private BigDecimal rentValue;
    private BigDecimal condominiumFee;
    private BigDecimal iptuValue;
    private String photoBase64;
    private PropertyStatus status = PropertyStatus.PENDING_APPROVAL;
    private LocalDateTime createdAt;

}
