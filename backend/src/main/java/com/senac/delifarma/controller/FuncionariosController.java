package com.senac.delifarma.controller;

import com.senac.delifarma.model.Funcionario;
import com.senac.delifarma.repository.FuncionarioRepo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/funcionarios")
public class FuncionariosController {
    private final FuncionarioRepo funcionarioRepo;

    public FuncionariosController(FuncionarioRepo funcionarioRepo){
        this.funcionarioRepo = funcionarioRepo;
    }

    @GetMapping
    public List<Funcionario> getFuncionarios() {
        return funcionarioRepo.findAll();
    }

    @GetMapping("/{id}")
    public Funcionario getFuncionario(@PathVariable Long id) {
        return funcionarioRepo.findById(id).orElseThrow(RuntimeException::new);
    }
    
    @PostMapping
    public ResponseEntity createFuncionario(@RequestBody Funcionario funcionario) throws URISyntaxException {
        Funcionario savedFuncionario = funcionarioRepo.save(funcionario);
        return ResponseEntity.created(new URI("/funcionarios/" + savedFuncionario.getId())).body(savedFuncionario);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateFuncionario(@PathVariable Long id, @RequestBody Funcionario funcionario) {
        Funcionario currentFuncionario = funcionarioRepo.findById(id).orElseThrow(RuntimeException::new);
        currentFuncionario.setNome(funcionario.getNome());
        currentFuncionario.setSenha(funcionario.getSenha());
        currentFuncionario.setEmail(funcionario.getEmail());
        currentFuncionario.setCpf(funcionario.getCpf());
        currentFuncionario.setCargo(funcionario.getCargo());
        currentFuncionario = funcionarioRepo.save(funcionario);
        
        return ResponseEntity.ok(currentFuncionario);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity deleteFuncionario(@PathVariable Long id) {
        funcionarioRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
