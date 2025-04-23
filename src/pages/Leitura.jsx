// src/pages/Leitura.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardLetra from '../components/CardLetra';
import fundo from '../assets/fundo.png';

// ─── Imports das imagens e sons ────────────────────────────────────────────────
import abelhaImg from '../assets/abelha.png';
import abelhaSom from '../assets/abelha.mp3';
import bolaImg from '../assets/bola.png';
import bolaSom from '../assets/bola.mp3';
import casaImg from '../assets/casa.png';
import casaSom from '../assets/casa.mp3';
import dadoImg from '../assets/dado.png';
import dadoSom from '../assets/dado.mp3';
import elefanteImg from '../assets/elefante.png';
import elefanteSom from '../assets/elefante.mp3';
import focaImg from '../assets/foca.png';
import focaSom from '../assets/foca.mp3';
import gatoImg from '../assets/gato.png';
import gatoSom from '../assets/gato.mp3';
import hipopotamoImg from '../assets/hipopotamo.png';
import hipopotamoSom from '../assets/hipopotamo.mp3';
import ilhaImg from '../assets/ilha.png';
import ilhaSom from '../assets/ilha.mp3';
import jacareImg from '../assets/jacare.png';
import jacareSom from '../assets/jacare.mp3';
import kiwiImg from '../assets/kiwi.png';
import kiwiSom from '../assets/kiwi.mp3';
import leaoImg from '../assets/leao.png';
import leaoSom from '../assets/leao.mp3';
import macacoImg from '../assets/macaco.png';
import macacoSom from '../assets/macaco.mp3';
import navioImg from '../assets/navio.png';
import navioSom from '../assets/navio.mp3';
import ovelhaImg from '../assets/ovelha.png';
import ovelhaSom from '../assets/ovelha.mp3';
import patoImg from '../assets/pato.png';
import patoSom from '../assets/pato.mp3';
import queijoImg from '../assets/queijo.png';
import queijoSom from '../assets/queijo.mp3';
import relogioImg from '../assets/relogio.png';
import relogioSom from '../assets/relogio.mp3';
import sapatoImg from '../assets/sapato.png';
import sapatoSom from '../assets/sapato.mp3';
import tesouraImg from '../assets/tesoura.png';
import tesouraSom from '../assets/tesoura.mp3';
import uvaImg from '../assets/uva.png';
import uvaSom from '../assets/uva.mp3';
import violaoImg from '../assets/violao.png';
import violaoSom from '../assets/violao.mp3';
import waffleImg from '../assets/waffle.png';
import waffleSom from '../assets/waffle.mp3';
import xicaraImg from '../assets/xicara.png';
import xicaraSom from '../assets/xicara.mp3';
import yakultImg from '../assets/yakult.png';
import yakultSom from '../assets/yakult.mp3';
import zebraImg from '../assets/zebra.png';
import zebraSom from '../assets/zebra.mp3';

// ─── Dados das letras ─────────────────────────────────────────────────────────
const letras = [
  { letra: 'A', palavra: 'Abelha',   imagem: abelhaImg,   som: abelhaSom },
  { letra: 'B', palavra: 'Bola',     imagem: bolaImg,     som: bolaSom },
  { letra: 'C', palavra: 'Casa',     imagem: casaImg,     som: casaSom },
  { letra: 'D', palavra: 'Dado',     imagem: dadoImg,     som: dadoSom },
  { letra: 'E', palavra: 'Elefante', imagem: elefanteImg, som: elefanteSom },
  { letra: 'F', palavra: 'Foca',     imagem: focaImg,     som: focaSom },
  { letra: 'G', palavra: 'Gato',     imagem: gatoImg,     som: gatoSom },
  { letra: 'H', palavra: 'Hipopótamo', imagem: hipopotamoImg, som: hipopotamoSom },
  { letra: 'I', palavra: 'Ilha',       imagem: ilhaImg,   som: ilhaSom },
  { letra: 'J', palavra: 'Jacaré',     imagem: jacareImg, som: jacareSom },
  { letra: 'K', palavra: 'Kiwi',       imagem: kiwiImg,   som: kiwiSom },
  { letra: 'L', palavra: 'Leão',       imagem: leaoImg,   som: leaoSom },
  { letra: 'M', palavra: 'Macaco',     imagem: macacoImg, som: macacoSom },
  { letra: 'N', palavra: 'Navio',      imagem: navioImg,  som: navioSom },
  { letra: 'O', palavra: 'Ovelha',     imagem: ovelhaImg, som: ovelhaSom },
  { letra: 'P', palavra: 'Pato',       imagem: patoImg,   som: patoSom },
  { letra: 'Q', palavra: 'Queijo',     imagem: queijoImg, som: queijoSom },
  { letra: 'R', palavra: 'Relógio',    imagem: relogioImg, som: relogioSom },
  { letra: 'S', palavra: 'Sapato',     imagem: sapatoImg, som: sapatoSom },
  { letra: 'T', palavra: 'Tesoura',    imagem: tesouraImg, som: tesouraSom },
  { letra: 'U', palavra: 'Uva',        imagem: uvaImg,    som: uvaSom },
  { letra: 'V', palavra: 'Violão',     imagem: violaoImg, som: violaoSom },
  { letra: 'W', palavra: 'Waffle',     imagem: waffleImg, som: waffleSom },
  { letra: 'X', palavra: 'Xícara',     imagem: xicaraImg, som: xicaraSom },
  { letra: 'Y', palavra: 'Yakult',     imagem: yakultImg, som: yakultSom },
  { letra: 'Z', palavra: 'Zebra',      imagem: zebraImg,  som: zebraSom }
];

// ─── Componente principal ─────────────────────────────────────────────────────
export default function Leitura() {
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

  /* ─── Estilos do container e título ────────────────────────────────────── */
  const estiloContainer = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    position: 'relative'
  };

  const estiloTitulo = {
    fontSize: '2.5rem',
    color: '#fff',
    marginBottom: '3rem',
    fontWeight: 'bold',
    textShadow: '0 2px 4px rgba(0,0,0,.45)',
    textAlign: 'center'
  };

  const estiloGrid = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  return (
    <>
      <div style={estiloFundo} />
      
      <div style={estiloContainer}>
        {/* Botão Voltar */}
        <button
          onClick={() => navigate(-1)}
          style={{
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
          }}
        >
          ⬅ Voltar
        </button>

        {/* Título */}
        <h2 style={estiloTitulo}>Alfabeto</h2>

        {/* Grid de cartões */}
        <div style={estiloGrid}>
          {letras.map((item) => (
            <CardLetra
              key={item.letra}
              letra={item.letra}
              palavra={item.palavra}
              imagem={item.imagem}
              som={item.som}
            />
          ))}
        </div>
      </div>
    </>
  );
}
