package br.pucminas.morada.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.pucminas.morada.models.visit.Visit;

public interface VisitRepository extends JpaRepository<Visit, Long>, JpaSpecificationExecutor<Visit>{
    
    List<Visit> findByUser_Id(Long userId);
    
    List<Visit> findByProperty_Id(Long propertyId);

    @Query(value = "SELECT * FROM visit v WHERE v.property_id IN (SELECT id FROM property p WHERE p.user_id = :id)", nativeQuery = true)
    List<Visit> findAllOfOwner_Id(Long id);

    @Query(value = "SELECT * FROM visit v WHERE v.property_id = :propertyId",  nativeQuery = true)
    List<Visit> findAllOfOneProperty_Id(Long propertyId);
    
}
