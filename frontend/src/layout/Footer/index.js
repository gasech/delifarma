import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="nav-links-row">
        <div className="nav-link-section">
          <h3>Delifarma</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/carrinho">Carrinho</Link></li>
          </ul>
        </div>
        <div className="nav-link-section">
          <h3>Conta</h3>
          <ul>
            <li><Link to="/entrar">Entrar</Link></li>
            <li><Link to="/cadastrar">Cadastrar</Link></li>
            <li><Link to="/minha-conta">Minha Conta</Link></li>
            <li><Link to="/minha-conta/pedidos">Pedidos</Link></li>
          </ul>
        </div>
        <div className="nav-link-section">
          <h3>Categorias</h3>
          <ul>
            <li><Link to="#">Medicamentos</Link></li>
            <li><Link to="#">Higiene Pessoal</Link></li>
            <li><Link to="#">Beleza</Link></li>
          </ul>
        </div>
        <div className="nav-link-section">
          <h3>Categorias</h3>
          <ul>
            <li><Link to="#">Skincare</Link></li>
            <li><Link to="#">Saúde e Bem-estar</Link></li>
            <li><Link to="#">Cuidados p/ Mãe</Link></li>
          </ul>
        </div>
      </div>
      <small>Drogaria Delifarma São Paulo | São Paulo – SP: Avenida Paulista | Avenida inexistente - CRF: 123456 | 24 horas | Autorização de Funcionamento - Processo: 1234.56789/2022-12 | Autorização/MS: 5.123456.7 | As informações contidas neste site, como promoções e ofertas de remédios e medicamentos, não devem ser usadas para automedicação e não substituem, em hipótese alguma, a medicação prescrita pelo profissional da área médica. Somente o médico está em condições de diagnosticar qualquer problema de saúde e prescrever o tratamento adequado. Os preços e as promoções são válidos apenas para compras via Internet. | As fotos contidas em nosso site são meramente ilustrativas. | *Preços e disponibilidade sujeitos a alterações no decorrer do dia. </small>
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
