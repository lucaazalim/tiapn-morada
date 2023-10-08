package br.pucminas.morada.models.property;

import br.pucminas.morada.models.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "property")
public class Property {

    public interface CreateProperty {}
    public interface UpdateProperty {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @NotNull(groups = UpdateProperty.class)
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "type")
    private PropertyType type;

    @NotNull
    @Pattern(regexp = "\\d{8}")
    @Column(name = "zip_code")
    private String zipCode;

    @NotBlank
    @Length(max = 100)
    @Column(name = "street")
    private String street;

    @NotNull
    @Min(1)
    @Column(name = "number")
    private Integer number;

    @Length(max = 100)
    @Column(name = "complement")
    private String complement;

    @NotBlank
    @Length(max = 100)
    @Column(name = "neighborhood")
    private String neighborhood;

    @NotBlank
    @Length(max = 100)
    @Column(name = "city")
    private String city;

    @NotBlank
    @Length(min = 2, max = 2)
    @Column(name = "state")
    private String state;

    @NotBlank
    @Length(min = 2, max = 2)
    @Column(name = "country")
    private String country = "BR";

    @NotBlank
    @Column(name = "description")
    private String description;

    @NotNull
    @Min(1)
    @Max(32767)
    @Column(name = "square_meters")
    private Integer squareMeters;

    @NotNull
    @Min(0)
    @Column(name = "bedrooms")
    private Integer bedrooms;

    @NotNull
    @Min(0)
    @Column(name = "bathrooms")
    private Integer bathrooms;

    @NotNull
    @Min(0)
    @Column(name = "garage_spaces")
    private Integer garageSpaces;

    @NotNull
    @Column(name = "accepts_pet")
    private Boolean acceptsPet;

    @NotNull
    @Column(name = "furnished")
    private Boolean furnished;

    @NotNull
    @Column(name = "rent_value")
    private BigDecimal rentValue;

    @Column(name = "condominium_fee")
    private BigDecimal condominiumFee;

    @NotNull
    @Column(name = "iptu_value")
    private BigDecimal iptuValue;

    @NotNull
    @Enumerated(EnumType.STRING)
    private PropertyStatus status = PropertyStatus.PENDING_APPROVAL;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

}