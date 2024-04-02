import './index.css';

import { useState } from 'react';
type PALETA = {
  _id: string;
  sabor: string;
  preco: Number;
  descricao: string;
  foto: string;
  addtobag: (id: string, quantity: number) => void;
  removeFromBag: (id: string) => void;
};
const PaletaCard = ({
  _id,
  sabor,
  preco,
  descricao,
  foto,
  addtobag,
  removeFromBag,
}: PALETA) => {
  const [count, setCount] = useState(0);
  let num: number = 2;
  let addPaleta = () => {
    setCount(count + 1);
    addtobag(_id, 1);
  };
  let removePaleta = () => {
    setCount(count - 1);
    removeFromBag(_id);
  };

  return (
    <>
      <div className="containerPaleta">
        <span className={`badgeQuantity ${count == 0 ? 'none' : ''}`}>
          {count}
        </span>
        <div className="allContentContainer">
          <div className="paletaTitleContainer">{sabor}</div>
          <div className="paletaPreceContainer">R$ {preco.toFixed(2)}</div>
          <div className="paletaDescriptionContainer">{descricao}</div>
          <div className="paletaButtonsContainer">
            <button
              onClick={addPaleta}
              className={`buttonPaleta add ${count >= 1 ? 'lessWidth' : ''}`}
            >
              adicionar
            </button>
            <button
              onClick={removePaleta}
              className={`buttonPaleta remove lessWidth ${
                count == 0 ? 'none' : ''
              }`}
            >
              remove
            </button>
          </div>
        </div>
        <img className="paletaPicture" src={foto} alt="image da paleta" />
      </div>
    </>
  );
};

export default PaletaCard;
