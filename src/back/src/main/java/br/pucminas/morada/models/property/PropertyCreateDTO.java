package br.pucminas.morada.models.property;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PropertyCreateDTO {

    @NotNull
    @Enumerated(EnumType.STRING)
    private PropertyType type;

    @NotNull
    private String zipCode;

    @NotBlank
    @Length(max = 100)
    private String street;

    @NotNull
    @Min(1)
    private Integer number;

    @Length(max = 100)
    private String complement;

    @NotBlank
    @Length(max = 100)
    private String neighborhood;

    @NotBlank
    @Length(max = 100)
    private String city;

    @NotBlank
    @Length(min = 2, max = 2)
    private String state;

    @NotBlank
    @Length(min = 2, max = 2)
    private String country;

    @NotBlank
    private String description;

    @NotNull
    @Min(1)
    @Max(32767)
    private Integer area;

    @NotNull
    @Min(0)
    private Integer bedrooms;

    @NotNull
    @Min(0)
    private Integer bathrooms;

    @NotNull
    @Min(0)
    private Integer garageSpaces;

    @NotNull
    private Boolean acceptsPet;

    @NotNull
    private Boolean furnished;

    @NotNull
    private BigDecimal rentValue;

    private BigDecimal condominiumFee;

    @NotNull
    private BigDecimal iptuValue;

    @NotBlank
    private String photoBase64;

}
