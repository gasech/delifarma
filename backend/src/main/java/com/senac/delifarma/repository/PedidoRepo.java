package com.senac.delifarma.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senac.delifarma.model.Pedido;

public interface PedidoRepo extends JpaRepository<Pedido, Long>{   
}
