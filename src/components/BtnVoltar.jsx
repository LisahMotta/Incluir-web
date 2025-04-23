// src/components/BtnVoltar.jsx
import { useNavigate } from 'react-router-dom';

export default function BtnVoltar({ offset = -1 }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(offset)}
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
  );
}
