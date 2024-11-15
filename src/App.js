
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Inicio from './Paginas/Inicio/Index';
import SobreMim from './Paginas/SobreMim/Index';
import Menu from './Componentes/Menu/Index';
import Rodape from 'Componentes/Rodape/Index';
import PaginaPadrao from 'Componentes/PaginaPadrao/Index';


function App() {

  return (
    <BrowserRouter>

      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>

        {/*Na Rota '/, a estrutura a ser renderizada é:
        
        <PaginaPadrao>
          <Inicio />
        </PaginaPadrao>

        Na Rota '/SobreMim', a estrutura a ser renderizada é:
        
        <PaginaPadrao>
          <SobreMim />
        </PaginaPadrao>

        */}

        <Route path="*" element={<div>pagina nao encontrada</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>

  )
}

export default App;
