package br.pucminas.morada.models.user.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.user.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public record UserCreateDTO(
        @NotBlank String name,
        @NotBlank @Size(min = 11, max = 11) String cpf,
        @NotBlank String email,
        @NotBlank @Size(min = 8, max = 32) String password
) implements DTO<User> {

}
