
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Inicio from './Paginas/Inicio/Index';
import SobreMim from './Paginas/SobreMim/Index';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>pagina nao encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
