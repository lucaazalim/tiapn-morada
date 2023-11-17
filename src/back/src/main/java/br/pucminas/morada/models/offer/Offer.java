package br.pucminas.morada.models.offer;

import br.pucminas.morada.models.offer.dto.OfferDTO;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "offer")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false, updatable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "property_id", nullable = false, updatable = false)
    private Property property;

    @Column(name = "rent_value")
    private BigDecimal rentValue;

    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    private OfferStatus status = OfferStatus.PENDING;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public OfferDTO toDTO() {
        return new OfferDTO(
                this.id,
                this.user.getId(),
                this.property.getId(),
                this.rentValue,
                this.status,
                this.createdAt
        );
    }

}
