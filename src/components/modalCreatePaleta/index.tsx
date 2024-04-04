import './index.css';
const ModalCreatePaleta = () => {
  return (
    <>
      <div className="modalAllContainer">
        <div className="titleContaine">
          <h2>Adicionar ao Cardapio</h2>
        </div>
        <div className="containerInput">
          <div className="containerInputLabel">
            <label className="labelCreate" htmlFor="preco">
              Preco:
            </label>
            <input className="InputCreate" id="preco" type="text" />
          </div>

          <div className="containerInputLabel">
            <label className="labelCreate" htmlFor="sabor">
              Sabor:
            </label>
            <input className="InputCreate" id="sabor" type="text" />
          </div>

          <div className="containerInputLabel">
            <label className="labelCreate" htmlFor="recheio">
              Recheio:
            </label>
            <input className="InputCreate" id="recheio" type="text" />
          </div>
          <div className="containerInputLabel">
            <label className="labelCreate" htmlFor="descricao">
              Descricao:
            </label>
            <input className="InputCreate" id="descricao" type="text" />
          </div>

          <div className="containerInputLabel">
            <label className="labelCreate" htmlFor="image">
              Image:
            </label>
            <input className="InputCreate" id="image" type="text" />
          </div>
        </div>
        <div className="containerButton">
          <button className="ButtonCreatePaleta">Enviar</button>
        </div>
      </div>
    </>
  );
};

export default ModalCreatePaleta;
