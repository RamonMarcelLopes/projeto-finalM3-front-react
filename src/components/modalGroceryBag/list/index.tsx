import { useEffect, useState } from 'react';
import { findOneService } from '../../../services/paletasService';
import './index.css';
import { PALETARETURN } from '..';
type PALETATOFIND = {
  id: string;
  quantity: number;
};

const List = ({ id, quantity }: PALETATOFIND) => {
  let [data, setData] = useState<PALETARETURN>();
  let getOnePaleta = async () => {
    let response = await findOneService.findOnePaleta(id);
    setData(response.data);
  };
  useEffect(() => {
    getOnePaleta();
  }, []);
  return (
    <>
      <div className="containerEachItem">
        <div className="flavor">{data?.sabor}</div>
        <div className="quantity">{quantity}X</div>
      </div>
    </>
  );
};

export default List;
