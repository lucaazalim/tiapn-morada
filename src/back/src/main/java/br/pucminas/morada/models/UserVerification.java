package br.pucminas.morada.models;

import br.pucminas.morada.models.enums.UserVerificationStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Blob;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@Table(name = "user_verification")
public class UserVerification {

    public interface CreateUserVerification {}
    public interface UpdateUserVerification {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false, updatable = false)
    private User user;

    @NotNull(groups = CreateUserVerification.class)
    @Column(name = "identity_document_front", nullable = false, updatable = false)
    private String identityDocumentFront;

    @NotNull(groups = CreateUserVerification.class)
    @Column(name = "identity_document_back", nullable = false, updatable = false)
    private String identityDocumentBack;

    @Column(name = "admin_message")
    private String adminMessage;

    @NotNull(groups = UpdateUserVerification.class)
    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    private UserVerificationStatus status;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

}
