package br.pucminas.morada.models.user.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.user.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCreateDTO implements DTO<User> {

    @NotBlank
    private String name;

    @NotBlank
    @Size(min = 11, max = 11)
    private String cpf;

    @NotBlank
    private String email;

    @NotBlank
    @Size(min = 8, max = 32)
    private String password;

}
