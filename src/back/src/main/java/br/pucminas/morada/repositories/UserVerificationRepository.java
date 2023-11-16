package br.pucminas.morada.repositories;

import br.pucminas.morada.models.user_verification.UserVerification;
import br.pucminas.morada.models.visit.Visit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserVerificationRepository extends JpaRepository<UserVerification, Long> {

    List<UserVerification> findByUserId(Long userId);

    @Query(value = "SELECT * FROM user_verification u WHERE u.status = 'PENDING_APPROVAL'", nativeQuery = true)
    List<UserVerification> findAllPending();

}
