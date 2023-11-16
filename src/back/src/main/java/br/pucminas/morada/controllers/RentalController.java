package br.pucminas.morada.controllers;

import br.pucminas.morada.models.rental.Rental;
import br.pucminas.morada.models.rental.dto.RentalCreateDTO;
import br.pucminas.morada.models.rental.dto.RentalDTO;
import br.pucminas.morada.models.rental.dto.RentalUpdateDTO;
import br.pucminas.morada.repositories.RentalRepository;
import br.pucminas.morada.security.UserSpringSecurity;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.util.UriComponents;

import br.pucminas.morada.services.RentalService;
import br.pucminas.morada.services.UserService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/rentals")
@Validated
public class RentalController {


    @Autowired
    private RentalService rentalService;


    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody RentalCreateDTO rentalCreateDTO){

        Rental rental = rentalCreateDTO.toEntity(Rental.class);
        this.rentalService.create(rental);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(rental.getId())
            .toUri();
        
        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/user")
    public ResponseEntity<List<Rental>> listAllRents(){
        List<Rental> rentals = this.rentalService.findAllByUser();
        return ResponseEntity.ok(rentals);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rental> findById(@PathVariable Long id){
        Rental rental = this.rentalService.findById(id);
        return ResponseEntity.ok(rental);
    }

    @PutMapping("/{id}")
    @Validated
    public ResponseEntity<Void> update(
        @Valid @RequestBody RentalUpdateDTO rentalUpdateDTO,
        @PathVariable Long id
    ){
        this.rentalService.update(id, rentalUpdateDTO.toEntity(Rental.class));
        return ResponseEntity.noContent().build();
    }

}
