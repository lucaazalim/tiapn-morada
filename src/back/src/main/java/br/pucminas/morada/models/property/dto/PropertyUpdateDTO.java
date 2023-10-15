package br.pucminas.morada.models.property.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.property.PropertyStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PropertyUpdateDTO implements DTO<Property> {

    private Long id;

    @Enumerated(EnumType.STRING)
    private PropertyStatus status;

}
