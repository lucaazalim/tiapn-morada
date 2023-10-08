package br.pucminas.morada.models.user;

import br.pucminas.morada.models.DTO;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCreateDTO implements DTO<User> {

    @NotBlank
    private String nome;

    @NotBlank
    private String cpf;

    @NotBlank
    private String email;

    @NotBlank
    private String password;

    @Override
    public User toEntity() {
        User user = new User();
        user.setName(this.nome);
        user.setCpf(this.cpf);
        user.setEmail(this.email);
        user.setPassword(this.password);
        return user;
    }
}
