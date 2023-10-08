package br.pucminas.morada.security;

import br.pucminas.morada.models.user.UserRole;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
public class UserSpringSecurity implements UserDetails {

    private Long id;
    private String username;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;

    public UserSpringSecurity(Long id, String email, String password, Set<UserRole> profileEnums) {
        this.id = id;
        this.username = email;
        this.password = password;
        this.authorities = profileEnums.stream()
                .map(x -> new SimpleGrantedAuthority(x.name()))
                .collect(Collectors.toSet());
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public boolean hasRole(UserRole userRole) {
        return this.getAuthorities().contains(new SimpleGrantedAuthority(userRole.name()));
    }

}
