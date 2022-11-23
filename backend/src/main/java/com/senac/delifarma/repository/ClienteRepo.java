package com.senac.delifarma.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senac.delifarma.model.Cliente;

public interface ClienteRepo extends JpaRepository<Cliente, Long>{
    public Cliente findByCpfAndSenha(String cpf, String senha);
}
