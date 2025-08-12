import './App.css'
import Card from './components/Card/Card';
import Form from './components/Form/Form';
//Javascript 

function App() {
  //Esto es javascript
  const counter = 2;

  return ( //Render()
    //Es javascript + html
    <main>
      <div>
        {counter}
      </div>
      <section className='section'>
        <Card title='Titulo' description='Chau'setList={setList}/>
        {/* <my-card title="Este es el titulo" description="Holiss"></my-card> */}
      </section>
    </main>
  )
}

export default App
