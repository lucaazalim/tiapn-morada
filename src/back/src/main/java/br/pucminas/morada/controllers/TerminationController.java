package br.pucminas.morada.controllers;

import java.net.URI;

import br.pucminas.morada.models.termination.Termination;
import br.pucminas.morada.services.TerminationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.pucminas.morada.models.termination.dto.TerminationCreateDTO;


import jakarta.validation.Valid;

@RestController
@RequestMapping("/terminations")
@Validated
public class TerminationController {

    @Autowired
    private TerminationService terminationService;

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody TerminationCreateDTO terminationCreateDTO) {

        Termination termination = terminationCreateDTO.toEntity(Termination.class);
        this.terminationService.create(termination);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(termination.getId())
                .toUri();

        return ResponseEntity.created(uri).build();

    }


    
}
