package br.pucminas.morada.models.user;

import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UserUpdateDTO {

    private Long id;

    @Size(max = 32)
    private String pixKey;

}
