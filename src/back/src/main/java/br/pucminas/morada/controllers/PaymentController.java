package br.pucminas.morada.controllers;

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
        paymentService.update(id, paymentUpdateDTO.status());
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user")
    public ResponseEntity<List<Map<String, Object>>> findAllPayments() {
        List<Map<String, Object>> payments = paymentService.findAllPaymentsForTheUser();
        return ResponseEntity.ok(payments);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payment> findById(@PathVariable Long id) {
        Payment payment = paymentService.findById(id);
        return ResponseEntity.ok(payment);
    }

}
