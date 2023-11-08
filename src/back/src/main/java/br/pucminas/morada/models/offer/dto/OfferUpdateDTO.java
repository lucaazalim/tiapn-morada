package br.pucminas.morada.models.offer.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.offer.Offer;
import br.pucminas.morada.models.offer.OfferStatus;
import jakarta.validation.constraints.NotNull;

public record OfferUpdateDTO(

        @NotNull
        OfferStatus status

) implements DTO<Offer> {

}
