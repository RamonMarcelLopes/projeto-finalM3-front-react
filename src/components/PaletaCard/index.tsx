import ModalEditPaleta from '../modalEditPaleta';
import { MODALSEEMORE } from '../modalSeeMore';
import './index.css';

import { useEffect, useState } from 'react';
type PALETA = {
  _id: string;
  sabor: string;
  preco: Number;
  descricao: string;
  foto: string;
  addtobag: (id: string, quantity: number) => void;
  removeFromBag: (id: string) => void;
  reset: boolean;
  fillData?: (obj: MODALSEEMORE) => void;
  editModeMain: boolean;
  changeEditMode: () => void;
  getAllPaletas: () => Promise<void>;
};
const PaletaCard = ({
  _id,
  sabor,
  preco,
  descricao,
  foto,
  addtobag,
  removeFromBag,
  reset,
  fillData,
  editModeMain,
  changeEditMode,
  getAllPaletas,
}: PALETA) => {
  const [count, setCount] = useState(0);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [toEdit, setToEdit] = useState<boolean>(false);

  let num: number = 2;
  let obj: any = {
    sabor: sabor,
    preco: preco,
    descricao: descricao,
    img: foto,
  };
  let fill = () => {
    fillData ? fillData(obj) : null;
  };

  let addPaleta = () => {
    setCount(count + 1);
    addtobag(_id, 1);
  };
  let removePaleta = () => {
    setCount(count - 1);
    removeFromBag(_id);
  };
  let resetCounter = () => {
    setCount(0);
  };
  useEffect(() => {
    resetCounter();
  }, [reset]);
  useEffect(() => {
    setEditMode(editModeMain);
  }, [editModeMain]);
  let resetEditModal = () => {
    setEditMode(false); //deixa cinza tenq ser atualizado na main
    setToEdit(false); //modal
    changeEditMode();
    setTimeout(() => {
      getAllPaletas();
    }, 1000);
  };

  return (
    <>
      {/* modal */}
      {toEdit ? (
        <>
          <div
            className="blackScreen3"
            onClick={() => setToEdit(!toEdit)}
          ></div>
          <ModalEditPaleta id={_id} closeEdit={resetEditModal} />
        </>
      ) : null}

      {/* modal */}
      <div className={`containerPaleta ${editMode ? 'editMode' : null}`}>
        {editMode ? (
          <>
            <span className="badgeEdit">ATUALIZAR</span>
            <div
              className="clickToEdit cursor"
              onClick={() => setToEdit(!toEdit)}
            ></div>
          </>
        ) : null}
        <span className={`badgeQuantity ${count == 0 ? 'none' : ''}`}>
          {count}
        </span>
        <div className="allContentContainer ">
          <div onClick={fill} className="paletaTitleContainer cursor">
            {sabor}
          </div>
          <div onClick={fill} className="paletaPreceContainer cursor">
            R$ {preco.toFixed(2)}
          </div>
          <div onClick={fill} className="paletaDescriptionContainer cursor">
            {descricao}
          </div>
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
