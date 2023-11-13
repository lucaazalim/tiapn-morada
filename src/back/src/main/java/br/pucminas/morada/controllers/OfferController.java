package br.pucminas.morada.controllers;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import br.pucminas.morada.models.offer.dto.OfferDTO;
import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.security.UserSpringSecurity;
import br.pucminas.morada.services.PropertyService;
import br.pucminas.morada.services.UserService;
import br.pucminas.morada.services.exceptions.GenericException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
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

import br.pucminas.morada.services.OfferService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/offers")
@Validated
public class OfferController {

    @Autowired
    private OfferService offerService;

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody OfferCreateDTO offerCreateDTO) {

        Offer offer = offerCreateDTO.toEntity(Offer.class);
        this.offerService.create(offer, offerCreateDTO.propertyId());

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(offer.getId())
                .toUri();

        return ResponseEntity.created(uri).build();

    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(
            @Valid @RequestBody OfferUpdateDTO offerUpdateDTO,
            @PathVariable Long id
    ) {
        this.offerService.update(id, offerUpdateDTO.toEntity(Offer.class));
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user")
    public ResponseEntity<List<OfferDTO>> findAllOffers() {
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        List<Offer> offers = this.offerService.findAllOffersByUserId(userSpringSecurity.getId());
        return ResponseEntity.ok().body(offers.stream().map(Offer::toDTO).toList());
    }

    // @GetMapping("/")
    // public ResponseEntity<List<OfferDTO>> findAllByUser() {
    //     List<Offer> offer = this.offerService.findAllByUser();
    //     return ResponseEntity.ok().body(offer.stream().map(Offer::toDTO).toList());
    // }


}
