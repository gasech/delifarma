export const validateLogin = async (cpf, senha) => {
  try {
    let loginData = await fetch(`http://localhost:8080/clientes/validar_login?cpf=${cpf}&senha=${senha}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': "*",
        'Access-Control-Allow-Origin': "*"
      }
    });

    let finalData = await loginData.json();
    return finalData;
  } catch (err) {
    return false;
  }
}

export const registerUser = async (email, cpf, nome, telefone, senha) => {
  try {
    let loginData = await fetch(`http://localhost:8080/clientes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': "*",
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify({
        email: email,
        cpf: cpf,
        nome: nome,
        telefone: telefone,
        senha: senha,
      })
    });

    let finalData = await loginData.json();

    return finalData;
  } catch (err) {

    return false;
  }
}

export const updatePassword = async (user) => {
  console.log(user);

  try {
    let loginData = await fetch(`http://localhost:8080/clientes/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': "*",
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify({
        id: user.id,
        cpf: user.cpf,
        senha: user.senha,
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        endereco: user.endereco,
        complemento: user.complemento,
        numero: user.numero,
        cep: user.cep,
        estado: user.estado,
        cidade: user.cidade,
      })
    });

    let finalData = await loginData.json();

    return finalData;
  } catch (err) {

    return false;
  }
}

export const updatePersonalInfo = async (user) => {
  try {
    let loginData = await fetch(`http://localhost:8080/clientes/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': "*",
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify({
        id: user.id,
        cpf: user.cpf,
        senha: user.senha,
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        endereco: user.endereco,
        complemento: user.complemento,
        numero: user.numero,
        cep: user.cep,
        estado: user.estado,
        cidade: user.cidade,
      })
    });

    let finalData = await loginData.json();

    return finalData;
  } catch (err) {

    return false;
  }
}

export const updateAddress = async (user) => {
  console.log()

  try {
    let loginData = await fetch(`http://localhost:8080/clientes/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': "*",
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify({
        id: user.id,
        cpf: user.cpf,
        senha: user.senha,
        nome: user.nome,
        email: user.email,
        telefone: user.telefone,
        endereco: user.endereco, 
        complemento: user.complemento,
        numero: user.numero,
        cep: user.cep,
        estado: user.estado,
        cidade: user.cidade,
      })
    });

    let finalData = await loginData.json();
    
    return finalData;
  } catch(err) {

    return false;
  }
}

export const getPedidos = async (cpf) => {
  try {
    let pedidosData = await fetch(`http://localhost:8080/pedidos/listar_pedidos?cpf_cliente=${cpf}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': "*",
        'Access-Control-Allow-Origin': "*"
      }
    });

    let finalData = await pedidosData.json();

    return finalData;
  } catch (err) {
    return false;
  }
}

export const criarPedido = async (pedido) => {
  try {
    let loginData = await fetch(`http://localhost:8080/pedidos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': "*",
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify({
        cpfCliente: pedido.cpf,
        data_pedido: pedido.data_pedido,
        preco_total: pedido.preco_total,
        status: "Em análise",
      })
    });

    let finalData = await loginData.json();

    return finalData;
  } catch (err) {

    return false;
  }
}