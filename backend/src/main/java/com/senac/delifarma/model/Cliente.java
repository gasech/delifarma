package com.senac.delifarma.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "clientes")
public class Cliente {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column (nullable = false, unique = true)
    private Long id;

    @Column (nullable = false, unique = true)
    private String cpf;

    @Column (nullable = false, unique = false)
    private String senha;
    
    @Column (nullable = false, unique = false)
    private String nome;

    @Column (nullable = false, unique = false)
    private String email;

    @Column (nullable = true, unique = false)
    private String telefone;

    @Column (nullable = true, unique = false)
    private String endereco;

    @Column (nullable = true, unique = false)
    private String complemento;

    @Column (nullable = true, unique = false)
    private String numero;

    @Column (nullable = true, unique = false)
    private String cep;

    @Column (nullable = true, unique = false)
    private String cidade;

    @Column (nullable = true, unique = false)
    private String estado;

    public Cliente() {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getSenha() {
        return this.senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
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

    public String getTelefone() {
        return this.telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return this.endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getComplemento() {
        return this.complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getNumero() {
        return this.numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getCep() {
        return this.cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return this.cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return this.estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

}