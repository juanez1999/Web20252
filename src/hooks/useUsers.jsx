import { useState, useEffect } from "react";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    //Option 1
    useEffect(() => {
    const getUsers = async () => {
      try {
        const datos = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
        setUsers(datos);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  },[])

  return { users, error, loading }
}

export default useUsers;