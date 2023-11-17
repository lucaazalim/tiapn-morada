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
    Long userId,
    Long offerId,
    BigDecimal rentValue,
    String contractHtml,
    boolean contract_signed_by_owner,
    boolean contract_signed_by_renter,
    boolean terminated,
    LocalDateTime terminated_at,
    LocalDateTime created_at


) implements DTO<Rental> {}
