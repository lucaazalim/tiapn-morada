package br.pucminas.morada.models.offer.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.offer.Offer;
import jakarta.validation.constraints.*;
import java.math.BigDecimal;

public record OfferCreateDTO(

        @NotNull 
        BigDecimal rentValue
,
        @NotNull
        Long propertyId

) implements DTO<Offer> {
}
