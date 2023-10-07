package br.pucminas.morada.models;

import br.pucminas.morada.models.enums.UserRole;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@Table(name = "user")
public class User {

    public interface CreateUser {
    }

    public interface UpdateUser {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "name", length = 100, unique = true, nullable = false)
    @NotBlank(groups = {CreateUser.class, UpdateUser.class})
    private String name;

    @Column(name = "cpf", updatable = false, length = 11, unique = true, nullable = false)
    @NotBlank(groups = CreateUser.class)
    @Size(min = 11, max = 11)
    private String cpf;

    @Column(name = "email", unique = true, nullable = false)
    @NotBlank(groups = {CreateUser.class, UpdateUser.class})
    private String email;

    @Column(name = "password", nullable = false)
    @NotBlank(groups = {CreateUser.class, UpdateUser.class})
    private String password;

    @Column(name = "admin", nullable = false)
    @NotNull(groups = {CreateUser.class, UpdateUser.class})
    private boolean admin;

    @Column(name = "verified", nullable = false)
    @NotNull(groups = {CreateUser.class, UpdateUser.class})
    private boolean verified;

    @Column(name = "pix_key", length = 32)
    private String pixKey;

    @Column(name = "created_at", updatable = false, nullable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "user")
    private List<UserVerification> verifications;

    public Set<UserRole> getRoles() {

        Set<UserRole> roles = new HashSet<>();

        roles.add(UserRole.USER);

        if(this.isAdmin()) {
            roles.add(UserRole.ADMIN);
        }

        return roles;

    }

    @Override
    public boolean equals(Object obj) {

        if (obj instanceof User user) {
            return user.getId().equals(this.getId());
        }

        return false;

    }
}
