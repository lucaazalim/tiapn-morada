package br.pucminas.morada.models.user_verification.dto;

import jakarta.validation.constraints.NotNull;

public record UserVerificationCreateDTO(
        @NotNull
        Long userId,
        @NotNull
        String identityDocumentFront,
        @NotNull
        String identityDocumentBack
) {
}
