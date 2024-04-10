import ModalDeletePaleta from '../modalDeletePaleta';
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
  onDeleteMode: boolean;
  changeDeleteMode: () => void;
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
  onDeleteMode,
  changeDeleteMode,
}: PALETA) => {
  const [count, setCount] = useState(0);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [toEdit, setToEdit] = useState<boolean>(false);
  const [toDelete, setToDelete] = useState<boolean>(false);

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
  let resetDeleteMode = () => {
    setToDelete(false);
    changeDeleteMode();
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

    getAllPaletas();
  };
  let resetAll = () => {
    setToEdit(!toEdit);
    resetEditModal();
  };

  return (
    <>
      {/* modal */}
      {toEdit ? (
        <>
          <div className="blackScreen3" onClick={resetAll}></div>
          <ModalEditPaleta id={_id} closeEdit={resetEditModal} />
        </>
      ) : null}
      {toDelete ? (
        <>
          <ModalDeletePaleta
            id={_id}
            sabor={sabor}
            img={foto}
            resetDeleteMode={resetDeleteMode}
            getAllPaletas={getAllPaletas}
          />
          <div onClick={resetDeleteMode} className="blackScreen3"></div>
        </>
      ) : null}
      {/* modal */}
      <div
        className={`containerPaleta ${editMode ? 'editMode' : null} ${
          onDeleteMode ? 'deleteMode' : null
        }`}
      >
        {editMode ? (
          <>
            <span className="badgeEdit">ATUALIZAR</span>
            <div
              className="clickToEdit cursor"
              onClick={() => setToEdit(!toEdit)}
            ></div>
          </>
        ) : null}
        {onDeleteMode ? (
          <>
            <span className="badgeDelete">DELETAR</span>
            <div
              onClick={() => setToDelete(true)}
              className="clickToDelete cursor"
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
