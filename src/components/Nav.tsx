import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/create")}>Crear tarea</button>
      <button onClick={() => navigate("/list")}>Ver tareas</button>
    </>
  );
};

export default Nav;
