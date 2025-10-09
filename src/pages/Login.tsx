/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch } from "react-redux";
import { saveAuth } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import {
  useGetPokeByIdQuery,
  useGetPokeByNameQuery,
} from "../services/pokemonFetch";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = 11;
  const { data, isLoading, error } = useGetPokeByIdQuery(id);
  const {
    data: dataByName,
    isLoading: loadingByName,
    error: errorByName,
  } = useGetPokeByNameQuery("bulbasaur");
  console.log("datos:", data);
  console.log("datosByName:", dataByName);

  const handleAuth = () => {
    dispatch(
      saveAuth({ id: "123", name: "Juan", email: "juanito123@gmail.com" })
    );
    navigate("/dashboard");
  };

  return (
    <>
      {isLoading && <p>Loading....</p>}
      <h1>Bienvenido al Login</h1>
      <button onClick={handleAuth}>Ingresar</button>
    </>
  );
};

export default Login;
