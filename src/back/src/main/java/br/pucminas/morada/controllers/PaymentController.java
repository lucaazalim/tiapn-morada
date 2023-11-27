package br.pucminas.morada.controllers;

import br.pucminas.morada.models.payment.dto.PaymentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.pucminas.morada.models.payment.Payment;
import br.pucminas.morada.models.payment.dto.PaymentCreateDTO;
import br.pucminas.morada.models.payment.dto.PaymentUpdateDTO;
import br.pucminas.morada.services.PaymentService;
import jakarta.validation.Valid;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/payments")
@Validated
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody PaymentCreateDTO paymentCreateDTO) {
        Payment payment = paymentCreateDTO.toEntity(Payment.class);
        paymentService.create(payment, paymentCreateDTO.rentalId()); // Assuming create method similar to offerService

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(payment.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    @Validated
    public ResponseEntity<Void> update(
            @Valid @RequestBody PaymentUpdateDTO paymentUpdateDTO,
            @PathVariable Long id
    ) {
        System.out.println("Debug!");
        paymentService.update(id, paymentUpdateDTO.status());
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/owner")
    public ResponseEntity<List<PaymentDTO>> findForOwner() {
        return ResponseEntity.ok(paymentService.findForOwner().stream().map(Payment::toDTO).toList());
    }

    @GetMapping("/renter")
    public ResponseEntity<List<PaymentDTO>> findByRenter() {
        return ResponseEntity.ok(paymentService.findByRenter().stream().map(Payment::toDTO).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentDTO> findById(@PathVariable Long id) {
        Payment payment = paymentService.findById(id);
        return ResponseEntity.ok(payment.toDTO());
    }

}
