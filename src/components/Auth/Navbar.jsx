import { Link } from 'react-router-dom';
import Button from '../Button';

const Navbar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">
          Directorio<b>Telefonico</b>
        </span>
        <div className="d-flex">
          <Link to={'/login'} className="mx-2">
            <Button text={'Login'} bgcolor={'white'} type={'button'} />
          </Link>
          <Link to={'/sign_up'} className="">
            <Button text={'Sign up'} bgcolor={'white'} type={'button'} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
