import { useEffect, useState } from 'react';
import { findAllService, findOneService } from '../../services/paletasService';
import './index.css';
type PALETABAG = {
  paletaId: string;
  quantidade: number;
  __v: number;
  _id: string;
};
type PALETARETURN = {
  _id: string;
  sabor: string;
  descricao: string;
  foto: string;
  preco: number;
  __v: number;
};
type CombinedData = {
  _id: string;
  paletaId: string;
  quantidade?: number;
  sabor?: string;
  descricao?: string;
  foto?: string;
  preco?: number;
  __v?: number;
};
const ModalGroceryBag = () => {
  let [data, setData] = useState<any>();
  let [datapaleta, setDatapaleta] = useState<any>();

  let getdata = async () => {
    let response = await findAllService.allBagPaletas();
    setData(response.data);
    let response2 = await findAllService.allPaletas();
    setDatapaleta(response2.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  // const newArray: any = [...data, ...datapaleta];
  let log = () => {
    console.log(data);
    console.log(datapaleta);
    // console.log(newArray);
  };

  ////

  // ////

  return (
    <>
      <div className="containertest">
        <h2>Paletas & Quantidades</h2>
        {/* {data?.map((paleta: PALETABAG) => {
          return (
            <div className="containerlist">
              <span className="containerProductsList">ola</span>
              <span> {paleta.quantidade} </span>
            </div>
          );
        })} */}
        <div className="buttonContainer" />
        <button onClick={log}>FECHAR COMPRA</button>
      </div>
    </>
  );
};

export default ModalGroceryBag;
