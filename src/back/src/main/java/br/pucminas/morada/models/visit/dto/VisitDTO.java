package br.pucminas.morada.models.visit.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.visit.Visit;

@JsonIgnoreProperties(ignoreUnknown = true)
public record VisitDTO(
    Long id,
    Long propertyId,
    Long userId,
    LocalDateTime datetime,
    Boolean carriedOut,
    Boolean visitRating,
    Boolean propertyRating,
    String comments,
    LocalDateTime createdAt
)implements DTO<Visit> {}
