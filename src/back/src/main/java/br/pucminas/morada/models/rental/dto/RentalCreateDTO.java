package br.pucminas.morada.models.rental.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import br.pucminas.morada.models.rental.Rental;
import org.springframework.lang.Nullable;

import jakarta.validation.constraints.NotNull;


import br.pucminas.morada.models.DTO;

public record RentalCreateDTO (

    @NotNull
    Long propertyId,

    @NotNull
    Long offerId,

    @NotNull
    BigDecimal rentValue,

    @NotNull
    String contractHtml,

    @NotNull
    boolean contractSignedByOwner,

    @NotNull
    boolean contractSignedByRenter,

    @NotNull
    boolean terminated,

    @Nullable
    LocalDateTime terminatedAt
    
 ) implements DTO<Rental>{

}
