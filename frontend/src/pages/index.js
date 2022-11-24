import styled from '@emotion/styled'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';

const Home = () => {
  const categorias = [
    {
      id: 0,
      nome: "Medicamentos",
      imagemUrl: "https://www.midwestinstituteforaddiction.org/wp-content/uploads/2014/12/New-push-underway-for-prescription-drug-monitoring-in-Missouri.png",
      link: ""
    },
    {
      id: 1,
      nome: "Saúde e Bem-estar",
      imagemUrl: "https://s3.amazonaws.com/cms.ipressroom.com/338/files/201808/5b894ee1a138352221103195_A680~jogging-edit/A680~jogging-edit_e67c0e4f-b3a4-4189-826c-f4d9fc143291-prv.jpg",
      link: ""
    },
    {
      id: 2,
      nome: "Skincare",
      imagemUrl: "https://thumbs.dreamstime.com/b/mulher-encara-bela-sa%C3%BAde-da-pele-linda-menina-saud%C3%A1vel-composi%C3%A7%C3%A3o-tocando-maquiagem-pelas-m%C3%A3os-skincare-natural-e-tratamento-168156522.jpg",
      link: ""
    },
    {
      id: 3,
      nome: "Beleza",
      imagemUrl: "https://freepngimg.com/save/23358-woman-model-photos/733x900",
      link: ""
    },
    {
      id: 4,
      nome: "Higiene Pessoal",
      imagemUrl: "https://www.starpromocionais.com.br/imagens/uploads/imgs/produtos/produtosfotos/1000x1000/kit-mascara-sabonete-e-alcool.png",
      link: ""
    },
    {
      id: 5,
      nome: "Cuidados p/ Mãe",
      imagemUrl: "https://www.pngitem.com/pimgs/m/626-6264400_indian-pregnant-woman-png-transparent-png.png",
      link: ""
    }
  ];

  const maisVendidos = [
    {
      id: 0,
      nome: "TypeScript",
      imagemUrl: "",
      link: "/produtos",
      precoUnitario: 9.29,
    },
    {
      id: 1,
      nome: "JavaScript",
      imagemUrl: "",
      link: "/produtos",
      precoUnitario: 5.25,
    },
    {
      id: 2,
      nome: "PHP",
      imagemUrl: "",
      link: "/produtos",
      precoUnitario: 0.25,
    },
    {
      id: 3,
      nome: "Python",
      imagemUrl: "",
      link: "/produtos",
      precoUnitario: 7.25,
    },
    {
      id: 4,
      nome: "C",
      imagemUrl: "",
      link: "/produtos",
      precoUnitario: 17.25,
    },
    {
      id: 5,
      nome: "Lua",
      imagemUrl: "",
      link: "/produtos",
      precoUnitario: 10.25,
    }
  ];

  return (
    <MainWrapper>
      <section className="main">
        <div className="main-info">
          <h1>Delifarma</h1>
          <p>Delifarma sua Farmácia Online 24 horas. Medicamentos, remédios genéricos, itens de cuidado diário, produtos para crianças e muito mais.</p>
        </div>
        <div className="main-img"></div>
      </section>
      <section className="atributos-empresa">
        <div className="atributo">
          <Icon icon="ant-design:field-time-outlined" />
          <div className="atributo-detalhes">
            <span>Entrega</span>
            <p> em até 24h</p>
          </div>
        </div>
        <div className="atributo">
          <Icon icon="teenyicons:discount-outline" />
          <div className="atributo-detalhes">
            <span>Descontos</span>
            <p> de até 50% </p>
          </div>
        </div>
        <div className="atributo">
          <Icon icon="bi:credit-card-2-back-fill" />
          <div className="atributo-detalhes">
            <span>Tudo em até</span>
            <p> 12x sem juros</p>
          </div>
        </div>
      </section>
      <section>
        <h2>PRINCIPAIS CATEGORIAS</h2>
        <div className="categorias">
          {categorias.map((categoria) => {
            return (
              <Link to="/" className="categoria" key={categoria.id}>
                <div className="categoria-img" style={{ backgroundImage: `url(${categoria.imagemUrl})` }}></div>
                <span>{categoria.nome}</span>
              </Link>
            )
          })}
        </div>
      </section>
      <section>
        <h2>MAIS VENDIDOS</h2>
        <div className="mais-vendidos">
          {
            maisVendidos.map((produto) => {
              return (
                <Link to={produto.link} key={produto.id} className="produto">
                  <div className="produtoImg">
                  </div>
                  <span>{produto.nome}</span>
                  <p>R${produto.precoUnitario.toString().replace('.', ',')}</p>
                  <Button disableElevation variant="contained" size="small" fullWidth={true}>Comprar</Button>
                </Link>
              )
            })
          }
        </div>
      </section>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  h2 {
    text-align: center;
    padding-left: 20px;
    font-size: 26px;
  }

  h2 a {
    text-decoration: none;
    padding-left: 5px;
    font-size: 14px;
    color: var(--secundaryColor);
  }

  h2 a:hover {
    text-decoration: underline;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .atributos-empresa {
    flex-direction: row;
    justify-content: center;
  }

  .atributo {
    padding: 15px;
    display: flex;
    gap: 10px;
    background-color: var(--primaryColor);
    border-radius: 10px;
    color: white;
  }

  .atributo svg {
    width: 30px;
    height: 30px;
  }

  .atributo p {
    font-size: 18px;
    max-width: 150px;
  }

  .atributo span {
    font-size: 18px;
    font-weight: 600;
  }

  .categorias {
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .categorias .categoria-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
    background-size: cover;
    background-color: white;
  }

  .categoria {
    padding: 25px;
    color: var(--primaryText);
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.5s;
  }
  
  .categoria:hover {
    color: var(--secundaryColor);
  }

  .categoria:hover .categoria-img {
    border: 2px solid var(--secundaryColor);
  }

  .main {
    background-color: var(--primaryLayer);
    border-radius: 0px 0px 20px 20px;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }

  .main .main-info {
    display: flex;
    width: 600px;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .main .main-info h1 {
    font-size: 42px;
  }
  
  .main .main-info p {
    font-size: 22px;
  }
  
  .main-buttons .main-button {
    background-color: var(--primaryColor);
  }

  .main-buttons .main-button:hover {
    background-color: var(--secundaryColor); 
  }
  
  .main .main-info .main-buttons {
    display: flex;
    gap: 15px;
    margin-top: 50px;
  }

  .main .main-img {
    border-radius: 20px;
    width: 500px;
    height: 400px;
    background-image: url('https://www.unicesumar.edu.br/blog/wp-content/uploads/2020/11/Curso-de-farmacia-ead.jpg');
    background-size: cover;
  }

  .mais-vendidos {
    width:100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-bottom: 20px;
  }

  .mais-vendidos .produto {
    width: 200px;
    height: 250px; 
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    transition: box-shadow 0.5s;
    text-decoration: none;
    color: #1f1f1f;
  }

  .mais-vendidos .produto:hover {
    box-shadow: 1px 1px 15px 3px lightgrey;
  }

  .mais-vendidos .produtoImg {
    width: 100%; 
    height: 100px;
    background-color: pink;
  }

  .mais-vendidos .produto span {
    margin-top: 15px;
  }

  .mais-vendidos .produto p {
    margin-top: auto;
    font-size: 22px;
  }
  
  .mais-vendidos button {
    margin-top: 10px;
  }

`;

export default Home;
