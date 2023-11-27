package br.pucminas.morada.models.visit.dto;

import java.time.LocalDateTime;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.visit.Visit;
import io.micrometer.common.lang.Nullable;

public record VisitUpdateDTO(
    Long id,
    @Nullable LocalDateTime datetime,
    @Nullable Boolean carriedOut,
    @Nullable Integer visitRating,
    @Nullable Integer propertyRating,
    @Nullable String comments
) implements DTO<Visit> {}