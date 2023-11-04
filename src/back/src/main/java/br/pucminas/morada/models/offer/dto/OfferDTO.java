package br.pucminas.morada.models.offer.dto;

import br.pucminas.morada.models.DTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.pucminas.morada.models.offer.Offer;
import br.pucminas.morada.models.offer.OfferStatus;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@JsonIgnoreProperties(ignoreUnknown = true)
public record OfferDTO(
        Long id,
        Long userId,
        Long property_id,
        BigDecimal rentValue,
        OfferStatus status,
        LocalDateTime created_at

) implements DTO<Offer> {
}
