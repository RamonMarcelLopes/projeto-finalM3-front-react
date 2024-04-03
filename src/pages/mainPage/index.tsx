import { useEffect, useState } from 'react';
import PaletaCard from '../../components/PaletaCard';
import { bagService, findAllService } from '../../services/paletasService';
import './index.css';
import { PALETA, BAG } from './types';
import ModalGroceryBag from '../../components/modalGroceryBag';

const MainPage = () => {
  let [data, setData] = useState<PALETA[]>();
  let bag: BAG[] = [];
  let [modalbag, setModalbag] = useState(false);
  let [reset, setReset] = useState<boolean>(false);

  let closemodalAndFinishCart = async () => {
    setModalbag(false);
    let response = await bagService.DeleteBag();
    setReset(!reset);
  };
  let addToBag = (id: string, quantity: number) => {
    bag.push({ paletaId: id, quantidade: quantity });
    console.log(bag);
  };
  let removeFromBag = (id: string) => {
    let indexToRemove = bag.findIndex((item) => item.paletaId === id);
    if (indexToRemove !== -1) {
      bag.splice(indexToRemove, 1);
    }
    console.log(bag);
  };

  let createBag = async () => {
    let response = await bagService.createBag(bag);
    setModalbag(!modalbag);
  };
  useEffect(() => {
    getAllPaletas();
  }, []);
  const getAllPaletas = async () => {
    const response = await findAllService.allPaletas();
    setData(response.data);
  };
  return (
    <>
      {modalbag ? (
        <>
          <ModalGroceryBag />
          <div className="blackScreen" onClick={closemodalAndFinishCart}></div>
        </>
      ) : null}
      <div className="containerAllMainbackGround">
        <div className="containerAllMain">
          <header className="HeaderContainer">
            <div className="containerTitleAndImg">
              <div className="containerImgHeader">
                <img
                  src="https://jacaimages.vercel.app/imgs/logos/logogelado.svg"
                  alt="logo geladon"
                  className="geladonImg"
                />
              </div>
              <span className="spanTitle">El Geladon</span>
            </div>
            <div className="containerOptions">
              <div className="containerImg">
                <img
                  src="https://jacaimages.vercel.app/imgs/logos/paleta.svg"
                  alt="img to crate a new paleta "
                  className="optionImg"
                />
              </div>
              <div className="containerImg">
                <img
                  src="https://jacaimages.vercel.app/imgs/logos/atualizar.svg"
                  alt="image to edit a paleta"
                  className="optionImg"
                />
              </div>
              <div className="containerImg">
                <img
                  src="https://jacaimages.vercel.app/imgs/logos/deletar.svg"
                  alt="image to delete a paleta"
                  className="optionImg"
                />
              </div>
              <div className="containerImg" onClick={createBag}>
                <img
                  src="https://jacaimages.vercel.app/imgs/logos/sacola.svg"
                  alt="img to see the grocery bag "
                  className="optionImg"
                />
              </div>
            </div>
          </header>
          <div className="containerAllPaletas">
            {data?.map((data: PALETA) => {
              return (
                <PaletaCard
                  addtobag={addToBag}
                  removeFromBag={removeFromBag}
                  key={data._id}
                  _id={data._id}
                  sabor={data.sabor}
                  preco={data.preco}
                  descricao={data.descricao}
                  foto={data.foto}
                  reset={reset}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
