package br.pucminas.morada.services;

import br.pucminas.morada.models.User;
import br.pucminas.morada.repositories.UserRepository;
import br.pucminas.morada.security.UserSpringSecurity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = this.userRepository.findByEmail(username);

        if(user == null) {
            throw new UsernameNotFoundException(username);
        }

        return new UserSpringSecurity(user.getId(), user.getEmail(), user.getPassword(), user.getRoles());

    }

}
