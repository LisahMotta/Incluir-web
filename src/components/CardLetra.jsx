function CardLetra({ letra, palavra, imagem, som }) {
    const tocarSom = () => {
      const audio = new Audio(som);
      audio.play();
    };
  
    return (
      <div style={{
        border: '2px solid #ccc',
        borderRadius: '10px',
        padding: '1rem',
        textAlign: 'center',
        maxWidth: '300px',
        margin: '1rem auto'
      }}>
        <h3 style={{ fontSize: '4rem',margin:'0' }}>{letra}</h3>
        <img src={imagem} alt={palavra} style={{ width: '100%' }} />
        <p style={{fontSize:'1.8rem',margin:"0.5rem 0"}}>{palavra}</p>
        <button onClick={tocarSom}>Ouvir</button>
      </div>
    );
  }
  
  export default CardLetra;
  