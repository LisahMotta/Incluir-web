
import React from 'react';
import { useNavigate } from 'react-router-dom';

function TelaLeitura() {
  const navigate = useNavigate();

  const estiloContainer = {
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#e6f2ff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const estiloTitulo = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '2rem',
    fontWeight: 'bold'
  };

  const estiloGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '2rem',
    width: '100%',
    maxWidth: '800px',
    justifyItems: 'center'
  };

  const estiloCardBotao = {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    width: '180px',
    height: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out'
  };

  const estiloImagem = {
    width: '50px',
    height: '50px',
    marginBottom: '1rem'
  };

  const estiloVoltar = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#ff7043',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 1000,
    fontWeight: 'bold'
  };

  const botoes = [
    { titulo: 'Parlendas', imagem: '/icons/parlenda.png', rota: '/parlendas' },
    { titulo: 'Alfabeto', imagem: '/icons/alfabeto.png', rota: '/alfabeto' },
    { titulo: 'Contos', imagem: '/icons/contos.png', rota: '/contos' },
    { titulo: 'Histórias', imagem: '/icons/historias.png', rota: '/historias' }
  ];

  return (
    <div style={estiloContainer}>
      <button style={estiloVoltar} onClick={() => navigate('/')}>← Voltar</button>

      <h2 style={estiloTitulo}>Escolha o que deseja ler:</h2>

      <div style={estiloGrid}>
        {botoes.map((botao, index) => (
          <div
            key={index}
            style={estiloCardBotao}
            onClick={() => navigate(botao.rota)}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={botao.imagem} alt={botao.titulo} style={estiloImagem} />
            <span style={{ fontWeight: 'bold', color: '#333' }}>{botao.titulo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TelaLeitura;
