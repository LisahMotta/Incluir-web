import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAluno } from '../services/alunoService';
import fundo from '../assets/fundo.png';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const result = await loginAluno(formData.email, formData.senha);
      if (result) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const estiloContainer = {
    backgroundImage: `url(${fundo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    margin: 0,
    boxSizing: 'border-box',
  };

  const estiloFormulario = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '2.5rem',
    borderRadius: '20px',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  };

  const estiloLabel = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#333',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  const estiloInput = {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    marginBottom: '1rem',
    boxSizing: 'border-box',
  };

  const estiloBotao = {
    backgroundColor: '#FF7F32',
    color: 'white',
    border: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '1.5rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
    }
  };

  const estiloTitulo = {
    color: '#FF7F32',
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2.5rem',
  };

  const estiloError = {
    color: '#ff4444',
    textAlign: 'center',
    marginTop: '1rem',
    fontSize: '0.9rem',
  };

  return (
    <div style={estiloContainer}>
      <form onSubmit={handleSubmit} style={estiloFormulario}>
        <h2 style={estiloTitulo}>Bem-vindo!</h2>

        <div>
          <label style={estiloLabel}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={estiloInput}
              placeholder="Digite seu email"
            />
          </label>

          <label style={estiloLabel}>
            Senha:
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
              style={estiloInput}
              placeholder="Digite sua senha"
            />
          </label>
        </div>

        {error && <p style={estiloError}>{error}</p>}

        <button type="submit" style={estiloBotao} disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </button>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem',
          color: '#666'
        }}>
          <p>Não tem uma conta?</p>
          <button 
            onClick={() => navigate('/cadastro')}
            style={{
              ...estiloBotao,
              backgroundColor: '#4CAF50',
              marginTop: '0.5rem'
            }}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login; 