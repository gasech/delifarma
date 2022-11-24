package com.senac.delifarma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.senac.delifarma.model.Pedido;

public interface PedidoRepo extends JpaRepository<Pedido, Long>{ 
    public List<Pedido> findByCpfCliente(String cpf_cliente);
}
