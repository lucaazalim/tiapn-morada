package br.pucminas.morada.services;

import br.pucminas.morada.models.User;
import br.pucminas.morada.repositories.UserRepository;
import br.pucminas.morada.services.exceptions.GenericException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public User create(User user) {

        try {
            return this.userRepository.save(user);
        }catch(DataIntegrityViolationException exception) {
            throw new GenericException("Já existe um usuário cadastrado com os dados informados.");
        }

    }

    @Transactional
    public User update(User user) {

        User userFound = this.findById(user.getId());

        userFound.setName(user.getName());
        userFound.setPassword(user.getPassword());
        userFound.setEmail(user.getEmail());
        userFound.setAdmin(user.isAdmin());
        userFound.setVerified(user.isVerified());
        userFound.setPixKey(user.getPixKey());

        return this.userRepository.save(user);

    }

    public User findById(Long id) {
        return this.userRepository.findById(id).orElseThrow();
    }

}
