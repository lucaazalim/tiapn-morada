package br.pucminas.morada.controllers;

import br.pucminas.morada.models.user_verification.UserVerification;
import br.pucminas.morada.models.user_verification.dto.UserVerificationCreateDTO;
import br.pucminas.morada.models.user_verification.dto.UserVerificationUpdateDTO;
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
    public ResponseEntity<Void> create(@Valid @RequestBody UserVerificationCreateDTO userVerificationCreateDTO) {

        UserVerification userVerification = userVerificationCreateDTO.toEntity(UserVerification.class);
        this.userVerificationService.create(userVerification);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(userVerification.getId())
                .toUri();

        return ResponseEntity.created(uri).build();

    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(
            @Valid @RequestBody UserVerificationUpdateDTO userVerificationUpdateDTO,
            @PathVariable Long id
    ) {

        this.userVerificationService.update(id, userVerificationUpdateDTO.toEntity(UserVerification.class));
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
