package br.pucminas.morada.models.user.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.user.User;
import jakarta.validation.constraints.Size;
import lombok.Data;

public record UserUpdateDTO(
        Long id,
        String password,
        @Size(max = 32) String pixKey
) implements DTO<User> {

}
