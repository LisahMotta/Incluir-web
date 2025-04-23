import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

  /* ─── Estilos ────────────────────────────────────────────────────────────── */
  const estiloContainer = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f5f5f5'
  };

  const estiloGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    maxWidth: '800px',
    width: '100%'
  };

  const estiloCard = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
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

  const estiloTitulo = {
    color: '#333',
    marginBottom: '1rem'
  };

  const estiloAvatar = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '4px solid #FF7F32',
    marginBottom: '1rem',
    objectFit: 'cover'
  };

  return (
    <div style={estiloContainer}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        maxWidth: '800px',
        width: '100%'
      }}>
        <h1 style={{
          ...estiloTitulo,
          fontSize: '2.8rem',
          marginBottom: '1rem'
        }}>
          Seja Bem-vindo!
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#333',
          fontWeight: 'bold',
          marginBottom: '0.5rem'
        }}>
          Educação divertida, inclusiva e acessível
        </p>
        {avatarSelecionado && avatares[avatarSelecionado] && (
          <div style={{ marginTop: '1rem' }}>
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
  );
}

export default Dashboard; 