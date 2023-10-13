package br.pucminas.morada.controllers;

import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.UserCreateDTO;
import br.pucminas.morada.models.user.UserUpdateDTO;
import br.pucminas.morada.security.UserSpringSecurity;
import br.pucminas.morada.services.UserService;
import br.pucminas.morada.services.exceptions.GenericException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/users")
@Validated
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/me")
    public ResponseEntity<User> me() {
        UserSpringSecurity userSpringSecurity = UserService.authenticated();

        if(userSpringSecurity == null) {
            throw new GenericException(HttpStatus.FORBIDDEN, "Você não está logado.");
        }

        return this.findById(userSpringSecurity.getId());
    }

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody UserCreateDTO userCreateDTO) {

        ObjectMapper objectMapper = new ObjectMapper();
        User user = objectMapper.convertValue(userCreateDTO, User.class);

        User newUser = this.userService.create(user);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(newUser.getId())
                .toUri();

        return ResponseEntity.created(uri).build();

    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody UserUpdateDTO userUpdateDTO, @PathVariable Long id) {

        userUpdateDTO.setId(id);

        ObjectMapper objectMapper = new ObjectMapper();
        User user = objectMapper.convertValue(userUpdateDTO, User.class);

        this.userService.update(user);

        return ResponseEntity.noContent().build();

    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        User user = this.userService.findById(id);
        return ResponseEntity.ok(user);
    }

}
