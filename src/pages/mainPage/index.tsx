import { useEffect, useState } from 'react';
import PaletaCard from '../../components/PaletaCard';
import { findAllService } from '../../services/paletasService';
import './index.css';
const MainPage = () => {
  type PALETA = {
    _id: string;
    sabor: string;
    preco: Number;
    descricao: string;
    foto: string;
  };
  let [data, setData] = useState<PALETA[]>();
  useEffect(() => {
    getAllPaletas();
  }, []);
  const getAllPaletas = async () => {
    const response = await findAllService.allPaletas();

    setData(response.data);
    console.log(data, '❤❤');
  };
  return (
    <>
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
              <div className="containerImg">
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
                  _id={data._id}
                  sabor={data.sabor}
                  preco={data.preco}
                  descricao={data.descricao}
                  foto={data.foto}
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
