import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ userName }) => {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('dataUserlogged');
    navigate('/login');
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-xl navbar-dark d-flex justify-content-between px-5"
        style={{
          background: '#f4f4f4',
        }}
      >
        <Link to={'/Directorio'} className="navbar-brand">
          <span style={{ color: '#183153' }}>
            Directorio<b>Telefonico</b>
          </span>
        </Link>
        {/* <div className="w-25">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div> */}
        <div className="w-15">
          <div className="dropstart ">
            <button
              className="btn btn-secondary border-0 bg-transparent dropdown-toggle d-flex justify-content-center align-items-center gap-2"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: '#183153' }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background:
                    "url('https://s2.coinmarketcap.com/static/img/coins/64x64/14553.png')",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              ></div>
              {userName}
            </button>

            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <button onClick={logout} className="dropdown-item" href="#d">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
