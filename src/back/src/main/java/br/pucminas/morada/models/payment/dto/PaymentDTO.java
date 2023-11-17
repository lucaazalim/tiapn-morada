package br.pucminas.morada.models.payment.dto;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class PaymentDTO {
    private Long id;
    private Long rentalId;
    private BigDecimal rentValue;
    private Integer competenceMonth;
    private Integer competenceYear;
    private String status;
    private LocalDateTime createdAt;

}
