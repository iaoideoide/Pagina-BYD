import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main/main';
import Contacto from './components/contacto/contacto';
import QuienesSomos from './components/quienesSomos/quienesSomos';
import InfoExtra from './components/infoExtra/infoExtra';
import MarcaDetail from './components/marcaDetail/marcaDetail';

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/quienesSomos"
          element={<QuienesSomos/>}
        />
        <Route
          path="/detalle/:idMarca" 
          element={<MarcaDetail />}
        />
        <Route path="*" element={<Main />} />
      </Routes>
      <InfoExtra />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
