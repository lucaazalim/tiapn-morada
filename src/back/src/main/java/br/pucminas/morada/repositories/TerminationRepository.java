package br.pucminas.morada.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import br.pucminas.morada.models.termination.Termination;

@Repository
public interface TerminationRepository extends JpaRepository<Termination, Long>, JpaSpecificationExecutor<Termination>{
    

}
