package br.pucminas.morada.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.pucminas.morada.models.payment.Payment;
import br.pucminas.morada.models.payment.PaymentStatus;
import br.pucminas.morada.models.rental.Rental;
import br.pucminas.morada.models.user.User;
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

    @Autowired
    private UserService userService;

    @Transactional
    public Payment create(Payment payment, Long rentalId) {
        Rental rental = this.rentalService.findById(rentalId);
        User user = this.userService.findById(UserService.getAuthenticatedUser().getId());

        payment.setRental(rental);
        payment.setUser(user);

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
        if (userSpringSecurity != null && userSpringSecurity.hasRole(UserRole.ADMIN)) {
            throw new GenericException(HttpStatus.NOT_FOUND, "Pagamento não encontrado");
        }
        throw new AuthorizationException();
    } else {
        Payment payment = optionalPayment.get();
        User user = payment.getRental().getUser();
        if (userSpringSecurity != null && (userSpringSecurity.hasRole(UserRole.ADMIN)
                || user.getId().equals(userSpringSecurity.getId()))) {
            return payment;
        }
    }
    throw new AuthorizationException();
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
