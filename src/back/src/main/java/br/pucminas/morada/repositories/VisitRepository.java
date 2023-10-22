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

    @Query(value = "SELECT * FROM visit v JOIN property p ON v.property_id = p.id WHERE p.user_id = :idUser", nativeQuery = true )
    List<Visit> findAllVisitsInProperty(@Param("idUser") Long idUser);

    /*@Query(value = "SELECT v FROM Visit v WHERE v.property.id = :id")
    List<Visit> findAllVisitsInProperty(@Param("id") Long id);*/
    //5:18 JPL - aula 8 5:30
    /*
     * @Query(value = "SELECT v FROM Visit v WHERE v.user.id = :id")
     * List<Task> nomefuncao(@Param("id") Long id);
     */
    
     //9:09 SQL PURO
     /*@Query(value = "SELECT * FROM task t WHERE t.user_id = :id", nativeQuery = true)
     List<Visit> findByUserId(@Param("id") Long id);*/

    



}
