package com.senac.delifarma.controller;

import com.senac.delifarma.model.Cliente;
import com.senac.delifarma.repository.ClienteRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClientesController {
    private final ClienteRepo clienteRepo;

    public ClientesController(ClienteRepo clienteRepo){
        this.clienteRepo = clienteRepo;
    }

    @GetMapping
    public List<Cliente> getClientes() {
        return clienteRepo.findAll();
    }

    @GetMapping("/validar_login")
    public Cliente getCredencialCliente(@RequestParam String cpf, @RequestParam String senha) {
        return clienteRepo.findByCpfAndSenha(cpf, senha);
    }

    @GetMapping("/{id}")
    public Cliente getCliente(@PathVariable Long id) {
        return clienteRepo.findById(id).orElseThrow(RuntimeException::new);
    }
    
    @PostMapping
    public ResponseEntity createCliente(@RequestBody Cliente cliente) throws URISyntaxException {
        Cliente savedCliente = clienteRepo.save(cliente);
        return ResponseEntity.created(new URI("/clientes/" + savedCliente.getId())).body(savedCliente);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        Cliente currentCliente = clienteRepo.findById(id).orElseThrow(RuntimeException::new);
        currentCliente.setCpf(cliente.getCpf());
        currentCliente.setSenha(cliente.getSenha());
        currentCliente.setEmail(cliente.getEmail());
        currentCliente.setNome(cliente.getNome());
        currentCliente.setTelefone(cliente.getTelefone());
        currentCliente.setEndereco(cliente.getEndereco());
        currentCliente.setComplemento(cliente.getComplemento());
        currentCliente.setNumero(cliente.getNumero());
        currentCliente.setCep(cliente.getCep());
        currentCliente.setEstado(cliente.getEstado());
        currentCliente.setCidade(cliente.getCidade());

        currentCliente = clienteRepo.save(cliente);
        return ResponseEntity.ok(currentCliente);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity deleteCliente(@PathVariable Long id) {
        clienteRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
