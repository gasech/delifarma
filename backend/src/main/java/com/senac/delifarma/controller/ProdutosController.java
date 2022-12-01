package com.senac.delifarma.controller;

import com.senac.delifarma.model.Produto;
import com.senac.delifarma.repository.ProdutoRepo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
@RequestMapping("/produtos")
public class ProdutosController {
    private final ProdutoRepo produtoRepo;

    public ProdutosController(ProdutoRepo produtoRepo){
        this.produtoRepo = produtoRepo;
    }

    @GetMapping
    public List<Produto> getProdutos() {
        return produtoRepo.findAll();
    }

    @GetMapping("/{id}")
    public Produto getProduto(@PathVariable Long id) {
        return produtoRepo.findById(id).orElseThrow(RuntimeException::new);
    }
    
    @PostMapping
    public ResponseEntity createProduto(@RequestBody Produto produto) throws URISyntaxException {
        Produto savedProduto = produtoRepo.save(produto);
        return ResponseEntity.created(new URI("/produtos/" + savedProduto.getId())).body(savedProduto);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateProduto(@PathVariable Long id, @RequestBody Produto produto) {
        Produto currentProduto = produtoRepo.findById(id).orElseThrow(RuntimeException::new);
        currentProduto.setCategoria(produto.getCategoria());
        currentProduto.setTitulo(produto.getTitulo());
        currentProduto.setDescricao(produto.getDescricao());
        currentProduto.setImagemUrl(produto.getImagemUrl());
        currentProduto.setPrecoUnitario(produto.getPrecoUnitario());
        currentProduto.setQuantidadeEstoque(produto.getQuantidadeEstoque());
        currentProduto = produtoRepo.save(produto);
        return ResponseEntity.ok(currentProduto);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity deleteProduto(@PathVariable Long id) {
        produtoRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
