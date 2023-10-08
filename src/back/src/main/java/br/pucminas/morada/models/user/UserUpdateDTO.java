package br.pucminas.morada.models.user;

import br.pucminas.morada.models.DTO;
import lombok.Data;

@Data
public class UserUpdateDTO implements DTO<User> {

    private Long id;

    private String pixKey;

    @Override
    public User toEntity() {
        User user = new User();
        user.setId(this.id);
        user.setPixKey(this.pixKey);
        return user;
    }

}
