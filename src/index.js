import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Auth from './components/Auth/Auth';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SingUp';
import FormUpdate from './components/Dashboard/FormUpdate';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Route>
      <Route path="/Directorio" element={<App />}>
        <Route path="update/:phone" element={<FormUpdate />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
