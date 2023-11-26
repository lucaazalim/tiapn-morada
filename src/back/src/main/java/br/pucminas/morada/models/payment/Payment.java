package br.pucminas.morada.models.payment;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import br.pucminas.morada.models.payment.dto.PaymentDTO;
import br.pucminas.morada.models.rental.Rental;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
@Table(name = "payment")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "rental_id", nullable = false, updatable = false)
    private Rental rental;

    @Column(name = "rent_value")
    private BigDecimal rentValue;

    @Column(name = "competence_month", nullable = false)
    private Integer competenceMonth;

    @Column(name = "competence_year", nullable = false)
    private Integer competenceYear;

    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    private PaymentStatus status = PaymentStatus.ALLEGEDLY_PAID;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    public PaymentDTO toDTO() {
        return new PaymentDTO(
                this.id,
                this.rental.getId(),
                this.rentValue,
                this.competenceMonth,
                this.competenceYear,
                this.status,
                this.createdAt
        );
    }
}

