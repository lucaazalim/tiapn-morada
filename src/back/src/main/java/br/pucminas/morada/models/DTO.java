package br.pucminas.morada.models;

import br.pucminas.morada.Constants;
import br.pucminas.morada.models.property.Property;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.Optional;

public interface DTO<T> {

    default T toEntity(Class<T> entityClass) {
        return Constants.OBJECT_MAPPER.convertValue(this, entityClass);
    }

}
