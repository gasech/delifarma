import styled from '@emotion/styled'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../context/Context';

const Home = () => {
  const navigate = useNavigate();

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
      imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTJS2mHfr6uyPUlfcVT_0zqVeE41zVefl0w&usqp=CAU",
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
      id: 3,
      categoria: "Medicamentos",
      titulo: "Xigduo XR 5mg + 1000mg Astrazeneca 60 Comprimidos",
      descricao: "Xigduo XR 5mg + 1000mg Astrazeneca - 60 Comprimidos é um medicamento indicado para adultos com diabetes melittus tipo 2, quando o uso de dapagliflozina e metformina é apropriado. É um auxiliar da dieta e do exercício, prevenindo insuficiência cardíaca, morte cardiovascular ou nefropatia.",
      imagemUrl: "https://drogariasp.vteximg.com.br/arquivos/ids/457788-500-500/571253---xigduo-xr-5mg-1000mg-astrazeneca-60-comprimidos.jpg",
      precoUnitario: 172.24,
      quantidade: 1,
    },
    {
      id: 8,
      categoria: "Saúde e Bem-estar",
      titulo: "Suplemento Alimentar Melatonina Neo Química Maracujá 90 Comprimidos",
      descricao: "Suplemento Alimentar Melatonina Neo Química Maracujá 90 Comprimidos",
      imagemUrl: "https://drogariasp.vteximg.com.br/arquivos/ids/777534-1000-1000/749001---Suplemento-Alimentar-Melatonina-Neo-Quimica-Maracuja-90-Comprimidos-1.jpg",
      precoUnitario: 19.90,
      quantidade: 1,
    },
    {
      id: 13,
      categoria: "Saúde e Bem-estar",
      titulo: "Bebida Láctea Yopro Chocolate 250ml",
      descricao: "Bebida Láctea Yopro Chocolate 250ml",
      imagemUrl: "https://drogariasp.vteximg.com.br/arquivos/ids/784989-1000-1000/762806---Bebida-Lactea-Yopro-Chocolate-250ml-1.jpg",
      precoUnitario: 9.49,
      quantidade: 1,
    },
    {
      id: 25,
      categoria: "Beleza",
      titulo: "Discos de Algodão Ever Care 50 Unidades",
      descricao: "Os Discos de Algodão Ever Care 50 Unidades são 100% puros, macios e absorventes. Além de remover maquiagem e esmalte, podem ser usados para cuidados com o seu bebê. Composto apenas por algodão, o disco possui duas faces: uma texturizada para a remoção de maquiagem e outra lisa para a aplicação de cremes.",
      imagemUrl: "https://drogariasp.vteximg.com.br/arquivos/ids/660940-1000-1000/656445---discos-de-algodao-ever-care-50-unidades.jpg",
      precoUnitario: 8.29,
      quantidade: 1,
    },
    {
      id: 31,
      categoria: "Beleza",
      titulo: "Protetor Diário Carefree Todo Dia sem Perfume 80 Unidades",
      descricao: "Protetor diário CAREFREE Todo Dia é o protetor diário sem fragrância, ideal para quando não estamos naqueles dias.",
      imagemUrl: "https://drogariasp.vteximg.com.br/arquivos/ids/784790-1000-1000/510890---Protetor-Diario-Carefree-Todo-Dia-80-Unidades-1.jpg",
      precoUnitario: 20.58,
      quantidade: 1,
    },
    {
      id: 39,
      categoria: "Higiene E Cuidados Pessoais",
      titulo: "Creme para Pernas Goicoechea Calmante com Arnica e Camomila 350g",
      descricao: "Creme para Pernas Goicoechea Calmante com Arnica e Camomila foi desenvolvido para auxiliar na redução da sensação de peso e cansaço nas pernas. Oferece uma sensação de frescor, com ação calmante imediata, deixando as pernas hidratadas e relaxadas por até 24 horas.",
      imagemUrl: "https://drogariasp.vteximg.com.br/arquivos/ids/704036-1000-1000/635286---Creme-Para-Perna-Arnica-e-Camomila-400g-1.jpg",
      precoUnitario: 33.45,
      quantidade: 1,
    }
  ];

  const { cartItems, setCartItems } = useContext(CartContext);


  const adicionarAoCarrinho = (produto) => {
    if (cartItems.filter(p => p.id == produto.id).length > 0) {
      let prod = cartItems.find(p => p.id == produto.id);
      prod.quantidade++;

      setCartItems([...cartItems.filter(p => p.id !== produto.id), prod]);
    } else {
      setCartItems([...cartItems, produto]);
    }
  }

  return (
    <MainWrapper>
      <section className="main">
        <div className="main-info">
          <h1>Delifarma</h1>
          <p>Delifarma sua Farmácia Online 24 horas. Medicamentos, remédios genéricos, itens de cuidado diário, produtos para crianças e muito mais.</p>
          <div style={{display: "flex", gap: "10px" }}> 
            <Button disableElevation variant="contained" style={{width: 150}} onClick={() => {
              navigate(`/produtos`);
          }}>Ver produtos</Button>
            <Button disableElevation style={{width: 150}} onClick={
              () => {
                navigate(`/entrar`);
              }
            }>Entrar</Button>
          </div>
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
                <div key={produto.id} className="produto">
                  <div className="produtoImg" style={{ backgroundImage: `url("${produto.imagemUrl}")` }}>
                  </div>
                  <span>{produto.titulo}</span>
                  <p>R${produto.precoUnitario.toFixed(2).toString().replace('.', ',')}</p>
                  <Button
                    disableElevation
                    onClick={() => {
                      adicionarAoCarrinho(produto)
                    }}
                    variant="contained"
                    size="small"
                    fullWidth={true}
                  >Adicionar Ao Carrinho</Button>
                </div>
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
    font-weight: 400;
    text-decoration: none;
    text-align: center;
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
    gap: 20px;
  }

  .main .main-info h1 {
    font-size: 42px;
  }
  
  .main .main-info p {
    font-size: 22px;
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
    height: 370px; 
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    transition: box-shadow 0.5s;
  }

  .mais-vendidos .produto a {
    margin-top: 10px;
    text-decoration: none;
    color: #1f1f1f;
  }

  .mais-vendidos .produto:hover {
    box-shadow: 1px 1px 15px 3px lightgrey;
  }

  .mais-vendidos .produtoImg {
    width: 100%; 
    height: 200px;
    background-size: cover;
  }

  .mais-vendidos .produto span {
    margin-top: 15px;
    padding: 5px;
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
