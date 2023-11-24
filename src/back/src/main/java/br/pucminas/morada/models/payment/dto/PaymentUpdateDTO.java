package br.pucminas.morada.models.payment.dto;

import br.pucminas.morada.models.payment.PaymentStatus;
import lombok.Data;
import org.springframework.lang.Nullable;
import java.math.BigDecimal;

@Data
public class PaymentUpdateDTO {
    private Long id;
    @Nullable private BigDecimal rentValue;
    @Nullable private Integer competenceMonth;
    @Nullable private Integer competenceYear;
    @Nullable private PaymentStatus status;
}

