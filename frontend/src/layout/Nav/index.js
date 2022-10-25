import styled from "@emotion/styled";
import { Icon } from "@iconify/react"

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <a href="#">Medicamentos<Icon icon="ep:arrow-down-bold" /></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">Hormônios</a></li>
              <li><a href="#">Azia</a></li>
              <li><a href="#">Antialérgicos</a></li>
              <li><a href="#">Oftálmicos</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Saúde e Bem-Estar<Icon icon="ep:arrow-down-bold" /></a> <div className="dropdown-menu">
            <ul>
              <li><a href="#">Vitamina C</a></li>
              <li><a href="#">Colírio</a></li>
              <li><a href="#">Máscara</a></li>
              <li><a href="#">Autoteste COVID</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Skincare<Icon icon="ep:arrow-down-bold" /></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">Antiacne</a></li>
              <li><a href="#">Sabonete</a></li>
              <li><a href="#">Máscara Facial</a></li>
              <li><a href="#">Hidratante Corporal</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Beleza<Icon icon="ep:arrow-down-bold" /></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">Perfume</a></li>
              <li><a href="#">Acetona</a></li>
              <li><a href="#">Esmalte</a></li>
              <li><a href="#">Barbearia</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Higiene Pessoal<Icon icon="ep:arrow-down-bold" /></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">Escova de Dente</a></li>
              <li><a href="#">Fio Dental</a></li>
              <li><a href="#">Algodão</a></li>
              <li><a href="#">Alcool em Gel</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Cuidados p/ Mãe<Icon icon="ep:arrow-down-bold" /></a>
          <div className="dropdown-menu">
            <ul>
              <li><a href="#">Mamadeira</a></li>
              <li><a href="#">Amamentação</a></li>
              <li><a href="#">Shampoo Infantil</a></li>
              <li><a href="#">Papinha</a></li>
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
  justify-content: center;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  ul li {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ul li a {
    display: flex;
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
    margin-top: 273px;
    padding: 15px 10px;
    background-color: #f9f9f9;
    border-radius: 0px 0px 5px 5px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    width: 158px;
    height: 230px;
    z-index: 1;
  }

  .dropdown-menu ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0px;
    align-items: flex-start;
    text-align: center;
  }

  .dropdown-menu ul li {
    height: 50px;
    width: 100%;
  }

  .dropdown-menu ul li a {
    color: #494949;
    width: 100%;
    height: 100%;
  }

  .dropdown-menu ul li:hover a {
    color: var(--white);
    background-color: #e8e8e8;
    border-radius: 5px;
  }
`;

export default Nav;
