package br.pucminas.morada.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.pucminas.morada.models.payment.Payment;
import br.pucminas.morada.models.payment.PaymentStatus;
import br.pucminas.morada.models.rental.Rental;
import br.pucminas.morada.models.user.UserRole;
import br.pucminas.morada.repositories.PaymentRepository;
import br.pucminas.morada.security.UserSpringSecurity;
import br.pucminas.morada.services.exceptions.AuthorizationException;
import br.pucminas.morada.services.exceptions.GenericException;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.http.HttpStatus;


@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private RentalService rentalService;

    @Transactional  
    public Payment create(Payment payment, Long rentalId) {
        Rental rental = this.rentalService.findById(rentalId);
        payment.setRental(rental);

        return this.paymentRepository.save(payment);
    }



    @Transactional
    public Payment update(Long id, PaymentStatus status) {
        Payment paymentFound = this.findById(id);
        paymentFound.setStatus(status);

        return this.paymentRepository.save(paymentFound);
    }

    public Payment findById(Long id) {
        Optional<Payment> optionalPayment = this.paymentRepository.findById(id);
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
    
        if (optionalPayment.isEmpty()) {
            HttpStatus status = userSpringSecurity != null && userSpringSecurity.hasRole(UserRole.ADMIN) 
                                ? HttpStatus.NOT_FOUND : HttpStatus.FORBIDDEN;
            throw new GenericException(status, "Pagamento não encontrado");
        }
    
        Payment payment = optionalPayment.get();
        Long userId = payment.getRental().getUser().getId();
        if (userSpringSecurity == null || 
            (!userSpringSecurity.hasRole(UserRole.ADMIN) && !userId.equals(userSpringSecurity.getId()))) {
            throw new AuthorizationException();
        }
    
        return payment;
    }
    


    public List<Payment> findAllByUser() {
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        return this.paymentRepository.findByUser_Id(userSpringSecurity.getId());
    }

    public List<Map<String, Object>> findAllPaymentsForTheUser() {
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        return this.paymentRepository.findAllPaymentsByUserId(userSpringSecurity.getId());
    }

}
