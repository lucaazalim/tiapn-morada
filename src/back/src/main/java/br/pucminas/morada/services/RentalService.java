package br.pucminas.morada.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import br.pucminas.morada.models.offer.Offer;
import br.pucminas.morada.models.property.Property;
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

    @Autowired
    private PropertyService propertyService;

    @Autowired
    private OfferService offerService;

    @Transactional
    public Rental create(Rental rental, Long propertyId, Long offerId){

        User user = this.userService.findById(UserService.getAuthenticatedUser().getId());
        Property property = this.propertyService.findById(propertyId);
        Offer offer = this.offerService.findById(offerId);
        rental.setProperty(property);
        rental.setOffer(offer);
        rental.setUser(user);

        return this.rentalRepository.save(rental);

    }

    @Transactional
    public Rental update(Long id, Rental rental){

        Rental rentalFound = this.findById(id);

        if(rental.isContractSignedByOwner()){
            rentalFound.setContractSignedByOwner(true);
        }
        if(rental.isContractSignedByRenter()){
            rentalFound.setContractSignedByRenter(true);
        }
        if(rental.isTerminated()){
            rentalFound.setTerminated(true);
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
                    throw new GenericException(HttpStatus.NOT_FOUND, "Aluguel não encontrado.");
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

    @Transactional
    public List<Rental> findByPropertyId(Long propertyId){
        return this.rentalRepository.findByProperty_Id(propertyId);
    }
}
