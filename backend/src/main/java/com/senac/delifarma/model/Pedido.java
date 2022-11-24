package com.senac.delifarma.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "pedidos")
public class Pedido {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column (nullable = false, unique = true)
    private Long id;
    
        @Column (nullable = false, unique = false)
        private String cpfCliente;

        @Column (nullable = false, unique = false)
        @JsonFormat(pattern="dd-MM-yyyy HH:mm:ss")
        private LocalDateTime data_pedido;

        @Column (nullable = false, unique = false)
        private double preco_total;

        @Column (nullable = false, unique = false)
        private String status;

    public Pedido() {
    
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCpfCliente() {
        return this.cpfCliente;
    }

    public void setCpfCliente(String cpfCliente) {
        this.cpfCliente = cpfCliente;
    }

    public LocalDateTime getData_pedido() {
        return this.data_pedido;
    }

    public void setData_pedido(LocalDateTime data_pedido) {
        this.data_pedido = data_pedido;
    }

    public double getPreco_total() {
        return this.preco_total;
    }

    public void setPreco_total(double preco_total) {
        this.preco_total = preco_total;
    }

    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}