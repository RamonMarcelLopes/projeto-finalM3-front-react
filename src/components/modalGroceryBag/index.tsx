import { useEffect, useState } from 'react';
import {
  bagService,
  findAllService,
  findOneService,
} from '../../services/paletasService';
import './index.css';
import List from './list';
type PALETABAG = {
  paletaId: string;
  quantidade: number;
  __v: number;
  _id: string;
};
export type PALETARETURN = {
  _id: string;
  sabor: string;
  descricao: string;
  foto: string;
  preco: number;
  __v: number;
};

const ModalGroceryBag = () => {
  let [data, setData] = useState<any[]>([]);
  // let [datapaleta, setDatapaleta] = useState<PALETARETURN[]>([]);

  let getdata = async () => {
    let sacolaLista = await findAllService.allBagPaletas();
    setData(sacolaLista.data);
  };
  let finishCart = async () => {
    let response = await bagService.DeleteBag();
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="containertest">
        <div className="containerAll">
          <div className="containerTitleModalBag">
            <h2>Paletas & Quantidades</h2>
          </div>
          <div className="infos">
            <span className="name">nome</span>
            <span className="quantityText">quantidade</span>
          </div>
          <div className="conatinerListBag">
            {data?.map((paleta: PALETABAG) => {
              return (
                <List
                  key={paleta._id}
                  id={paleta.paletaId}
                  quantity={paleta.quantidade}
                />
              );
            })}
          </div>
          <div className="buttonContainer">
            <button onClick={finishCart} className="buttonFecharCompra">
              fecharCompra
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalGroceryBag;
