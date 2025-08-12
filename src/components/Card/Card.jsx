import './Card.css'
import { useState } from 'react';
import Form from '../Form/Form';

const Card = ({title, description}) => {

    const [count, setCount] = useState(0); // count undefined
    const [isMessage, setIsMessage] = useState(true);
    const [messageText, setMessageText] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = () => {
       setCount((prevContent) => prevContent + 1); // let count = 1;
       setIsMessage((prevContent) => !prevContent);
       setMessageText(isMessage ? 'Hola' : 'Adios');
    }

    const handleClickParams = (name) => {
        console.log(`Hola ${name}`);
    }

    return (
        <>
            <h1 className='titulo'>{title}</h1>
            <p>{description}</p>
            <p>{count}</p>
            <h2>{messageText}</h2>
            <button onClick={handleClick}>Sumar</button> 
            <h1>{email}</h1>
            {/* <button onClick={() => handleClickParams('Juan')}>Saludar</button>  */}
            {/* <button onClick='handleClick()'></button> */}
            <Form />
        </>
    )
}

export default Card;
// customElements.define('my-card',Card);