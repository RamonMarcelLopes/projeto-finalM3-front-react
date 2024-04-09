import {
  editPaletaService,
  findOneService,
} from '../../services/paletasService';
import './index.css';
import { useEffect, useState } from 'react';
type PALETAEDIT = {
  _id?: string;
  preco: number;
  sabor: string;
  descricao: string;
  foto: string;
};
const ModalEditPaleta = ({ id, closeEdit }: any) => {
  const [values, setValues] = useState<PALETAEDIT | any>({});
  const handleChangesValues = (event: any) => {
    setValues((values: any) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  let editPaleta = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    delete values._id;
    await editPaletaService.editPaleta(id, values).then(() => closeEdit());
  };
  let fillForm = async () => {
    let response = await findOneService.findOnePaleta(id);
    setValues(response.data);
  };
  useEffect(() => {
    fillForm();
  }, []);
  return (
    <>
      <div className="ModalAllContainerEdit">
        <div className="titleContainnerModalEdit">
          <h2>Atualizar Cardápio</h2>
        </div>
        <form onSubmit={editPaleta} className="inputsContainerModalEdit">
          <div className="InputAndLabel">
            <label className="labelEdit" htmlFor="preco">
              Preco:
            </label>
            <input
              id="preco"
              name="preco"
              type="number"
              onChange={handleChangesValues}
              defaultValue={values.preco}
            />
          </div>
          <div className="InputAndLabel">
            <label className="labelEdit" htmlFor="sabor">
              Sabor:
            </label>
            <input
              id="sabor"
              name="sabor"
              type="text"
              onChange={handleChangesValues}
              defaultValue={values.sabor}
            />
          </div>
          <div className="InputAndLabel">
            <label className="labelEdit" htmlFor="descricao">
              Descricao:
            </label>
            <input
              id="descricao"
              name="descricao"
              type="text"
              onChange={handleChangesValues}
              defaultValue={values.descricao}
            />
          </div>
          <div className="InputAndLabel">
            <label className="labelEdit" htmlFor="foto">
              Image:
            </label>
            <input
              id="foto"
              name="foto"
              type="text"
              onChange={handleChangesValues}
              defaultValue={values.foto}
            />
          </div>
          <div className="buttonContainerModalEdit">
            <button type="submit">Atualizar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalEditPaleta;
