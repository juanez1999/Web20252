import { useState } from "react";

const Form = ({setEmail}) => {

    // const [email, setEmail] = useState('');    

    // const handleSignIn = () => {
    //     firebase.signIn(email) // '' 
    // }

    return (
        <>
            <input placeholder="Ingresar correo" onChange={(event) => setEmail(event.target.value)}></input>
            {/* <button onClick={handleSignIn}>Iniciar sesión</button> */}
        </>
    )
}

export default Form;