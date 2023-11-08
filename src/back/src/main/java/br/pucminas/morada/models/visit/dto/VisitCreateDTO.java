package br.pucminas.morada.models.visit.dto;

import java.time.LocalDateTime;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.visit.Visit;
import io.micrometer.common.lang.Nullable;
import jakarta.validation.constraints.*;

public record VisitCreateDTO(
    @NotBlank LocalDateTime datetime,
    @NotEmpty Boolean carriedOut,
    @Nullable Boolean visitRating,
    @Nullable Boolean propertyRating,
    @Nullable String comments,
    @NotBlank LocalDateTime createdAt
)implements DTO<Visit> {}


//?: ids?
//todo: mudar rating -> não pode ser boolean