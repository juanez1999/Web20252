import { useState, useEffect } from "react";


const ExampleUseEffect = () => {
    // const [time,setTime] = useState('');
    // const [counter, setCounter] = useState(1);
    // const [msg, setMsg] = useState('');
    const [joke, setJoke] = useState([]);

    // useEffect(() => {
    //     if(counter > 5) {
    //         setMsg('Counter es mayor que 5')
    //     }
    // },[counter])

    useEffect(() => {
        // const getData = async () =>{
        //    const datos = await fetch('http://www.official-joke-api.appspot.com/random_joke').then((response) => response.json());
        //    console.log(datos);
        // }
        // getData();
        fetch('http://www.official-joke-api.appspot.com/random_joke').then((res) => res.json()).then((data) => setJoke(data));
    },[])

    return (
        <div>
            {/* <p>{time}</p> */}
            {/* <p>{counter}</p>
            <p>{msg}</p> */}
            {/* <button onClick={() => setCounter(counter + 1)}></button> */}
            {joke.setup && <p>{joke.setup}: R/ {joke.punchline}</p>}
        </div>
    )
}

export default ExampleUseEffect;