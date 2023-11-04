package br.pucminas.morada.models.offer.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.offer.Offer;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.property.PropertyType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public record OfferCreateDTO(

        @NotNull BigDecimal rentValue

) implements DTO<Offer> {
}
