import { CREATEPALETA } from '../../components/modalCreatePaleta';
import api from '../api';
interface Item {
  paletaId: string;
  quantidade: number;
}
const findAllService = {
  allPaletas: () =>
    api
      .get('/all-paletas')
      .then((response: any) => response)
      .catch((error: any) => console.log(error)),

  allBagPaletas: () =>
    api
      .get('/all-carrinho')
      .then((response: any) => response)
      .catch((error: any) => console.log(error)),
};
const findOneService = {
  findOnePaleta: async (id: string) =>
    api
      .get(`/one-paleta/${id}`)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => console.log(error)),
};
const bagService = {
  createBag: async (values: Item[]) =>
    api
      .post('/create-carrinho', values)
      .then((response: any) => response)
      .catch((error: any) => console.log(error)),
  DeleteBag: () =>
    api
      .delete('/finish-carrinho')
      .then((response: any) => response)
      .catch((error: any) => console.log(error)),
};

const createPaletaService = {
  createPaleta: (values: CREATEPALETA) =>
    api
      .post('/create-paleta', values)
      .then((response: any) => response)
      .catch((error: any) => console.log(error)),
};

const editPaletaService = {
  editPaleta: (id: string, values: any) =>
    api
      .put(`/update-paleta/${id}`, values)
      .then(() => 'success')
      .catch((err: any) => console.log(err)),
};
export {
  findAllService,
  bagService,
  findOneService,
  createPaletaService,
  editPaletaService,
};
