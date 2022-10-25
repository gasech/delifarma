import styled from "@emotion/styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="nav-links-row">
        <div className="nav-link-section">
          <h3>Delifarma</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Carrinho</a></li>
          </ul>
        </div>
        <div className="nav-link-section">
          <h3>Conta</h3>
          <ul>
            <li><a href="#">Entrar</a></li>
            <li><a href="#">Cadastrar</a></li>
            <li><a href="#">Minha Conta</a></li>
            <li><a href="#">Pedidos</a></li>
          </ul>
        </div>
        <div className="nav-link-section">
          <h3>Categorias</h3>
          <ul>
            <li><a href="#">Medicamentos</a></li>
            <li><a href="#">Higiene Pessoal</a></li>
            <li><a href="#">Beleza</a></li>
          </ul>
        </div>
        <div className="nav-link-section">
          <h3>Categorias</h3>
          <ul>
            <li><a href="#">Skincare</a></li>
            <li><a href="#">Saúde e Bem-estar</a></li>
            <li><a href="#">Cuidados p/ Mãe</a></li>
          </ul>
        </div>
      </div>
      <small>Drogaria São Paulo S.A. I CNPJ: 61.412.110/0565-33 l SAC: 0800 779 8767 | São Paulo – SP: Avenida Renata, 60, Chácara Belenzinho – Vila Formosa | Alessandra Graziel Paganini - CRF: 20679 | 24 horas | Autorização de Funcionamento - Processo: 2531.559767/2014-90 | Autorização/MS: 7.31847.3 | As informações contidas neste site, como promoções e ofertas de remédios e medicamentos, não devem ser usadas para automedicação e não substituem, em hipótese alguma, a medicação prescrita pelo profissional da área médica. Somente o médico está em condições de diagnosticar qualquer problema de saúde e prescrever o tratamento adequado. Os preços e as promoções são válidos apenas para compras via Internet. | As fotos contidas em nosso site são meramente ilustrativas. | *Preços e disponibilidade sujeitos a alterações no decorrer do dia. </small>
      <small>Copyright © 2022 Delifarma. Todos os direitos reservados.</small>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: var(--secundaryLayer);
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  small { 
    text-align: center;
    color: #686868
  }

  .nav-links-row {
    display: flex;
    gap: 80px;
    justify-content: center;
  }

  .nav-link-section {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .nav-link-section h3 {
    color: #FFFFFF;
  }

  .nav-link-section ul {
    list-style-type: none;
  }

  .nav-link-section a {
    color: #BFBFBF;
    text-decoration: none;
  }

  .nav-link-section a:hover {
    color: #AFAFAF;
  }
`;


export default Footer;
