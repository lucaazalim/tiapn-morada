package br.pucminas.morada.models.payment;

import java.time.LocalDateTime;

import br.pucminas.morada.models.payment.dto.PaymentDTO;
import br.pucminas.morada.models.rental.Rental;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "rental_id", nullable = false)
    private Rental rental;

    @Column(name = "rent_value", nullable = false, precision = 15, scale = 2)
    private BigDecimal rentValue;

    @Column(name = "competence_month", nullable = false)
    private Integer competenceMonth;

    @Column(name = "competence_year", nullable = false)
    private Integer competenceYear;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private PaymentStatus status;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
    
    public PaymentDTO toDTO() {
        PaymentDTO dto = new PaymentDTO();
        dto.setId(this.id);
        dto.setRentalId(this.rental != null ? this.rental.getId() : null);
        dto.setRentValue(this.rentValue);
        dto.setCompetenceMonth(this.competenceMonth);
        dto.setCompetenceYear(this.competenceYear);
        dto.setStatus(this.status != null ? this.status.name() : null);
        dto.setCreatedAt(this.createdAt);
        return dto;
    }
}

