package br.pucminas.morada.models.termination;

import br.pucminas.morada.models.rental.Rental;
import br.pucminas.morada.models.termination.dto.TerminationDTO;
import jakarta.persistence.*;

import lombok.Data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Data
@Table(name = "termination")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Termination {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "rental_id")
    private Rental rental;

    @Column(name = "initiated_by_owner")
    private boolean initiated_by_owner;

    @Column(name = "message")
    private String message;

    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;


    public TerminationDTO toDTO(){
        return new TerminationDTO(
            this.id,
            this.rental.getId(),
            this.initiated_by_owner,
            this.message,
            this.createdAt
        );
    }


}
