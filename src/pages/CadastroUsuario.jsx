import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastrarAluno } from '../services/alunoService';
import fundo from '../assets/fundo.png';
import SelecionarAvatar from '../components/SelecionarAvatar';

function CadastroAluno() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    dataNascimento: '',
    serie: '',
    responsaveis: '',
    email: '',
    login: '',
    senha: '',
    confirmarSenha: '',
    avatarId: null
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleAvatarSelect = (avatarId) => {
    setFormData({ ...formData, avatarId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setSuccess(false);
    
    try {
      // Validações
      if (formData.senha.length < 6) {
        setError('A senha deve ter pelo menos 6 caracteres');
        return;
      }

      if (formData.senha !== formData.confirmarSenha) {
        setError('As senhas não coincidem');
        return;
      }

      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Por favor, insira um email válido');
        return;
      }

      if (!formData.avatarId) {
        setError('Por favor, selecione um avatar');
        return;
      }

      const result = await cadastrarAluno(formData);
      
      if (result.success) {
        setSuccess(true);
        setSuccessMessage(result.message);
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      setError(error.message || 'Erro ao realizar cadastro. Tente novamente.');
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
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  };

  const estiloGrupo = {
    marginBottom: '1.5rem',
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
    padding: '1rem 2rem',
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
    fontWeight: 'bold',
  };

  const estiloSuccess = {
    color: '#00C851',
    textAlign: 'center',
    marginTop: '1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  const series = [
    '1º ano - Fundamental',
    '2º ano - Fundamental',
    '3º ano - Fundamental',
    '4º ano - Fundamental',
    '5º ano - Fundamental',
    '6º ano - Fundamental',
    '7º ano - Fundamental',
    '8º ano - Fundamental',
    '9º ano - Fundamental',
  ];

  if (success) {
    return (
      <div style={estiloContainer}>
        <div style={estiloFormulario}>
          <h2 style={estiloTitulo}>Cadastro Realizado!</h2>
          <p style={estiloSuccess}>{successMessage}</p>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Por favor, verifique seu email para confirmar sua conta.
              <br />
              Após a confirmação, você poderá fazer login.
            </p>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>
              Não recebeu o email? Verifique sua pasta de spam.
            </p>
          </div>
          <button 
            onClick={() => navigate('/login')}
            style={{
              ...estiloBotao,
              marginTop: '2rem',
              backgroundColor: '#4CAF50'
            }}
          >
            Ir para Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={estiloContainer}>
      <form onSubmit={handleSubmit} style={estiloFormulario}>
        <h2 style={estiloTitulo}>Cadastro de Aluno</h2>

        {error && <p style={estiloError}>{error}</p>}

        <div style={estiloGrupo}>
          <label style={estiloLabel}>
            Nome Completo:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              style={estiloInput}
              placeholder="Digite seu nome completo"
              disabled={loading}
            />
          </label>

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
              disabled={loading}
            />
          </label>

          <label style={estiloLabel}>
            Data de Nascimento:
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
              style={estiloInput}
              disabled={loading}
            />
          </label>

          <label style={estiloLabel}>
            Série:
            <select
              name="serie"
              value={formData.serie}
              onChange={handleChange}
              required
              style={estiloInput}
              disabled={loading}
            >
              <option value="">Selecione a série</option>
              {series.map((serie) => (
                <option key={serie} value={serie}>
                  {serie}
                </option>
              ))}
            </select>
          </label>

          <label style={estiloLabel}>
            Nome dos Responsáveis:
            <input
              type="text"
              name="responsaveis"
              value={formData.responsaveis}
              onChange={handleChange}
              style={estiloInput}
              placeholder="Nome dos pais ou responsáveis (opcional)"
              disabled={loading}
            />
          </label>

          <label style={estiloLabel}>
            Login:
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleChange}
              required
              style={estiloInput}
              placeholder="Escolha seu nome de usuário"
              disabled={loading}
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
              placeholder="Digite sua senha (mínimo 6 caracteres)"
              disabled={loading}
            />
          </label>

          <label style={estiloLabel}>
            Confirmar Senha:
            <input
              type="password"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
              style={estiloInput}
              placeholder="Digite sua senha novamente"
              disabled={loading}
            />
          </label>

          <SelecionarAvatar 
            onSelect={handleAvatarSelect} 
            selectedAvatar={formData.avatarId} 
          />
        </div>

        <button 
          type="submit" 
          style={{
            ...estiloBotao,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
          disabled={loading}
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default CadastroAluno;
