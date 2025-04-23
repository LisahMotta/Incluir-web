import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fundo from '../assets/fundo.png';
import cachorro from '../avatar/animais/cachorro.png';
import gato from '../avatar/animais/gato.png';
import esquilo from '../avatar/animais/esquilo.png';
import elefante from '../avatar/animais/elefante.png';
import macaco from '../avatar/animais/macaco.png';
import panda from '../avatar/animais/panda.png';
import trex from '../avatar/animais/trex.png';
import tigre from '../avatar/animais/tigre.png';
import leao from '../avatar/animais/leao.png';
import pterodactilo from '../avatar/animais/pterodactilo.png';
import triceratops from '../avatar/animais/triceratops.png';
import unicornio from '../avatar/animais/unicornio.png';
import menina1 from '../avatar/menina/menina1.png';
import menina2 from '../avatar/menina/menina2.png';
import menino1 from '../avatar/menino/menino1.png';
import menino2 from '../avatar/menino/menino2.png';
import bruxa from '../avatar/seresmagicos/bruxa.png';
import bruxo from '../avatar/seresmagicos/bruxo.png';
import fada from '../avatar/seresmagicos/fada.png';
import fado from '../avatar/seresmagicos/fado.png';
import heroi from '../avatar/seresmagicos/heroi.png';
import heroina from '../avatar/seresmagicos/heroina.png';
import pirata from '../avatar/seresmagicos/pirata.png';
import piratinha from '../avatar/seresmagicos/piratinha.png';
import princesa from '../avatar/seresmagicos/princesa.png';
import principe from '../avatar/seresmagicos/principe.png';
import vampira from '../avatar/seresmagicos/vampira.png';
import vampiro from '../avatar/seresmagicos/vampiro.png';
import zumbi from '../avatar/seresmagicos/zumbi.png';
import zumbia from '../avatar/seresmagicos/zumbia.png';

const avatares = {
  cachorro, gato, esquilo, elefante, macaco, panda, trex, tigre, leao,
  pterodactilo, triceratops, unicornio, menina1, menina2, menino1, menino2,
  bruxa, bruxo, fada, fado, heroi, heroina, pirata, piratinha,
  princesa, principe, vampira, vampiro, zumbi, zumbia
};

function Dashboard() {
  const navigate = useNavigate();
  const [avatarSelecionado, setAvatarSelecionado] = useState(null);

  useEffect(() => {
    // Carrega o avatar salvo do localStorage
    const avatarSalvo = localStorage.getItem('avatarSelecionado');
    if (avatarSalvo) {
      setAvatarSelecionado(avatarSalvo);
    }
  }, []);

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

  /* ─── Estilos ────────────────────────────────────────────────────────────── */
  const estiloContainer = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    boxSizing: 'border-box',
    position: 'relative'
  };

  const estiloHeader = {
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '800px',
    width: '100%'
  };

  const estiloTitulo = {
    fontSize: '3rem',
    color: '#fff',
    marginBottom: '1rem',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  };

  const estiloSubtitulo = {
    fontSize: '1.5rem',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  };

  const estiloGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    maxWidth: '800px',
    width: '100%'
  };

  const estiloCard = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.3)'
    }
  };

  const estiloIcone = {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  };

  const estiloTexto = {
    fontSize: '1.2rem',
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  const estiloAvatar = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '4px solid #FF7F32',
    marginBottom: '1rem',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };

  return (
    <>
      <div style={estiloFundo} />
      <div style={estiloContainer}>
        <div style={estiloHeader}>
          <h1 style={estiloTitulo}>
            Seja Bem-vindo!
          </h1>
          <p style={estiloSubtitulo}>
            Educação divertida, inclusiva e acessível
          </p>
          {avatarSelecionado && avatares[avatarSelecionado] && (
            <div>
              <img 
                src={avatares[avatarSelecionado]}
                alt="Avatar selecionado"
                style={estiloAvatar}
              />
            </div>
          )}
        </div>
        
        <div style={estiloGrid}>
          <div 
            style={estiloCard}
            onClick={() => navigate('/leitura')}
          >
            <div style={estiloIcone}>📚</div>
            <div style={estiloTexto}>Leitura</div>
          </div>

          <div 
            style={estiloCard}
            onClick={() => navigate('/ranking')}
          >
            <div style={estiloIcone}>🏆</div>
            <div style={estiloTexto}>Ranking</div>
          </div>

          <div 
            style={estiloCard}
            onClick={() => navigate('/avatar')}
          >
            <div style={estiloIcone}>👤</div>
            <div style={estiloTexto}>Criar Avatar</div>
          </div>

          <div 
            style={estiloCard}
            onClick={() => navigate('/')}
          >
            <div style={estiloIcone}>🏠</div>
            <div style={estiloTexto}>Início</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard; 