package br.pucminas.morada.models.user_verification.dto;

import br.pucminas.morada.models.DTO;
import br.pucminas.morada.models.user_verification.UserVerification;
import br.pucminas.morada.models.user_verification.UserVerificationStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record UserVerificationUpdateDTO(
        String adminMessage,
        @NotNull
        UserVerificationStatus status
) implements DTO<UserVerification> {
}
