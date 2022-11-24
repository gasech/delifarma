import bcrypt from "bcrypt"

const salt = 12;

export const validateLogin = (cpf, senha) => {
  let loginData;

  bcrypt.hash(senha, salt, async (err, hash) => {
    loginData = await fetch(`http://localhost:8000/clientes/validar_login?cpf=${cpf}&senha=${hash}`, {
      method: 'GET',
    });
  })

  let finalData = loginData.json();

  return finalData;
}
