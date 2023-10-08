package br.pucminas.morada.controllers;

import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user.UserCreateDTO;
import br.pucminas.morada.models.user.UserUpdateDTO;
import br.pucminas.morada.services.UserService;
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

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody UserCreateDTO userCreateDTO) {

        User user = userCreateDTO.toEntity();
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

        User user = userUpdateDTO.toEntity();

        this.userService.update(user);

        return ResponseEntity.noContent().build();

    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        User user = this.userService.findById(id);
        return ResponseEntity.ok(user);
    }

}
