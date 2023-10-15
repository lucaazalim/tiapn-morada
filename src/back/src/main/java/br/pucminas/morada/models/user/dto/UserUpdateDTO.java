package br.pucminas.morada.models.user.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.user.User;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserUpdateDTO implements DTO<User> {

    private Long id;

    private String password;

    @Size(max = 32)
    private String pixKey;

}
