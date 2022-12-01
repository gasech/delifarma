import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Nav = () => {

  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="produtos?category=medicamentos">Medicamentos<Icon icon="ep:arrow-down-bold" /></Link>
          <div className="dropdown-menu">
            <ul>
              <li><Link to="produtos?category=hormônios">Hormônios</Link></li>
              <li><Link to="produtos?category=azia">Azia</Link></li>
              <li><Link to="produtos?category=antialérgicos">Antialérgicos</Link></li>
              <li><Link to="produtos?category=oftálmicos">Oftálmicos</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="produtos?category=saúde-e-bem-estar">Saúde e Bem-Estar<Icon icon="ep:arrow-down-bold" /></Link>
          <div className="dropdown-menu">
            <ul>
              <li><Link to="produtos?category=vitamina-c">Vitamina C</Link></li>
              <li><Link to="produtos?category=colírio">Colírio</Link></li>
              <li><Link to="produtos?category=máscara">Máscara</Link></li>
              <li><Link to="produtos?category=autoteste-covid">Autoteste COVID</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="produtos?category=skincare">Skincare<Icon icon="ep:arrow-down-bold" /></Link>
          <div className="dropdown-menu">
            <ul>
              <li><Link to="produtos?category=antiacne">Antiacne</Link></li>
              <li><Link to="produtos?category=sabonete">Sabonete</Link></li>
              <li><Link to="produtos?category=máscara-facial">Máscara Facial</Link></li>
              <li><Link to="produtos?category=hidradante-corporal">Hidradante Corporal</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="produtos?category=beleza">Beleza<Icon icon="ep:arrow-down-bold" /></Link>
          <div className="dropdown-menu">
            <ul>
              <li><Link to="produtos?category=perfume">Antiacne</Link></li>
              <li><Link to="produtos?category=acetona">Acetona</Link></li>
              <li><Link to="produtos?category=esmalte">Esmalte</Link></li>
              <li><Link to="produtos?category=barbearia">Barbearia</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="produtos?category=higiene-pessoal">Higiene Pessoal<Icon icon="ep:arrow-down-bold" /></Link>
          <div className="dropdown-menu">
            <ul>
              <li><Link to="produtos?category=escova-de-dente">Escova de Dente</Link></li>
              <li><Link to="produtos?category=fio-dental">Fio Dental</Link></li>
              <li><Link to="produtos?category=algodão">Algodão</Link></li>
              <li><Link to="produtos?category=alcool-em-gel">Alcool em Gel</Link></li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="?produtos?category=cuidados-para-mãe">Cuidados p/ Mãe<Icon icon="ep:arrow-down-bold" /></Link>
          <div className="dropdown-menu">
            <ul>
              <li><Link to="produtos?category=escova-de-dente">Mamadeira</Link></li>
              <li><Link to="produtos?category=fio-dental">Amamentação</Link></li>
              <li><Link to="produtos?category=algodão">Shampoo Infantil</Link></li>
              <li><Link to="produtos?category=alcool-em-gel">Papinha</Link></li>
            </ul>
          </div>
        </li>
      </ul>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background-color: var(--primaryColor);
  height: 40px;
  width: 100%;
  display: flex;

  ul {
    margin-left: 100px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  ul li {
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ul li a {
    display: flex;
    height: 100%;
    width: 100%;
    gap: 5px;
    justify-content: center;
    align-items: center;
    color: var(--contrastText);
    text-decoration: none;
    font-weight: 500;
  }

  ul li a svg {
    margin-top: 2px;
    transition: transform 0.2s;
  }

  ul li:hover a svg {
    transform: rotate(180deg);
  }

  ul li:hover .dropdown-menu {
    display: block;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    margin-left: -15px;
    margin-top: 210px;
    padding: 5px 10px;
    background-color: #f9f9f9;
    background-color: var(--primaryColor);
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    width: 158px;
    height: 176px;
    z-index: 2;
  }

  .dropdown-menu ul {
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0px;
    align-items: flex-start;
    text-align: center;
  }

  .dropdown-menu ul li {
    height: 40px;
    width: 100%;
  }

  .dropdown-menu ul li a {
    color: white;
    width: 100%;
    height: 100%;
  }

  .dropdown-menu ul li:hover a {
    color: white;
    background-color: #e8e8e880;
    border-radius: 5px;
  }
`;

export default Nav;
