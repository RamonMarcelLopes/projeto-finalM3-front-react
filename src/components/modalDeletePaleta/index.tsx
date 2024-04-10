import { DeletePaletaService } from '../../services/paletasService';
import spinner from '../../assets/spinner.gif';
import './index.css';
import { useState } from 'react';
type prop = {
  id: string;
  sabor: string;
  img: string;
  resetDeleteMode: () => void;
  getAllPaletas: () => Promise<void>;
};
const ModalDeletePaleta = ({
  id,
  sabor,
  img,
  resetDeleteMode,
  getAllPaletas,
}: prop) => {
  let [isLoading, setIsLoading] = useState<boolean>(false);
  let fullReset = () => {
    resetDeleteMode();
    setIsLoading(false);
    getAllPaletas();
  };
  let deletePaleta = async () => {
    setIsLoading(true);
    DeletePaletaService.deletePaleta(id).then(() => fullReset());
  };
  return (
    <>
      {isLoading ? (
        <div className="ModalAllContainerDeleteLoading">
          <img className="spinerDeleteImg" src={spinner} alt="" />
        </div>
      ) : null}
      <div className="ModalAllContainerDelete">
        <div className="containerTitleModalDelete">
          <h2>Confirmação</h2>
        </div>
        <div className="containerConfirmationTextAndImgModalDelete">
          <div className="containerConfirmationTextModalDelete">
            <p>
              Você realmente deseja remover <strong>{sabor}</strong> do
              cardápio?
            </p>
          </div>
          <div className="containerImgModalDelete">
            <img className="imgModalDelete" src={img} alt="" />
          </div>
        </div>
        <div className="containerButtonsModalDelete">
          <button
            onClick={resetDeleteMode}
            className="buttonModalCancelarDelete"
          >
            CANCELAR
          </button>
          <button onClick={deletePaleta} className="buttonModalConfrimarDelete">
            CONFIRMAR
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalDeletePaleta;
