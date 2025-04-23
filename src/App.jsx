// App.jsx - Componente principal da aplicação
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroUsuario from './pages/CadastroUsuario';
import Leitura from './pages/Leitura';
import Ranking from './pages/Ranking';
import Login from './pages/Login';
import Parlendas from "./pages/Parlendas";
import Dashboard from './pages/Dashboard';
import TelaLeitura from './pages/TelaLeitura';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<CadastroUsuario />} />
      <Route path="/alfabeto" element={<Leitura />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/parlendas" element={<Parlendas />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leitura" element={<TelaLeitura />} />  
    </Routes>
  );
}

export default App;
