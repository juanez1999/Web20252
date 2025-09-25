import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const Profile = ({ showAge = true }) => {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return (
      <div>
        <p>No hay usuario. Haz login para ver el ejemplo</p>
        <button onClick={() => setUser({ id: '12321fgasgd', name: 'Juan', age: 10 })}>Login ejemplo</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Perfil</h2>
      <p>Nombre: {user.name}</p>
      {showAge && <p>Edad: {user.age ?? 'N/A'}</p>}
      <button onClick={() => setUser(null)}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
