import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles"

// Pages Clientes
import Home from './pages/index.js';
import NotFound from './pages/notFound';
import Carrinho from './pages/carrinho';
import Entrar from './pages/entrar';
import Cadastrar from './pages/cadastrar';
import MinhaConta from './pages/minhaConta';
import MeusPedidos from './pages/meusPedidos';
import Produtos from './pages/produtos';

// Pages Funcionarios
import EntrarPainel from './pages/entrarPainel';
import Painel from './pages/painel';

// Layout
import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#2ACCCC",
        dark: "#26B7B7",
        contrastText: "#ffffff"
      }
    }
  }
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="/minha-conta" element={<MinhaConta />} />
          <Route path="/minha-conta/pedidos" element={<MeusPedidos />} />
          <Route path="/entrar-painel" element={<EntrarPainel />} />
          <Route path="/painel" element={<Painel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
