package br.pucminas.morada.services;

import br.pucminas.morada.models.UserVerification;
import br.pucminas.morada.repositories.UserVerificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserVerificationService {

    @Autowired
    private UserVerificationRepository userVerificationRepository;

    @Transactional
    public UserVerification create(UserVerification userVerification) {
        return this.userVerificationRepository.save(userVerification);
    }

    @Transactional
    public UserVerification update(UserVerification userVerification) {

        UserVerification userVerificationFound = this.findById(userVerification.getId());

        userVerificationFound.setStatus(userVerification.getStatus());

        return this.userVerificationRepository.save(userVerification);

    }

    public UserVerification findById(Long id) {
        return this.userVerificationRepository.findById(id).orElseThrow();
    }

}
