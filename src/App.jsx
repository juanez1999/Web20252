//Paso 1: Importar el provider del contexto o los contextos
//Paso 2: Agrupar las pages o components con el provider
import Login from './pages/Login';
import Register from './pages/Register';
import TaskList from './pages/TaskList';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToDoProvider } from './contexts/ToDoContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ToDoProvider>
      <ThemeProvider>
        <NavBar />
        <Router>
          <Routes>
            <Route path="" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="tasks" element={<TaskList />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ToDoProvider>
  );
}

export default App;
