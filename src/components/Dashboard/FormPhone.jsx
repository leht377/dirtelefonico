import { useState } from 'react';
import Button from '../Button';

const FormPhone = ({ handleCreatePhone }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleCreate = async (event) => {
    event.preventDefault();
    await handleCreatePhone({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className="container mt-5" onSubmit={handleCreate}>
        <h3 className="mb-4">Crear contacto</h3>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escribir nombre"
            value={name}
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
            onChange={({ target }) => setNumber(target.value)}
          />
        </div>
        <div className="d-grid">
          <Button type={'submit'} text={'crear'} bgcolor={'#f4f4f4'} />
          {/* <button type="submit" className="btn btn-primary">
            crear
          </button> */}
        </div>
      </form>
    </>
  );
};

export default FormPhone;
