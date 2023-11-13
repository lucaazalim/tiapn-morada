package br.pucminas.morada.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import br.pucminas.morada.models.offer.Offer;

@Repository
public interface OfferRepository extends JpaRepository<Offer, Long>{

    List<Offer> findByUser_Id(Long user_id);

    @Query(value = "SELECT p.photo_base64, p.street, p.type, o.rent_value FROM offer o JOIN property p ON o.property_id = p.id WHERE p.userId = :user_id")
    List<Offer> findAllOffersByUserId(@Param("user_id") Long user_id);

}
