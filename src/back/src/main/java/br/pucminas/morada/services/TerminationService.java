package br.pucminas.morada.services;

import br.pucminas.morada.models.rental.Rental;
import br.pucminas.morada.models.termination.Termination;
import br.pucminas.morada.models.user.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.pucminas.morada.repositories.TerminationRepository;
import jakarta.transaction.Transactional;


import java.util.Optional;

@Service
public class TerminationService {
    
    @Autowired
    private TerminationRepository terminationRepository;

    @Autowired
    private UserService userService;
    
    @Autowired
    private RentalService rentalService;

    @Transactional
    public Termination create(Termination termination, Long rentalId) {

        Rental rental = this.rentalService.findById(rentalId);
        termination.setRental(rental);
        
        return this.terminationRepository.save(termination);

    }

    public Termination findById(Long id) {
        Optional<Termination> optionalTermination = this.terminationRepository.findById(id);

        Termination termination = optionalTermination.get();
        return termination;
    }

}
