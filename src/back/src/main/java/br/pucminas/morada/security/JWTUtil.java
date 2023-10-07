package br.pucminas.morada.security;

import java.util.Date;
import java.util.Objects;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.security.Keys;

@Component
public class JWTUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration;

    public String generateToken(String username) {

        SecretKey key = getKeyBySecret();

        return Jwts.builder()
                .subject(username)
                .expiration(new Date(System.currentTimeMillis() + this.expiration))
                .signWith(key)
                .compact();

    }

    private SecretKey getKeyBySecret() {
        return Keys.hmacShaKeyFor(this.secret.getBytes());
    }

    public boolean isValidToken(String token) {

        Claims claims = getClaims(token);

        if (claims != null) {

            String username = claims.getSubject();
            Date expirationDate = claims.getExpiration();
            Date now = new Date(System.currentTimeMillis());

            return username != null
                    && expirationDate != null
                    && now.before(expirationDate);

        }

        return false;

    }

    public String getUsername(String token) {
        Claims claims = getClaims(token);
        return claims != null ? claims.getSubject() : null;
    }

    private Claims getClaims(String token) {

        SecretKey key = getKeyBySecret();

        try {
            return Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload();
        } catch (Exception e) {
            return null;
        }

    }

}
