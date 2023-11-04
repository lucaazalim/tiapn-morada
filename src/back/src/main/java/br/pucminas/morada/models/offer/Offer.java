package br.pucminas.morada.models.offer;

import br.pucminas.morada.Constants;
import br.pucminas.morada.MoradaApplication;
import br.pucminas.morada.models.offer.dto.OfferDTO;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.property.dto.PropertyDTO;
import br.pucminas.morada.models.property.dto.PropertyUpdateDTO;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.dto.UserDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "offer")
public class Offer {

    public interface CreateOffer {}

    public interface UpdateOffer {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "property_id")
    private Property property;

    @Column(name = "rent_value")
    private BigDecimal rentValue;

    @Enumerated(EnumType.STRING)
    private OfferStatus status = OfferStatus.PENDING_APPROVAL;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public OfferDTO toDTO() {
        return Constants.OBJECT_MAPPER.convertValue(this, OfferDTO.class);
    }

}
