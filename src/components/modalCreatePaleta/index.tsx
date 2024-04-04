import { useEffect, useState } from 'react';
import './index.css';
import { createPaletaService } from '../../services/paletasService';

export type CREATEPALETA = {
  preco: number;
  sabor: string;
  descricao: string;
  foto: string;
};
type RELOADPALETA = {
  reloadPaleta: () => Promise<void>;
  closeModalCreate: () => void;
};
const ModalCreatePaleta = ({
  reloadPaleta,
  closeModalCreate,
}: RELOADPALETA) => {
  const [values, setValues] = useState<CREATEPALETA>({
    preco: 0,
    sabor: '',
    descricao: '',
    foto: '',
  });
  const [isloading, setIsloading] = useState(false);
  const [disable, setDisable] = useState(true);
  const handleChangesValues = (event: any) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  let createPaleta = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsloading(true);
    await createPaletaService.createPaleta(values).then(() => reloadPaleta());
    setIsloading(false);
    closeModalCreate();
  };
  useEffect(() => {
    values.descricao !== '' && values.sabor !== '' && values.foto !== ''
      ? setDisable(false)
      : setDisable(true);
  }, [values]);
  return (
    <>
      {isloading ? (
        <div className="loadContainer">
          <img
            src="https://vksuexams.com/pat22/resourses/spinner.gif"
            className="loading"
            alt=""
          />
        </div>
      ) : null}
      <div className="modalAllContainer">
        <div className="titleContaine">
          <h2>Adicionar ao Cardapio</h2>
        </div>
        <form onSubmit={createPaleta} className="containerInput">
          <div className="containerInputLabel">
            <label className="labelCreate" htmlFor="preco">
              Preco:
            </label>
            <input
              className="InputCreate"
              name="preco"
              id="preco"
              type="number"
              placeholder="Ex: 10.00"
              onChange={handleChangesValues}
              required
            />
          </div>

          <div className="containerInputLabel">
            <label className="labelCreate" htmlFor="sabor">
              Sabor:
            </label>
            <input
              className="InputCreate"
              name="sabor"
              id="sabor"
              type="text"
              placeholder="Ex: Morango"
              onChange={handleChangesValues}
              required
            />
          </div>
          <div className="containerInputLabel">
            <label className="labelCreate" htmlFor="descricao">
              Descricao:
            </label>
            <input
              className="InputCreate"
              name="descricao"
              id="descricao"
              type="text"
              placeholder="Ex: morango com recheio de leite condesado"
              onChange={handleChangesValues}
              required
            />
          </div>

          <div className="containerInputLabel">
            <label className="labelCreate" htmlFor="image">
              Image:
            </label>
            <input
              className="InputCreate"
              name="foto"
              id="image"
              type="text"
              placeholder="Ex: https://site/paletas/maracuja.png"
              onChange={handleChangesValues}
              required
            />
          </div>
          <div className="containerButton">
            <button
              disabled={disable}
              type="submit"
              className="ButtonCreatePaleta"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalCreatePaleta;
