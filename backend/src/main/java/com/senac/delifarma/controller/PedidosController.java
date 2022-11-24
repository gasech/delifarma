package com.senac.delifarma.controller;

import com.senac.delifarma.model.Pedido;
import com.senac.delifarma.repository.PedidoRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
@RequestMapping("/pedidos")
public class PedidosController {
    private final PedidoRepo pedidoRepo;

    public PedidosController(PedidoRepo pedidoRepo){
        this.pedidoRepo = pedidoRepo;
    }

    @GetMapping
    public List<Pedido> getPedidos() {
        return pedidoRepo.findAll();
    }

    @GetMapping("/listar_pedidos")
    public List<Pedido> getPedidosCpf(@RequestParam String cpf_cliente) {
        return pedidoRepo.findByCpfCliente(cpf_cliente);
    }

    @GetMapping("/{id}")
    public Pedido getPedido(@PathVariable Long id) {
        return pedidoRepo.findById(id).orElseThrow(RuntimeException::new);
    }
    
    @PostMapping
    public ResponseEntity createPedido(@RequestBody Pedido pedido) throws URISyntaxException {
        Pedido savedPedido = pedidoRepo.save(pedido);
        return ResponseEntity.created(new URI("/pedidos/" + savedPedido.getId())).body(savedPedido);
    }

    @PutMapping("/{id}")
    public ResponseEntity updatePedido(@PathVariable Long id, @RequestBody Pedido pedido) {
        Pedido currentPedido = pedidoRepo.findById(id).orElseThrow(RuntimeException::new);
        currentPedido.setCpfCliente(pedido.getCpfCliente());
        currentPedido.setData_pedido(pedido.getData_pedido());
        currentPedido.setPreco_total(pedido.getPreco_total());
        currentPedido.setStatus(pedido.getStatus());
        currentPedido = pedidoRepo.save(pedido);

        return ResponseEntity.ok(currentPedido);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity deletePedido(@PathVariable Long id) {
        pedidoRepo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
