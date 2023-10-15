package br.pucminas.morada.models.user;

import br.pucminas.morada.Constants;
import br.pucminas.morada.MoradaApplication;
import br.pucminas.morada.models.property.dto.PropertyDTO;
import br.pucminas.morada.models.user.dto.UserDTO;
import br.pucminas.morada.models.user_verification.UserVerification;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    @EqualsAndHashCode.Include
    private Long id;

    @Column(name = "name", length = 100, unique = true, nullable = false)
    private String name;

    @Column(name = "cpf", updatable = false, length = 11, unique = true, nullable = false)
    private String cpf;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "admin", nullable = false)
    private boolean admin;

    @Column(name = "verified", nullable = false)
    private boolean verified;

    @Column(name = "pix_key", length = 32)
    private String pixKey;

    @Column(name = "created_at", updatable = false, nullable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    public UserDTO toDTO() {
        return Constants.OBJECT_MAPPER.convertValue(this, UserDTO.class);
    }

}
