package br.pucminas.morada.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import br.pucminas.morada.models.visit.Visit;
import br.pucminas.morada.models.visit.Visit.CreateVisit;
import br.pucminas.morada.models.visit.Visit.UpdateVisit;
import br.pucminas.morada.services.VisitService;
import jakarta.validation.Valid;



@RestController
@RequestMapping("/visits")
@Validated
public class VisitController {

    @Autowired
    private VisitService visitService;

    @GetMapping("/{id}")
    public ResponseEntity<Visit> findById(@PathVariable Long id) {
        Visit visit = this.visitService.findById(id);
        return ResponseEntity.ok().body(visit);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Visit>> findAllByUser(){
        List<Visit> visits = this.visitService.findAllByUser();
        return ResponseEntity.ok().body(visits);
    }

    @GetMapping("/propertyschedule") 
    public ResponseEntity<List<Visit>> findAllVisitsInProperty(){
        List<Visit> visits = this.visitService.findAllVisitsInProperty();
        return ResponseEntity.ok().body(visits);
    }


    @PostMapping
    @Validated(CreateVisit.class)
    public ResponseEntity<Void> create(@Valid @RequestBody Visit visit) {

        Visit newVisit = visitService.create(visit);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(newVisit.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    @Validated(UpdateVisit.class)
    public ResponseEntity<Void> update(@Valid @RequestBody Visit visit, @PathVariable Long id) {
        visit.setId(id);
        this.visitService.update(visit);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    @Validated
    public ResponseEntity<Void> delete(@Valid @RequestBody Visit visit, @PathVariable Long id){
        this.visitService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
