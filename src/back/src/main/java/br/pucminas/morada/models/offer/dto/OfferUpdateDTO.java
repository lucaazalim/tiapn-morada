package br.pucminas.morada.models.offer.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.offer.Offer;
import br.pucminas.morada.models.offer.OfferStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public record OfferUpdateDTO(

        Long id,
        @Enumerated(EnumType.STRING) OfferStatus status

) implements DTO<Offer> {

}
