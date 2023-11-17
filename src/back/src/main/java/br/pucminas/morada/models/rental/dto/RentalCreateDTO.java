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
    boolean contract_signed_by_owner,

    @NotNull
    boolean contract_signed_by_renter,

    @NotNull
    boolean terminated,

    @Nullable
    LocalDateTime terminated_at,
    
    @NotNull
    LocalDateTime createdAt

 ) implements DTO<Rental>{

}
