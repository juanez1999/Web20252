import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  validatePassword,
} from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [meetsMinPasswordLength, setMeetsMinPasswordLength] = useState<
    boolean | undefined
  >(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkPassword = async () => {
      const status = await validatePassword(auth, password);
      setMeetsMinPasswordLength(status.meetsMinPasswordLength);
      console.log(meetsMinPasswordLength);

      if (!status.isValid) {
        // Password could not be validated. Use the status to show what
        // requirements are met and which are missing.
        // If a criterion is undefined, it is not required by policy. If the
        // criterion is defined but false, it is required but not fulfilled by
        // the given password. For example:
        // const needsLowerCase = status.containsLowercaseLetter !== true;
      }
    };
    checkPassword();
  }, [meetsMinPasswordLength, password]);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <h1>Bienvenido al register</h1>
      <form onSubmit={(e) => handleRegister(e)}>
        <input
          placeholder="Ingresa el correo"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Ingresa la contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {meetsMinPasswordLength ? undefined : "Contraseña insuficiente"}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
