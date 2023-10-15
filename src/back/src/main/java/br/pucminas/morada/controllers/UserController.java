package br.pucminas.morada.controllers;

import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.UserRole;
import br.pucminas.morada.models.user.dto.UserCreateDTO;
import br.pucminas.morada.models.user.dto.UserDTO;
import br.pucminas.morada.models.user.dto.UserUpdateDTO;
import br.pucminas.morada.security.UserSpringSecurity;
import br.pucminas.morada.services.UserService;
import br.pucminas.morada.services.exceptions.AuthorizationException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<UserDTO> me() {

        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();
        return this.findById(userSpringSecurity.getId());

    }

    @PutMapping("/me")
    public ResponseEntity<Void> update(@Valid @RequestBody UserUpdateDTO userUpdateDTO) {

        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();

        userUpdateDTO.setId(userSpringSecurity.getId());

        User user = userUpdateDTO.toEntity(User.class);

        this.userService.update(user);

        return ResponseEntity.noContent().build();

    }

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody UserCreateDTO userCreateDTO) {

        User user = userCreateDTO.toEntity(User.class);
        User newUser = this.userService.create(user);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(newUser.getId())
                .toUri();

        return ResponseEntity.created(uri).build();

    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable Long id) {

        UserSpringSecurity userSpringSecurity = UserService.getAuthenticatedUser();

        if (!userSpringSecurity.hasRole(UserRole.ADMIN) && !id.equals(userSpringSecurity.getId())) {
            throw new AuthorizationException("Acesso negado.");
        }

        User user = this.userService.findById(id);
        UserDTO userDTO = user.toDTO();

        return ResponseEntity.ok(userDTO);

    }

}
