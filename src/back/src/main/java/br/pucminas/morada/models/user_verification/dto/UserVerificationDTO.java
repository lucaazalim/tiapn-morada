package br.pucminas.morada.models.user_verification.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.user_verification.UserVerification;

public record UserVerificationDTO(
        Long id,
        Long userId,
        String identityDocumentFront,
        String identityDocumentBack,
        String adminMessage,
        String status,
        String createdAt
) implements DTO<UserVerification> {
}
