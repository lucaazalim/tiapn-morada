package br.pucminas.morada.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import br.pucminas.morada.models.rental.Rental;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.UserRole;
import br.pucminas.morada.repositories.PropertyRepository;
import br.pucminas.morada.repositories.RentalRepository;
import br.pucminas.morada.security.UserSpringSecurity;
import br.pucminas.morada.services.exceptions.GenericException;
import jakarta.transaction.Transactional;

@Service
public class RentalService {
     
    @Autowired
    private RentalRepository rentalRepository;

    @Autowired
    private UserService userService;


    
    public Rental create(Rental rental){

        User user = this.userService.findById(UserService.getAuthenticatedUser().getId());
        rental.setUser(user);

        return this.rentalRepository.save(rental);

    }



    public List<Rental> findAllByUser(){
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        return this.rentalRepository.findByUserId(userSpringSecurity.getId());
    }

    public List<Rental> findAll(Specification<Rental> specification){

        return this.rentalRepository.findAll(specification);

    }


}
