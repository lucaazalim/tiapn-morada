package br.pucminas.morada.models.property;

import br.pucminas.morada.Constants;
import br.pucminas.morada.MoradaApplication;
import br.pucminas.morada.models.property.dto.PropertyDTO;
import br.pucminas.morada.models.property.dto.PropertyUpdateDTO;
import br.pucminas.morada.models.rental.Rental;
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
import java.util.Optional;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "property")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private PropertyType type;

    @Column(name = "zip_code")
    private String zipCode;

    @Column(name = "street")
    private String street;

    @Column(name = "number")
    private Integer number;

    @Column(name = "complement")
    private String complement;

    @Column(name = "neighborhood")
    private String neighborhood;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "country")
    private String country;

    @Column(name = "description")
    private String description;

    @Column(name = "area")
    private Integer area;

    @Column(name = "bedrooms")
    private Integer bedrooms;

    @Column(name = "bathrooms")
    private Integer bathrooms;

    @Column(name = "garage_spaces")
    private Integer garageSpaces;

    @Column(name = "accepts_pet")
    private Boolean acceptsPet;

    @Column(name = "furnished")
    private Boolean furnished;

    @Column(name = "rent_value")
    private BigDecimal rentValue;

    @Column(name = "condominium_fee")
    private BigDecimal condominiumFee;

    @Column(name = "iptu_value")
    private BigDecimal iptuValue;

    @Column(name = "photo_base64")
    private String photoBase64;

    @Enumerated(EnumType.STRING)
    private PropertyStatus status = PropertyStatus.PENDING_APPROVAL;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "property", cascade = CascadeType.ALL)
    private List<Rental> rentals;

    public PropertyDTO toDTO() {

        Long currentRentalId = this.rentals.stream()
                .filter(rental -> !rental.isTerminated())
                .findFirst()
                .map(Rental::getId)
                .orElse(null);

        return new PropertyDTO(
                this.id,
                this.user.getId(),
                this.type,
                this.zipCode,
                this.street,
                this.number,
                this.complement,
                this.neighborhood,
                this.city,
                this.state,
                this.country,
                this.description,
                this.area,
                this.bedrooms,
                this.bathrooms,
                this.garageSpaces,
                this.acceptsPet,
                this.furnished,
                this.rentValue,
                this.condominiumFee,
                this.iptuValue,
                this.photoBase64 == null ? "https://picsum.photos/seed/" + this.hashCode() + "/1280/720" : this.photoBase64,
                this.status,
                this.createdAt,
                currentRentalId
        );
    }

}