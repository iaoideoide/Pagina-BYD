import './App.css';
import Navbar from './components/navbar/navbar';
import Carrousel from './components/carrousel/carrousel';
import Marcas from './components/marcas/marcas';
import Card from './components/card/card';

function App() {
  return ( 
    <>
      <Navbar/>
      <Marcas/>
      <Carrousel/>
      <Card/>
    </>
  );
}

export default App;
