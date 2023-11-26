package br.pucminas.morada.models.payment.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.payment.Payment;
import br.pucminas.morada.models.payment.PaymentStatus;

@JsonIgnoreProperties(ignoreUnknown = true)
public record PaymentDTO(
        Long id,
        Long rentalId,
        BigDecimal rentValue,
        Integer competenceMonth,
        Integer competenceYear,
        PaymentStatus status,
        LocalDateTime createdAt
) implements DTO<Payment> {
}