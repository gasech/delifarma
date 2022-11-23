package com.senac.delifarma.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senac.delifarma.model.Funcionario;

public interface FuncionarioRepo extends JpaRepository<Funcionario, Long>{
    public Funcionario findByCpfAndSenha(String cpf, String senha);
}