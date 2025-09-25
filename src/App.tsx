import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import Nav from "./components/Nav";
import TaskList from "./pages/TaskList";

function App() {
  return (
    <>
      <Router>
        {/* Todo lo que queremos que este siempre es afuera del routes */}
        <Nav />
        <Routes>
          <Route path="/create" element={<CreateTask />} />
          <Route path="/list" element={<TaskList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
