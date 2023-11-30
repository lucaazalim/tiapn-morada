package br.pucminas.morada.models.payment.dto;

import java.math.BigDecimal;
import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.payment.Payment;
import jakarta.validation.constraints.NotNull;

public record PaymentCreateDTO(
        @NotNull Long rentalId,
        @NotNull BigDecimal rentValue,
        @NotNull Integer competenceMonth,
        @NotNull Integer competenceYear
) implements DTO<Payment> {
}
