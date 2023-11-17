package br.pucminas.morada.models.payment.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class PaymentCreateDTO {
    private Long rentalId;
    private BigDecimal rentValue;
    private Integer competenceMonth;
    private Integer competenceYear;
    private String status;
}

