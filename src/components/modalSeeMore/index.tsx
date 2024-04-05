import './index.css';
export type MODALSEEMORE = {
  sabor: string;
  preco: number;
  descricao: string;
  img: string;
};
const ModalSeeMore = ({ sabor, preco, descricao, img }: MODALSEEMORE) => {
  return (
    <>
      <div className="ModalSeeMoreContainerAll">
        <div className="containerAllContent">
          <div className="containerSeeMoreInformation">
            <div className="containerSeeMoreTitleSabor">
              <h1>{sabor}</h1>
            </div>
            <div className="ContainerSeeMorePreco">R${preco}</div>
            <div className="ContainerSeeMoreSabor">
              <strong>Sabor: </strong>
              {sabor}
            </div>
            <div className="ContainerSeeMoreDescricao">
              <strong>Descricao: </strong>
              {descricao}
            </div>
          </div>
          <div className="containerSeeMoreImg">
            <img src={img} alt="paleta de " />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSeeMore;
