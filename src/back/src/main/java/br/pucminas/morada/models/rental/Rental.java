package br.pucminas.morada.models.rental;

import br.pucminas.morada.Constants;
import br.pucminas.morada.MoradaApplication;
import br.pucminas.morada.models.offer.Offer;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.property.dto.PropertyDTO;
import br.pucminas.morada.models.rental.dto.RentalDTO;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.dto.UserDTO;
import br.pucminas.morada.models.user_verification.UserVerification;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name = "rental")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Rental {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "property_id", nullable = false)
    private Property property;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "offer_id", nullable = false)
    private Offer offer;

    @Column(name = "rent_value", nullable = false)
    private BigDecimal rentValue;

    @Column(name = "contract_html", nullable = false)
    private String contractHtml;

    @Column(name = "contract_signed_by_owner", nullable = false)
    private boolean contract_signed_by_owner;

    @Column(name = "contract_signed_by_renter", nullable = false)
    private boolean contract_signed_by_renter;

    @Column(name = "terminated", nullable = false)
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
            this.property.getId(), 
            this.user.getId(), 
            this.offer.getId(),
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
