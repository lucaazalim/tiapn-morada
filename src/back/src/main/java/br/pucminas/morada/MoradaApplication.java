package br.pucminas.morada;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MoradaApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoradaApplication.class, args);
	}

}
