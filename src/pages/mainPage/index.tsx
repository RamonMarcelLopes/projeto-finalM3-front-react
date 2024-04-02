import PaletaCard from '../../components/PaletaCard';
import './index.css';
const MainPage = () => {
  let clicktest = (e: any) => {
    console.log(e.target.alt);
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
              <div className="containerImg" onClick={clicktest}>
                <img
                  src="https://jacaimages.vercel.app/imgs/logos/paleta.svg"
                  alt="img to crate a new paleta "
                  className="optionImg"
                />
              </div>
              <div className="containerImg" onClick={clicktest}>
                <img
                  src="https://jacaimages.vercel.app/imgs/logos/atualizar.svg"
                  alt="image to edit a paleta"
                  className="optionImg"
                />
              </div>
              <div className="containerImg" onClick={clicktest}>
                <img
                  src="https://jacaimages.vercel.app/imgs/logos/deletar.svg"
                  alt="image to delete a paleta"
                  className="optionImg"
                />
              </div>
              <div className="containerImg" onClick={clicktest}>
                <img
                  src="https://jacaimages.vercel.app/imgs/logos/sacola.svg"
                  alt="img to see the grocery bag "
                  className="optionImg"
                />
              </div>
            </div>
          </header>
          <div className="containerAllPaletas">
            <PaletaCard />
            <PaletaCard />
            <PaletaCard />
            <PaletaCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
