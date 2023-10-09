package br.pucminas.morada.services;

import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.UserRole;
import br.pucminas.morada.repositories.UserRepository;
import br.pucminas.morada.security.UserSpringSecurity;
import br.pucminas.morada.services.exceptions.AuthorizationException;
import br.pucminas.morada.services.exceptions.GenericException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional
    public User create(User user) {

        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        try {
            return this.userRepository.save(user);
        } catch (DataIntegrityViolationException exception) {
            throw new GenericException("Já existe um usuário cadastrado com os dados informados.");
        }

    }

    @Transactional
    public User update(User user) {

        User userFound = this.findById(user.getId());

        userFound.setName(user.getName());
        userFound.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
        userFound.setEmail(user.getEmail());
        userFound.setAdmin(user.isAdmin());
        userFound.setVerified(user.isVerified());
        userFound.setPixKey(user.getPixKey());

        return this.userRepository.save(userFound);

    }

    public User findById(Long id) {

        UserSpringSecurity userSpringSecurity = UserService.authenticated();

        if (!userSpringSecurity.hasRole(UserRole.ADMIN) && !id.equals(userSpringSecurity.getId())) {
            throw new AuthorizationException("Acesso negado.");
        }

        return this.userRepository.findById(id)
                .orElseThrow(() -> new GenericException(HttpStatus.NOT_FOUND, "Usuário não encontrado."));

    }

    public static UserSpringSecurity authenticated() {
        try {
            return (UserSpringSecurity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        } catch (Exception exception) {
            return null;
        }
    }

}
