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

    List<Payment> findByUser_Id(Long userId);

    @Query(value = "SELECT pmt.id AS payment_id, pmt.rent_value, prop.street, prop.type, rnt.id AS rental_id " +
                   "FROM payment pmt " +
                   "JOIN rental rnt ON pmt.rental_id = rnt.id " +
                   "JOIN property prop ON rnt.property_id = prop.id " +
                   "WHERE prop.user_id = :user_id", nativeQuery = true)
    List<Map<String, Object>> findAllPaymentsByUserId(@Param("user_id") Long userId);
}

