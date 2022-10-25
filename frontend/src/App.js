import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { ThemeProvider } from '@emotion/react';

// Pages
import Home from './pages/index.js';
import NotFound from './pages/notFound';
import Carrinho from './pages/carrinho';
import Entrar from './pages/entrar';
import Cadastrar from './pages/cadastrar';
import MinhaConta from './pages/minhaConta';

// Layout
import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';


function App() {
  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carrinho" element={<Carrinho />} />
        <Route path="entrar" element={<Entrar />} />
        <Route path="cadastrar" element={<Cadastrar />} />
        <Route path="/minha-conta" element={<MinhaConta />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
