package br.pucminas.morada.models.visit;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import br.pucminas.morada.Constants;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.visit.dto.VisitDTO;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "visit")
public class Visit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "property_id")
    private Property property;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "datetime")
    @NotNull
    private LocalDateTime datetime;

    @Column(name = "carried_out")
    private Boolean carriedOut;

    @Column(name = "visit_rating")
    private Boolean visitRating;

    @Column(name = "property_rating")
    private Boolean propertyRating;

    @Column(name = "comments")
    private String comments;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    public VisitDTO toDTO() {
        return Constants.OBJECT_MAPPER.convertValue(this, VisitDTO.class);
    }
    
}

