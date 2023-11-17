package br.pucminas.morada.models.rental;

import br.pucminas.morada.models.rental.dto.RentalDTO;
import br.pucminas.morada.models.user.User;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "rental")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Rental {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @JoinColumn(name = "property_id", nullable = false)
    private Long propertyId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "offer_id", nullable = false)
    private Long offerId;

    @Column(name = "rent_value", nullable = false)
    private BigDecimal rentValue;

    @Column(name = "contract_html", nullable = false)
    private String contractHtml;

    @Column(name = "contract_signed_by_owner", nullable = false)
    private boolean contract_signed_by_owner;

    @Column(name = "contract_signed_by_renter", nullable = false)
    private boolean contract_signed_by_renter;

    @Column(name = "`terminated`", nullable = false)
    private boolean terminated;

    @CreationTimestamp
    @Column(name = "terminated_at", nullable = true)
    private LocalDateTime terminatedAt;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    public RentalDTO toDTO(){
        return new RentalDTO(
            this.id, 
            this.propertyId, 
            this.user.getId(), 
            this.offerId,
            this.rentValue,
            this.contractHtml,
            this.contract_signed_by_owner,
            this.contract_signed_by_renter,
            this.terminated,
            this.terminatedAt,
            this.createdAt
            );
    }

}
