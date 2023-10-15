package br.pucminas.morada.models.user.dto;

import br.pucminas.morada.MoradaApplication;
import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user_verification.UserVerification;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDTO implements DTO<User> {

    private Long id;
    private String name;
    private String cpf;
    private String email;
    private boolean admin;
    private boolean verified;
    private String pixKey;
    private LocalDateTime createdAt;

}
