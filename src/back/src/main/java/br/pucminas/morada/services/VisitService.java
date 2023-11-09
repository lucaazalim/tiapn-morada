package br.pucminas.morada.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.UserRole;
import br.pucminas.morada.models.visit.Visit;
import br.pucminas.morada.repositories.VisitRepository;
import br.pucminas.morada.security.UserSpringSecurity;
import br.pucminas.morada.services.exceptions.AuthorizationException;
import br.pucminas.morada.services.exceptions.GenericException;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;
//* service - camada de negócios: favorece a reusabilidade

@Service
public class VisitService {

    @Autowired
    private VisitRepository visitRepository;

    @Autowired
    private UserService userService;

    public Visit findById(Long id) {
        Optional<Visit> optionalVisit = this.visitRepository.findById(id);
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();

        if (optionalVisit.isEmpty()) {
            if (userSpringSecurity != null && userSpringSecurity.hasRole(UserRole.ADMIN)) {
                throw new GenericException(HttpStatus.NOT_FOUND, "Visita não encontrada.");
            }
        } else {
            Visit visit = optionalVisit.get();
            if (userSpringSecurity != null && (userSpringSecurity.hasRole(UserRole.ADMIN)
                    || visit.getUser().getId().equals(userSpringSecurity.getId()))) {
                return visit;
            }
        }
        throw new AuthorizationException();
    }

    public List<Visit> findAllByUser() {
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        return this.visitRepository.findByUser_Id(userSpringSecurity.getId());
    }

    public List<Visit> findAllOfOwner() {
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        if (userSpringSecurity != null)
            return this.visitRepository.findAllOfOwner_Id(userSpringSecurity.getId());
        else
            throw new AuthorizationException();
    }

    public List<Visit> findAll(Specification<Visit> specification) {
        return this.visitRepository.findAll(specification);
    }

    /*@Transactional
    public Visit create(Visit visit) {
        //UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        User user = this.userService.findById(UserService.getAuthenticatedUser().getId());
        visit.setId(null);
        visit.setUser(user);
        return this.visitRepository.save(visit);
    }*/

    @Transactional
    public Visit update(Long id, Visit visit) {   

        Visit visitFound = this.findById(id);
        if(visit.getDatetime() != null)
            visitFound.setDatetime(visit.getDatetime());
        
        if(visit.getCarriedOut() != null)
            visitFound.setCarriedOut(visit.getCarriedOut());

        if(visit.getVisitRating() != null)
            visitFound.setVisitRating(visit.getVisitRating());

        if(visit.getPropertyRating() != null)
            visitFound.setPropertyRating(visit.getPropertyRating());

        if(!visit.getComments().equals(null))
            visitFound.setComments(visit.getComments());

        return this.visitRepository.save(visitFound);
    }

    @Transactional
    public void delete(Long id) {
        findById(id);
        this.visitRepository.deleteById(id);
    }

    @Transactional
    public Visit save(Visit visit){
        return visitRepository.save(visit);
    }

}
