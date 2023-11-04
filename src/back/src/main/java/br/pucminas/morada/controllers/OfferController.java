package br.pucminas.morada.controllers;

import java.net.URI;
import java.util.List;

import org.hibernate.sql.Update;
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

import br.pucminas.morada.models.offer.Offer;
import br.pucminas.morada.models.offer.dto.OfferCreateDTO;
import br.pucminas.morada.models.offer.dto.OfferUpdateDTO;

import br.pucminas.morada.services.OfferServices;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/offer")
@Validated
public class OfferController {

    @Autowired
    private OfferServices offerServices;

    @GetMapping("/{id}")
    public ResponseEntity<Offer> findById(@PathVariable Long id) {
        Offer offer = this.offerServices.findById(id);
        return ResponseEntity.ok().body(offer);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Offer>> findAllByUser() {
        List<Offer> offer = this.offerServices.findAllByUser();
        return ResponseEntity.ok().body(offer);
    }

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody OfferCreateDTO offerCreateDTO){
        
        Offer offer = offerCreateDTO.toEntity(Offer.class);
        Offer newOffer = this.offerServices.create(offer);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(newOffer.getId())
            .toUri();

        return ResponseEntity.created(uri).build();

    }

    @PutMapping("/{id}")
    @Validated
    public ResponseEntity<Void> update(
        @Valid @RequestBody OfferUpdateDTO offerUpdateDTO, 
        @PathVariable Long id
        ){
        this.offerServices.update(id, offerUpdateDTO.toEntity(Offer.class));
        return ResponseEntity.noContent().build();
    }

}
