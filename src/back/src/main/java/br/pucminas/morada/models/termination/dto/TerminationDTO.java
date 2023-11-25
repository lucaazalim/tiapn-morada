package br.pucminas.morada.models.termination.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.rental.Rental;

import java.time.LocalDateTime;


@JsonIgnoreProperties(ignoreUnknown = true)
public record TerminationDTO(
    Long id,
    Long rentalId,
    boolean initiatedByOwner,
    String message,
    LocalDateTime createdAt
    


)implements DTO<Rental> {}