package com.example.app.controllers;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/User ")
public class Usuario {

    @GetMapping
    public void IngresarUsuario(){
        
    }

    @PutMapping    
    public void ActualizarUsuario(){
            
    }

    @DeleteMapping
    public void EliminarUsuario(){

    }

    
}
