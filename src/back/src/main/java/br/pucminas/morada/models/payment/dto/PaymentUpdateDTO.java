package br.pucminas.morada.models.payment.dto;

import lombok.Data;
import org.springframework.lang.Nullable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class PaymentUpdateDTO {
    private Long id;
    @Nullable private BigDecimal rentValue;
    @Nullable private Integer competenceMonth;
    @Nullable private Integer competenceYear;
    @Nullable private String status;
}

