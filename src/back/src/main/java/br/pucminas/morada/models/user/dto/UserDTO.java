package br.pucminas.morada.models.user.dto;

import br.pucminas.morada.MoradaApplication;
import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.user.User;
import br.pucminas.morada.models.user_verification.UserVerification;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record UserDTO(
        Long id,
        String name,
        String cpf,
        String email,
        boolean admin,
        boolean verified,
        String pixKey,
        LocalDateTime createdAt
) implements DTO<User> {

}
