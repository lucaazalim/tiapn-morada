package br.pucminas.morada.controllers;

import br.pucminas.morada.models.payment.PaymentStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import br.pucminas.morada.models.payment.Payment;
import br.pucminas.morada.models.payment.dto.PaymentCreateDTO;
import br.pucminas.morada.models.payment.dto.PaymentDTO;
import br.pucminas.morada.models.payment.dto.PaymentUpdateDTO;
import br.pucminas.morada.models.rental.Rental;
import br.pucminas.morada.services.PaymentService;
import br.pucminas.morada.services.RentalService;
import jakarta.validation.Valid;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/payments")
@Validated
public class PaymentController {

    @Autowired
    private RentalService rentalService;

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/{id}")
    public ResponseEntity<PaymentDTO> findById(@PathVariable Long id) {
        Payment payment = paymentService.findById(id);
        return ResponseEntity.ok(payment.toDTO());
    }

    @GetMapping
    public ResponseEntity<List<PaymentDTO>> findAll() {
        List<Payment> payments = paymentService.findAll();
        List<PaymentDTO> paymentDTOs = payments.stream()
                .map(Payment::toDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(paymentDTOs);
    }

    @PostMapping
    public ResponseEntity<PaymentDTO> create(@Valid @RequestBody PaymentCreateDTO paymentCreateDTO) {
        Payment payment = paymentService.save(convertDto(paymentCreateDTO));
        return new ResponseEntity<>(payment.toDTO(), HttpStatus.CREATED);
    }

    private Payment convertDto(PaymentCreateDTO dto) {
        Rental rental = rentalService.findById(dto.getRentalId());

        PaymentStatus status = PaymentStatus.valueOf(dto.getStatus());

        return Payment.builder()
                .rental(rental)
                .rentValue(dto.getRentValue())
                .competenceMonth(dto.getCompetenceMonth())
                .competenceYear(dto.getCompetenceYear())
                .status(status)
                .createdAt(LocalDateTime.now())
                .build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(
            @Valid @RequestBody PaymentUpdateDTO paymentUpdateDTO, @PathVariable Long id) {
        paymentService.update(id, paymentUpdateDTO);
        return ResponseEntity.noContent().build();
    }
}

