import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Leitura from "./pages/Leitura.jsx";
import CadastrarAluno from "./pages/CadastrarAluno.jsx";
import Ranking from './pages/Ranking.jsx';
import CadastroUsuario from './pages/CadastroUsuario';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SelecionarAvatarPage from './pages/SelecionarAvatarPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leitura" element={<Leitura />} />
        <Route path="/cadastrar" element={<CadastrarAluno />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/avatar" element={<SelecionarAvatarPage />} />
      </Routes>
    </div>
  );
}

export default App;