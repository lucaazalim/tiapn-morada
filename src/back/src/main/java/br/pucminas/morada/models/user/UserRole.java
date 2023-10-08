package br.pucminas.morada.models.user;

public enum UserRole {

    ADMIN,
    USER;

    public static UserRole fromOrdinal(int ordinal) {

        UserRole[] userRoles = UserRole.values();

        if(userRoles.length - 1 < ordinal) {
            throw new IllegalArgumentException("Invalid UserRole ordinal: " + ordinal);
        }

        return userRoles[ordinal];

    }

}
