package br.pucminas.morada.controllers;

import br.pucminas.morada.models.User;
import br.pucminas.morada.models.UserVerification;
import br.pucminas.morada.services.UserVerificationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/user-verifications")
@Validated
public class UserVerificationController {

    @Autowired
    private UserVerificationService userVerificationService;

    @PostMapping
    @Validated(UserVerification.CreateUserVerification.class)
    public ResponseEntity<Void> create(@Valid @RequestBody UserVerification userVerification) {

        this.userVerificationService.create(userVerification);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(userVerification.getId())
                .toUri();

        return ResponseEntity.created(uri).build();

    }

    @PutMapping("/{id}")
    @Validated(UserVerification.UpdateUserVerification.class)
    public ResponseEntity<Void> update(@Valid @RequestBody UserVerification userVerification, @PathVariable Long id) {

        userVerification.setId(id);

        this.userVerificationService.update(userVerification);

        return ResponseEntity.noContent().build();

    }

    @GetMapping("/{id}")
    public ResponseEntity<UserVerification> findById(@PathVariable Long id) {
        UserVerification userVerification = this.userVerificationService.findById(id);
        return ResponseEntity.ok(userVerification);
    }

    @GetMapping("/user")
    public ResponseEntity<List<UserVerification>> findAllByUser() {
        List<UserVerification> userVerifications = this.userVerificationService.findAllByUser();
        return ResponseEntity.ok(userVerifications);
    }

}
