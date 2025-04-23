/// src/pages/TelaLeitura.jsx
// src/pages/TelaLeitura.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fundo from '../assets/fundo.png';

export default function TelaLeitura() {
  const navigate = useNavigate();

  /* ─── Fundo fixo ──────────────────────────────────────────────────────── */
  const estiloFundo = {
    position: 'fixed',
    inset: 0,
    backgroundImage: `url(${fundo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1
  };

  /* ─── Contêiner central ──────────────────────────────────────────────── */
  const estiloContainer = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    boxSizing: 'border-box',
    backgroundColor: 'transparent'
  };

  const estiloTitulo = {
    fontSize: '2rem',
    color: '#fff',
    marginBottom: '2.5rem',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,.45)'
  };

  /* ─── Grade responsiva (até 4 col.) ───────────────────────────────────── */
  const estiloGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '2rem',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    justifyItems: 'center',
    padding: '0 2rem'
  };

  /* ─── Estilos base/hover do cartão ───────────────────────────────────── */
  const estiloBase = {
    borderRadius: '18px',
    width: '230px',
    height: '84px',
    padding: '0 1.2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    cursor: 'pointer',
    transition: 'all .25s ease',
    boxShadow: '0 3px 8px rgba(0,0,0,.12)',
    color: '#333',
    fontWeight: 700,
    fontSize: '1.05rem'
  };

  const estiloHover = {
    transform: 'translateY(-6px) scale(1.04)',
    filter: 'brightness(1.1)',
    boxShadow: '0 6px 16px rgba(0,0,0,.22)'
  };

  const estiloImagem = { width: '48px', height: '48px', flexShrink: 0 };

  /* ─── Cores pastel para os botões ─────────────────────────────────────── */
  const cores = ['#ffdcdc', '#ffcab1', '#c5f2dd', '#cfe6ff'];

  /* ─── Botão Voltar ────────────────────────────────────────────────────── */
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

  /* ─── Dados dos botões ───────────────────────────────────────────────── */
  const botoes = [
    { titulo: 'Parlendas',  imagem: '/icons/parlenda.png',  rota: '/parlendas' },
    { titulo: 'Alfabeto',   imagem: '/icons/alfabeto.png',  rota: '/alfabeto' },
    { titulo: 'Contos',     imagem: '/icons/contos.png',    rota: '/contos' },
    { titulo: 'Histórias',  imagem: '/icons/historias.png', rota: '/historias' }
  ];

  /* ─── JSX ─────────────────────────────────────────────────────────────── */
  return (
    <>
      <div style={estiloFundo} />

      <div style={estiloContainer}>
        <button style={estiloVoltar} onClick={() => navigate('/dashboard')}>
          ⬅ Voltar
        </button>

        <h2 style={estiloTitulo}>Escolha o que deseja ler:</h2>

        <div style={estiloGrid}>
          {botoes.map((botao, idx) => {
            const cor = cores[idx % cores.length];
            const estiloCard = { ...estiloBase, backgroundColor: cor };

            return (
              <div
                key={botao.titulo}
                style={estiloCard}
                onClick={() => navigate(botao.rota)}
                onMouseOver={(e) => Object.assign(e.currentTarget.style, estiloHover)}
                onMouseOut={(e) => Object.assign(e.currentTarget.style, estiloCard)}
              >
                <img src={botao.imagem} alt="" style={estiloImagem} />
                {botao.titulo}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
