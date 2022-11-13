
import './App.css';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Conteiner from 'react-bootstrap/Container';
import Pelicula from './Componente/Pelicula.js';
import peliculas from './json/peliculas.json';

function App() {
  return (
    <Conteiner>
      <Row>
      <h1>CINEplay</h1>
        {peliculas.map(peli=>
          <Pelicula
          img={peli.img}titulo={peli.titulo}synopsis={peli.synopsis}director={peli.director}reparto={peli.reparto}duracion={peli.duracion}></Pelicula>)}


      </Row>
    </Conteiner>


  );
}

export default App;

