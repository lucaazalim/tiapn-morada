package br.pucminas.morada.models.rental.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.rental.Rental;


import java.time.LocalDateTime;

public record RentalUpdateDTO (
    Long id,
    boolean contractSignedByOwner,
    boolean contractSignedByRenter,
    boolean terminated,
    LocalDateTime terminatedAt
) implements DTO<Rental>{}
