package br.pucminas.morada.models.payment.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.payment.Payment;
import br.pucminas.morada.models.payment.PaymentStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotNull;

public record PaymentUpdateDTO(

        @NotNull PaymentStatus status
        
) implements DTO<Payment> {
}


