import { useState } from 'react';
import Alert from '../Alert';
import userServices from '../../services/user';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState(null);
  const [typeMsg, setTypeMsg] = useState(null);

  let navigate = useNavigate();

  const handleCreateUser = async (event) => {
    event.preventDefault();
    try {
      await userServices.create({
        username,
        password,
        name,
      });
      setMsg('Successfully created');
      setTypeMsg('success ');
      setTimeout(() => {
        setMsg(null);
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.log(error);
      setMsg('Failed to create user');
      setTypeMsg('error');
      setTimeout(() => {
        setMsg(null);
      }, 3000);
    }
  };

  return (
    <>
      <Alert msg={msg} type={typeMsg} />
      <form
        className="container-sm container-md mt-5"
        style={{ minWidth: '220px', maxWidth: '400px' }}
        onSubmit={handleCreateUser}
      >
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="d-grid">
          <Button type={'submit'} text={'Crear'} />
        </div>
      </form>
    </>
  );
};

export default SignUp;
