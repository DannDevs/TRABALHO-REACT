import { useState, useEffect } from 'react';
import './skins.css';
import Footer from './components/footer/index';

function Skins() {
  const [skins, setSkins] = useState([]);
  const [filtarCards, setCardsfiltrado] = useState([]);
  const [selecionarType, setTypesCards] = useState('');

  useEffect(() => {
    fetch('skins.json')
     .then(response => response.json())
     .then(data => {
        setSkins(data);
        setCardsfiltrado(data);
      });
  }, []);

  const handleButtonClick = (type) => {
    setTypesCards(type);
    const filtarCards = skins.filter(skin => skin.type === type);
    setCardsfiltrado(filtarCards);
  };

  const handleClearSelection = () => {
    setTypesCards('');
    setCardsfiltrado(skins);
  };

  return (
    <>
      <div id='nav'>
        <img src="../public/assets/Screenshot_53.png" alt="img"  />
      </div>
      <div id='sectionbtn'>
        <div id='buttons'>
        <button className="button" onClick={() => handleButtonClick('vandal')}>Vandal</button>
        <button className="button" onClick={() => handleButtonClick('phantom')}>Phantom</button>
        <button className="button" onClick={() => handleButtonClick('spectre')}>Spectre</button>
        <button className="button" onClick={() => handleButtonClick('sheriff')}>Sheriff</button>
        <button className="button" onClick={handleClearSelection}>Limpar</button>
        </div>
      </div>

      <div className="card-container">
        {filtarCards.map(skin => (
          <div key={skin.id} className="card">
            <div id='card-mei'>
              <div id='topcard'> <h2 id='nameskin'>{skin.nome}</h2> </div>   
              <img className='img' src={skin.imgUrl} alt={skin.nome} />
            </div>
            <div className="card-content">
              <p>Data de Lançamento: {skin.dataDeLancamento}</p>
              <p>Valor: {skin.valor}</p>
              <p>Ediçao: {skin.raridade}</p>
            </div>
          </div>
        ))}
      </div>
      <div>  <Footer /> </div>
    </>
  );
}

export default Skins;