package br.pucminas.morada.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.pucminas.morada.models.payment.Payment;

import java.util.List;
import java.util.Map;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long>, JpaSpecificationExecutor<Payment> {

    @Query(
            value = "SELECT payment.* FROM payment JOIN rental ON rental.id = payment.rental_id JOIN property ON property.id = rental.property_id WHERE property.user_id = ?1",
            nativeQuery = true
    )
    List<Payment> findForOwner(Long userId);

    @Query(
            value = "SELECT payment.* FROM payment JOIN rental ON rental.id = payment.rental_id WHERE rental.user_id = ?1",
            nativeQuery = true
    )
    List<Payment> findByRenter(Long userId);

}

