import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import directorioServices from '../../services/directorio';
import Button from '../Button';

const FormUpdate = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [disabled, setDisabled] = useState(false);

  const { phone } = useParams();
  const handleUpdatePhone = useOutletContext();

  const getPhone = async () => {
    const data = await directorioServices.getOne(phone);
    setName(data.name);
    setNumber(data.number);
    setDisabled(false);
  };

  useEffect(() => {
    getPhone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const id = phone;
    await handleUpdatePhone({ name, number, id });
  };

  return (
    <>
      <form className="container mt-5" onSubmit={handleUpdate}>
        <h3 className="mb-4">Actualizar contacto</h3>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escribir nombre"
            value={name}
            disabled={disabled}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Numero telefonico</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escribir telefono"
            value={number}
            disabled={disabled}
            onChange={({ target }) => setNumber(target.value)}
          />
        </div>
        <div className="d-grid">
          <Button type={'submit'} text={'Actualizar'} bgcolor={'#f4f4f4'} />
          {/* <button type="submit" className="btn btn-primary">
            crear
          </button> */}
        </div>
      </form>
    </>
  );
};

export default FormUpdate;
