import './index.css';
import acai from '../../mocks/images/acai-com-leite-condensado.png';
import { useState } from 'react';
const PaletaCard = () => {
  const [count, setCount] = useState(0);
  let num: number = 2;
  let addPaleta = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="containerPaleta">
        <span className={`badgeQuantity ${count == 0 ? 'none' : ''}`}>
          {count}
        </span>
        <div className="allContentContainer">
          <div className="paletaTitleContainer">morango</div>
          <div className="paletaPreceContainer">R$ {num.toFixed(2)}</div>
          <div className="paletaDescriptionContainer">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          </div>
          <div className="paletaButtonsContainer">
            <button
              onClick={addPaleta}
              className={`buttonPaleta add ${count >= 1 ? 'lessWidth' : ''}`}
            >
              adicionar
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className={`buttonPaleta remove lessWidth ${
                count == 0 ? 'none' : ''
              }`}
            >
              remove
            </button>
          </div>
        </div>
        <img className="paletaPicture" src={acai} alt="image da paleta" />
      </div>
    </>
  );
};

export default PaletaCard;
