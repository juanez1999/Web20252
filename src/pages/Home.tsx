import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";

export const Home = () => {
  const navigate = useNavigate();

  const handleCloseSession = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out successfully.");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <h1>Bienvenido</h1>
      <button onClick={handleCloseSession}>Cerrar sesión</button>
    </>
  );
};
