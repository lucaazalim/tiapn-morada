package br.pucminas.morada.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import br.pucminas.morada.models.offer.Offer;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.UserRole;
import br.pucminas.morada.repositories.OfferRepository;
import br.pucminas.morada.security.UserSpringSecurity;
import br.pucminas.morada.services.exceptions.AuthorizationException;
import br.pucminas.morada.services.exceptions.GenericException;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class OfferService {

    @Autowired
    private OfferRepository offerRepository;

    @Autowired
    private UserService userService;

    @Transactional
    public Offer create(Offer offer){
            
        User user = this.userService.findById(UserService.getAuthenticatedUser().getId());
        
        offer.setUser(user);

        return this.offerRepository.save(offer);

    }  

    @Transactional
    public Offer update(Long id,Offer offer){
        Offer offerFound = this.findById(id);
        offerFound.setStatus(offer.getStatus());

        return this.offerRepository.save(offerFound);
    }


    public Offer findById(Long id) {
        Optional<Offer> optionalOffer = this.offerRepository.findById(id);
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();

        if (optionalOffer.isEmpty()) {
            if (userSpringSecurity != null && userSpringSecurity.hasRole(UserRole.ADMIN)) {
                throw new GenericException(HttpStatus.NOT_FOUND, "Oferta não encontrda");
            }
        } else {
            Offer offer = optionalOffer.get();
            if (userSpringSecurity != null && (userSpringSecurity.hasRole(UserRole.ADMIN)
                    || offer.getId().equals(userSpringSecurity.getId()))) {
                return offer;
            }
        }
        throw new AuthorizationException();
    }

    public List<Offer> findAllByUser() {

        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        return this.offerRepository.findByUser_Id(userSpringSecurity.getId());

    }

    public List<Offer> findAllOffersInProperty() {

        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        if (userSpringSecurity != null)
            return this.offerRepository.findAllOffersInProperty(userSpringSecurity.getId());
        throw new AuthorizationException();

    }

    // public List<Offer> findAll(Specification<Offer> specification) {
    //     return this.offerRepository.findAll(specification);
    // }

    


}
