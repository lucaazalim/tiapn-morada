package br.pucminas.morada.services;

import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.property.PropertyStatus;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.UserRole;
import br.pucminas.morada.repositories.PropertyRepository;
import br.pucminas.morada.security.UserSpringSecurity;
import br.pucminas.morada.services.exceptions.AuthorizationException;
import br.pucminas.morada.services.exceptions.GenericException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    @Autowired
    private UserService userService;

    @Transactional
    public Property create(Property property) {

        User user = this.userService.findById(UserService.getAuthenticatedUser().getId());
        property.setUser(user);

        return this.propertyRepository.save(property);

    }

    @Transactional
    public Property update(Long id, Property property) {

        Property propertyFound = this.findById(id);
        propertyFound.setStatus(property.getStatus());

        return this.propertyRepository.save(propertyFound);

    }

    public Property findById(Long id) {

        Optional<Property> optionalProperty = this.propertyRepository.findById(id);
        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();

        if (optionalProperty.isEmpty()) {

            if (userSpringSecurity != null && userSpringSecurity.hasRole(UserRole.ADMIN)) {
                throw new GenericException(HttpStatus.NOT_FOUND, "Propriedade não encontrada.");
            }

        } else {

            Property property = optionalProperty.get();

            if (property.getStatus() == PropertyStatus.APPROVED
                    || userSpringSecurity != null && (userSpringSecurity.hasRole(UserRole.ADMIN) || property.getUser().getId().equals(userSpringSecurity.getId()))) {
                return property;
            }

        }

        throw new AuthorizationException();

    }

    public List<Property> findAllByUser() {

        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        return this.propertyRepository.findByUserId(userSpringSecurity.getId());

    }

    public List<Property> findAll(Specification<Property> specification) {

        return this.propertyRepository.findAll(specification);

    }

}
