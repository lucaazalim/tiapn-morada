package br.pucminas.morada.models.termination;

import br.pucminas.morada.models.termination.dto.TerminationDTO;
import jakarta.persistence.*;

import lombok.Data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "termination")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Termination {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "rental_id")
    private Long rentalId;

    @Column(name = "initiated_by_owner")
    private boolean initiated_by_owner;

    @Column(name = "message")
    private String message;

    @Column(name = "created_at")
    private LocalDateTime created_at;


    public TerminationDTO toDTO(){
        return new TerminationDTO(
            this.id,
            this.rentalId,
            this.initiated_by_owner,
            this.message,
            this.created_at
        );
    }


}
