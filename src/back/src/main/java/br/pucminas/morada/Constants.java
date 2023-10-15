package br.pucminas.morada;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

public class Constants {

    public static ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    static {

        OBJECT_MAPPER.registerModule(new JavaTimeModule());

    }

}
