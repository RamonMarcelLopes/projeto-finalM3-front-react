import { useEffect, useState } from 'react';
import {
  bagService,
  findAllService,
  findOneService,
} from '../../services/paletasService';
import './index.css';
import List from './list';
import { useNavigate } from 'react-router-dom';
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
  let navigate = useNavigate();
  let getdata = async () => {
    let sacolaLista = await findAllService.allBagPaletas();

    const mergedSacolaLista = sacolaLista.data.reduce(
      (acc: any[], curr: any) => {
        const existingItem = acc.find(
          (item: any) => item.paletaId === curr.paletaId
        );

        if (existingItem) {
          existingItem.quantidade += curr.quantidade;
        } else {
          acc.push(curr);
        }

        return acc;
      },
      []
    );
    setData(mergedSacolaLista);
  };
  let finishCart = async () => {
    let response = await bagService.DeleteBag();
    navigate('/loading');
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
              fechar Compra
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalGroceryBag;
