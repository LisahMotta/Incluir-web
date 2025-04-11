function CardLetra({letra,palavra,imagem,som}) {
    const tocarSom = () => {
        const audio = new Audio(som)
        audio.play()
    };
    return(
        <div style={{
            border:'2px solid #ccc',
            borderRadius:'10px',
            padding:'1rem',
            textAlign:'center', 
            maxWidth:'300px',
            margin:'1rem auto'
        }}>
            <h3 style={{fontSize:'2rem'}}>{letra}</h3>
            <img src={imagem} alt={palavra} style={{width:'100%'}}/>
            <p>{palavra}</p>
            <buton onClick={tocarSom}>Ouvir</buton>
        </div>
    );
}

export default CardLetra;