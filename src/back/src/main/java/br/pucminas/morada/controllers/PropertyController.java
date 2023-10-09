package br.pucminas.morada.controllers;

import br.pucminas.morada.models.property.Property;
import br.pucminas.morada.models.property.PropertyCreateDTO;
import br.pucminas.morada.services.PropertyService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/properties")
@Validated
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody PropertyCreateDTO propertyCreateDTO) {

        ObjectMapper objectMapper = new ObjectMapper();
        Property property = objectMapper.convertValue(propertyCreateDTO, Property.class);

        Property newProperty = this.propertyService.create(property);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(newProperty.getId())
                .toUri();

        return ResponseEntity.created(uri).build();

    }

    @PutMapping("/{id}")
    @Validated
    public ResponseEntity<Void> update(@Valid @RequestBody Property property, @PathVariable Long id) {

        property.setId(id);

        this.propertyService.update(property);

        return ResponseEntity.noContent().build();

    }

    @GetMapping("/{id}")
    public ResponseEntity<Property> findById(@PathVariable Long id) {
        Property property = this.propertyService.findById(id);
        return ResponseEntity.ok(property);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Property>> findAllByUser() {
        List<Property> properties = this.propertyService.findAllByUser();
        return ResponseEntity.ok(properties);
    }

}
