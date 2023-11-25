package br.pucminas.morada.models.rental.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.rental.Rental;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record RentalDTO (
    Long id,
    Long propertyId,
    Long offerId,
    Long userId,
    BigDecimal rentValue,
    String contractHtml,
    boolean contractSignedByOwner,
    boolean contractSignedByRenter,
    boolean terminated,
    LocalDateTime terminatedAt,
    LocalDateTime createdAt


) implements DTO<Rental> {}
