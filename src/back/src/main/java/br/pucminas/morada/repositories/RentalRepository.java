package br.pucminas.morada.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.pucminas.morada.models.rental.Rental;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long>, JpaSpecificationExecutor<Rental> {

    List<Rental> findByUserId(Long userId);

    @Query(value = "SELECT * FROM rental r WHERE r.property_id = :propertyId", nativeQuery = true)
    List<Rental> findByProperty_Id(Long propertyId);

}
