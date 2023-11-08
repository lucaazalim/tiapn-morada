package br.pucminas.morada.models.visit;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.user.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data //lombok
@Table(name = "visit")
public class Visit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "property_id", nullable = false)
    private Property property;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "datetime")
    @NotNull
    private LocalDateTime datetime;

    @Column(name = "carried_out")
    private Boolean cariedOut;

    @Column(name = "visit_rating")
    private Boolean visitRating;

    @Column(name = "property_rating")
    private Boolean propertyRating;

    @Column(name = "comments")
    private String comments;

    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    //@JsonProperty(access = Access.WRITE_ONLY) --> passa no req e não retorna no json res
    //@JsonProperty(access = Access.READ_ONLY) 
    
}

