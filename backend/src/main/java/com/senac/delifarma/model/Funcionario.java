package com.senac.delifarma.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "funcionarios")
public class Funcionario {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column (nullable = false, unique = true)
    private Long id;
    
    @Column (nullable = false, unique = true)
    private String cpf;

    @Column (nullable = false, unique = false)
    private String senha;

    @Column (nullable = false, unique = false)
    private String cargo;

    @Column (nullable = false, unique = false)
    private String nome;

    @Column (nullable = false, unique = false)
    private String email;

    public Funcionario() {
    
    }

    public String getSenha() {
        return this.senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCargo() {
        return this.cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}