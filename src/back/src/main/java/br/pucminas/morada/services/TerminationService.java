package br.pucminas.morada.services;

import br.pucminas.morada.models.termination.Termination;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.pucminas.morada.repositories.TerminationRepository;
import jakarta.transaction.Transactional;

import java.util.Optional;

@Service
public class TerminationService {
    
    @Autowired
    private TerminationRepository terminationRepository;


    @Transactional
    public Termination create (Termination termination) {

        return this.terminationRepository.save(termination);

    }

    public Termination findById(Long id) {
        Optional<Termination> optionalTermination = this.terminationRepository.findById(id);

        Termination termination = optionalTermination.get();
        return termination;
    }

}