import { useEffect, useState } from 'react';

import directorioServices from './services/directorio';
import './App.css';
import Navbar from './components/Dashboard/Navbar';
import FormPhone from './components/Dashboard/FormPhone';
import CardPhone from './components/Dashboard/CardPhone';
import Search from './components/Dashboard/Search';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [directorio, setDirectorio] = useState([]);
  const [phonesFilter, setPhonesFilter] = useState([]);
  const [search, setSearch] = useState('');

  let navigate = useNavigate();

  const getAllphones = async () => {
    const phones = await directorioServices.getAll();
    setDirectorio(phones);
    console.log('entro');
  };

  useEffect(() => {
    const phonestoShow =
      search === ''
        ? directorio
        : directorio.filter((phone) => phone.name.includes(search));

    setPhonesFilter(phonestoShow);
  }, [search, directorio]);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('dataUserlogged'));
    if (user) {
      setUser(user);
      directorioServices.setToken(user.token);
      getAllphones();
    }
  }, []);

  const handleCreatePhone = async (phoneObject) => {
    try {
      const phoneCreated = await directorioServices.create(phoneObject);
      if (phoneCreated) {
        setDirectorio(directorio.concat(phoneCreated));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePhone = async (id) => {
    try {
      const status = await directorioServices.remove(id);

      if (status === 204) {
        setDirectorio(directorio.filter((phone) => phone._id !== id));
        setSearch('');
        alert('eliminado');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlefilterNameChange = (event) => {
    setSearch(event.target.value);
  };

  const handleUpdatePhone = async (phoneObject) => {
    try {
      const phoneUpdated = await directorioServices.update(
        phoneObject.id,
        phoneObject
      );

      if (phoneUpdated) {
        setDirectorio(
          directorio.filter((phone) => phone._id !== phoneUpdated._id)
        );
        getAllphones();
      }

      // setDirectorio(
      //   directorio
      //     .filter((phone) => phone._id !== phoneUpdated._id)
      //     .concat(phoneUpdated)
      // );
      // setDirectorio(directorio.concat(phoneUpdated));
      console.log('--------directorio-------------');
      console.log(directorio);
      console.log('--------phonesFilter-------------');
      console.log(phonesFilter);
      setSearch('');
      navigate('/Directorio');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        <main>
          <Navbar userName={user.name} />
          <section className="d-flex w-100 ">
            <aside className="px-4" style={{ width: '30%' }}>
              <FormPhone handleCreatePhone={handleCreatePhone} />
              <Outlet context={handleUpdatePhone} />
            </aside>
            <div className="py-5 px-3" style={{ width: '70%' }}>
              <nav>
                <h3>Contatos</h3>
                <Search search={search} setSearch={handlefilterNameChange} />
              </nav>
              <div className="mt-4 d-flex flex-wrap gap-2">
                {phonesFilter.length > 0 ? (
                  phonesFilter.map((phone) => (
                    <CardPhone
                      key={phone._id}
                      name={phone.name}
                      number={phone.number}
                      id={phone._id}
                      handleDeletePhone={handleDeletePhone}
                    />
                  ))
                ) : (
                  <p>No hay numeros</p>
                )}
              </div>
            </div>
          </section>
        </main>
      ) : (
        <p>Autenticate</p>
      )}
    </>
  );
}

export default App;
