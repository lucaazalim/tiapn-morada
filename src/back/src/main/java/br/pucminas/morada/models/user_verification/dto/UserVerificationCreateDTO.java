package br.pucminas.morada.models.user_verification.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.user_verification.UserVerification;
import jakarta.validation.constraints.NotNull;

public record UserVerificationCreateDTO(
        @NotNull
        String identityDocumentFront,
        @NotNull
        String identityDocumentBack
) implements DTO<UserVerification> {
}
