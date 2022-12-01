package com.senac.delifarma.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "produtos")
public class Produto {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column (nullable = false, unique = true)
    private Long id;
    
    @Column (nullable = false, unique = false)
    private String categoria;

    @Column (nullable = false, unique = false)
    private String titulo;

    @Column (nullable = false, unique = false, columnDefinition = "TEXT")
    private String descricao;

    @Column (nullable = false, unique = false)
    private String imagemUrl;

    @Column (nullable = false, unique = false)
    private double precoUnitario;

    @Column (nullable = false, unique = false)
    private Long quantidadeEstoque;

    public Produto() {
    }

    public Produto(Long id, String categoria, String titulo, String descricao, String imagemUrl, double precoUnitario, Long quantidadeEstoque) {
        this.id = id;
        this.categoria = categoria;
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagemUrl = imagemUrl;
        this.precoUnitario = precoUnitario;
        this.quantidadeEstoque = quantidadeEstoque;
    }    

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoria() {
        return this.categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagemUrl() {
        return this.imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }

    public double getPrecoUnitario() {
        return this.precoUnitario;
    }

    public void setPrecoUnitario(double precoUnitario) {
        this.precoUnitario = precoUnitario;
    }

    public Long getQuantidadeEstoque() {
        return this.quantidadeEstoque;
    }

    public void setQuantidadeEstoque(Long quantidadeEstoque) {
        this.quantidadeEstoque = quantidadeEstoque;
    }
}
