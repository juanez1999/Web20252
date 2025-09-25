import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const EditName = () => {
  const [newName, setNewName] = useState<string>('');
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Nuevo nombre del usuario' />
      <button
        onClick={() => {
          if (user) {
            const updatedUser = { ...user, name: newName };
            setUser(updatedUser);
          }
          setNewName('');
        }}
      >
        Guardar
      </button>
    </>
  );
};

export default EditName;
