import { useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const CardPhone = ({ name, number, id, handleDeletePhone }) => {
  // {/* <ion-icon name="person-outline"></ion-icon> */}
  const [phoneName, setPhoneName] = useState(name);
  const [phoneNumber, setPhoneNumber] = useState(number);
  const [phoneId, setPhoneId] = useState(id);

  const estilos = {
    borderRadius: '10px 10px 12px 12px',
    borderTop: 'solid 2px gainsboro',
    borderLeft: 'solid 2px gainsboro',
    borderRight: 'solid 2px gainsboro',
    borderBottom: 'solid 4px gainsboro',
    overflow: 'hidden',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#183153',
    width: '300px',
    height: '170px',
  };

  const handleDelete = async () => {
    setPhoneId(phoneId);
    await handleDeletePhone(phoneId);
  };

  return (
    <div style={estilos}>
      <div
        className="w-100 d-flex justify-content-center gap-2 align-items-center"
        style={{ height: '60%', background: '#f4f4f4' }}
      >
        <form
          action=""
          className="d-flex justify-content-center flex-column align-items-center"
          style={{ width: '50%' }}
        >
          <input
            type="text"
            className="bg-transparent border-0"
            value={phoneName}
            disabled
            onChange={({ target }) => setPhoneName(target.value)}
            style={{
              width: '80%',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#183153',
            }}
          />
          <input
            type="text"
            className="bg-transparent border-0"
            value={phoneNumber}
            disabled
            onChange={({ target }) => setPhoneNumber(target.value)}
            style={{
              width: '80%',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: '#183153',
            }}
          />
        </form>
        <div className="myIcon">
          <ion-icon name="call-outline"></ion-icon>
        </div>
      </div>
      <div
        className="w-100 d-flex justify-content-center gap-2 align-items-center"
        style={{ height: '40%' }}
      >
        <Button
          text={'Delete'}
          bgcolor={'white'}
          type={'button'}
          width={'60px'}
          height={'40px'}
          fontsize={'0.8rem'}
          onclick={handleDelete}
        />
        <Link to={`/Directorio/update/${phoneId}`}>
          <Button
            text={'Update'}
            bgcolor={'white'}
            type={'button'}
            width={'60px'}
            height={'40px'}
            fontsize={'0.8rem'}
          />
        </Link>
      </div>
    </div>
  );
};
//   return (
//     <div
//       className="bg-dark d-flex rounded justify-content-between p-4"
//       style={{ width: '300px', paddingTop: '20px', paddingBottom: '20px' }}
//     >
//       <div className="">
//         <h5 className="text-light">{name}</h5>
//         <h6 className="text-light">{number}</h6>
//       </div>
//       <div className="dropdown ">
//         <button
//           className="btn btn-secondary border-0 bg-transparent dropdown-toggle d-flex justify-content-center align-items-center gap-2"
//           id="dropdownMenuLink"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <div className="myIcon">
//             <ion-icon name="person-outline"></ion-icon>
//           </div>
//         </button>

//         <ul
//           className="dropdown-menu dropdown-menu-dark"
//           aria-labelledby="dropdownMenuLink"
//         >
//           <li>
//             <button className="dropdown-item" href="#d">
//               Editar
//             </button>
//             <button className="dropdown-item" href="#d">
//               Elimnar
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

export default CardPhone;
