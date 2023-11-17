package br.pucminas.morada.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import br.pucminas.morada.models.rental.Rental;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.UserRole;
import br.pucminas.morada.repositories.RentalRepository;
import br.pucminas.morada.security.UserSpringSecurity;
import br.pucminas.morada.services.exceptions.AuthorizationException;
import br.pucminas.morada.services.exceptions.GenericException;
import jakarta.transaction.Transactional;

@Service
public class RentalService {
     
    @Autowired
    private RentalRepository rentalRepository;

    @Autowired
    private UserService userService;

    @Transactional
    public Rental create(Rental rental){

        User user = this.userService.findById(UserService.getAuthenticatedUser().getId());
        rental.setUser(user);

        return this.rentalRepository.save(rental);

    }

    @Transactional
    public Rental update(Long id, Rental rental){

        Rental rentalFound = this.findById(id);
        if(rental.isContract_signed_by_owner() != true){
            rentalFound.setContract_signed_by_owner(true);
        }
        if(rental.isContract_signed_by_renter() != true){
            rentalFound.setContract_signed_by_renter(true);
        }
        if(rental.isTerminated() != true){
            rentalFound.setTerminated(true);
        }
        if(rental.getTerminatedAt() != null){
            rentalFound.setTerminatedAt(LocalDateTime.now());
        }

        return this.rentalRepository.save(rentalFound);

    }

    public List<Rental> findAllByUser(){
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        return this.rentalRepository.findByUserId(userSpringSecurity.getId());
    }

    public Rental findById(Long id) {
            Optional<Rental> optionalRental = this.rentalRepository.findById(id);
            UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();

            if (optionalRental.isEmpty()) {
                if (userSpringSecurity != null && userSpringSecurity.hasRole(UserRole.ADMIN)) {
                    throw new GenericException(HttpStatus.NOT_FOUND, "Visita não encontrada.");
                }
            } else {
                Rental rental = optionalRental.get();
                if (userSpringSecurity != null && (userSpringSecurity.hasRole(UserRole.ADMIN)
                        || rental.getUser().getId().equals(userSpringSecurity.getId()))) {
                    return rental;
                }
            }
            throw new AuthorizationException();
        }



}
