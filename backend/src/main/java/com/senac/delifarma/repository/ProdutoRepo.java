package com.senac.delifarma.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senac.delifarma.model.Produto;

public interface ProdutoRepo extends JpaRepository<Produto, Long>{
    
}
