import './App.css';
import CardList from './components/CardList';
import { useState } from 'react';
import useUsers from './hooks/useUsers';

function App() {
  const [search, setSearch] = useState('');  
  const {users,error,loading} = useUsers();
  
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));  

  //Option 2
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((res) => res.json())
  //   .then((datos) => setUsers(datos))
  //   .catch((error) => setError(error));
  // },[])

  if(error) return <p>Hay un error: {error}</p>
  if(loading) return <p>Cargando.....</p>

  return (
    <>
      <input 
      type='text'
      placeholder='Search User'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <CardList users={filteredUsers}></CardList>
    </>
  )
}

export default App
