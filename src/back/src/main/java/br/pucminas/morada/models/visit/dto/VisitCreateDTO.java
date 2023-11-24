package br.pucminas.morada.models.visit.dto;

import java.time.LocalDateTime;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.visit.Visit;
import io.micrometer.common.lang.Nullable;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class VisitCreateDTO{
    Long propertyId;
    LocalDateTime datetime;
    Boolean carriedOut;
}

