import './App.css'
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const booksData = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}&limit=10`).then((res)=>res.json());
      setBooks(booksData.docs);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const handleAddBook = (book) => {
    setReadingList([...readingList, {...book, status: 'Pendiente'}]);
  }

  const handleDelete = (item) => {
    const booksFiltered = readingList.filter((book) => book !== item);
    setReadingList(booksFiltered);
  }

  const handleChangeStatus = (item, status) => {
    const listStatusChanged = readingList.map((book) => book.key === item.key ? {...item, status } : book);
    setReadingList(listStatusChanged);
  }

  if(loading) return <p>Está cargando</p>
  if(error) return <p>Hay un error: {error}</p>
  
  return(
    <>
    <form onSubmit={(e) => handleSearch(e)}>
      <input type='text' 
      placeholder='Buscar libro por nombre' 
      value={searchQuery} 
      onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type='submit'>Buscar</button>      
    </form>

    {books.length > 0 && books.map((book) => 
      <div key={book.key}>
        <p>{book.title}</p>
        <p>{book.author_name}</p>
        <p>{book.first_publish_year}</p>
        <button onClick={() => handleAddBook(book)}>Agregar a lista de lectura</button>
      </div>
    )}

    <h1>Lista de lectura:</h1>
    {readingList.map((item) => 
      <div key={item.key}>
        <p>{item.title}</p>
        <p>{item.author_name}</p>
        <select name="" id="" value={item.status} onChange={(e) => handleChangeStatus(item, e.target.value)}>
          <option value="Pendiente">Pendiente</option>
          <option value="Leyendo">Leyendo</option>
          <option value="Terminado">Terminado</option>
        </select>
        <button onClick={() => handleDelete(item)}>Eliminar</button>
      </div>
    )}
    </>
  )
}

export default App
