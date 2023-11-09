package br.pucminas.morada.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.visit.Visit;
import br.pucminas.morada.models.visit.dto.VisitCreateDTO;
import br.pucminas.morada.models.visit.dto.VisitDTO;
import br.pucminas.morada.models.visit.dto.VisitUpdateDTO;
import br.pucminas.morada.services.PropertyService;
import br.pucminas.morada.services.UserService;
import br.pucminas.morada.services.VisitService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/visits")
@Validated
public class VisitController {

    @Autowired
    private VisitService visitService;

    @Autowired
    private PropertyService propertyService;

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<Visit> findById(@PathVariable Long id) {
        Visit visit = this.visitService.findById(id);
        return ResponseEntity.ok(visit);
    }

    @GetMapping("/owner") 
    public ResponseEntity<List<Visit>> findAllOfOwner(){
        List<Visit> visits = this.visitService.findAllOfOwner();
        return ResponseEntity.ok(visits);
    }

    @GetMapping("/renter")
    public ResponseEntity<List<Visit>> findAllByUser(){
        List<Visit> visits = this.visitService.findAllByUser();
        return ResponseEntity.ok(visits);
    }

    //Criar uma nova visita em imóvel específico.
    @PostMapping
    public ResponseEntity create(@Valid @RequestBody VisitCreateDTO visitCreateDTO) {

        try {
            Visit visitSalve = visitService.save(convertDto(visitCreateDTO));
            return new ResponseEntity(visitSalve, HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    
    public Visit convertDto(VisitCreateDTO dto){
        Visit visit = Visit.builder()
                            .datetime(dto.getDatetime())
                            .carriedOut(dto.getCarriedOut())
                            .build();

        Property property = propertyService
                    .findById(dto.getPropertyId());

        visit.setProperty(property);

        User user = userService
            .findById(dto.getUserId());
        
        visit.setUser(user);    

        return visit;
    }


    //*PUT para cancelamento de visita ou para o acréscimo de avaliações sobre a visita
    @PutMapping("/{id}")
    public ResponseEntity<Void> update(
        @Valid @RequestBody VisitUpdateDTO visitUpdateDTO, @PathVariable Long id) {
        this.visitService.update(id, visitUpdateDTO.toEntity(Visit.class));
        return ResponseEntity.noContent().build();
    }
}
