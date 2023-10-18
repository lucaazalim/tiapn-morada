package br.pucminas.morada.models.user_verification.dto;

public record UserVerificationDTO(
        Long id,
        Long userId,
        String identityDocumentFront,
        String identityDocumentBack,
        String adminMessage,
        String status,
        String createdAt
) {
}
