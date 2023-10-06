package br.pucminas.morada.repositories;

import br.pucminas.morada.models.UserVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserVerificationRepository extends JpaRepository<UserVerification, Long> {

}
