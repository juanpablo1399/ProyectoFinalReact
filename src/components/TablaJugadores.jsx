import Container from 'react-bootstrap/Container';
import { Table } from 'reactstrap';
import jugadores from '../datos/jugadores.json';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState, useEffect } from 'react';
import { Navbar, Form, Col, Row } from 'react-bootstrap';

function TablaJugadores() {
  const [ResltarPares, setResltarPares] = useState(false);
  const [ResaltarImpares, setResaltarImpares] = useState(false);
  const [Datos, setDatos] = useState([]);
  const [datosOriginales, setdatosOriginales] = useState([]);
  const [buscadortexto, setbuscadortexto] = useState('');

  useEffect(() => {
    if (jugadores && jugadores.jugadoresDatos.length > 0) {
      setDatos(jugadores.jugadoresDatos);
      setdatosOriginales(jugadores.jugadoresDatos);
    }
  }, []);

  const onResltarPares = () => {
    setResltarPares(!ResltarPares);
  };

  const onResaltarImpares = () => {
    setResaltarImpares(!ResaltarImpares);
  };

  const onRecortar = (actionOne) => {
    const copiaDatos = [...datosOriginales];
    if (actionOne) {
      setDatos(copiaDatos.slice(0, 15));
    } else {
      setDatos(copiaDatos.slice(15, 30));
    {

      }
    }
    setbuscadortexto('');
  };

  const barraBuscador = (event) => {
    const texto = event.target.value.toLowerCase();
    setbuscadortexto(texto);
    if (texto === '') {
      setDatos(datosOriginales);
    } else {
      const filtrarDatos = datosOriginales.filter(jugador =>
        jugador.name.toLowerCase().includes(texto)
      );
      setDatos(filtrarDatos);
    }
  };

  return (
    <>
      <Container id="container_aux" className='container_class' style={{ marginTop: "70px" }}>
        <Navbar className="justify-content-left">
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control type="texto" placeholder="Buscar" value={buscadortexto} onChange={barraBuscador}/>
              </Col>
              <Col xs="auto">
                <Button type="button">🔎</Button>
              </Col>
            </Row>
          </Form>
        </Navbar>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" style={{ marginRight: '10px' }} onClick={onResltarPares}>
            Resaltar Pares
          </Button>
          <Button variant="secondary" style={{ marginRight: '10px' }} onClick={onResaltarImpares}>Resaltar Impares</Button>
          <Button variant="secondary" style={{ marginRight: '10px' }} onClick={() => onRecortar(true)}> Obtener 1 a 15 </Button>
          <Button variant="secondary" onClick={() => onRecortar(false)} > Obtener 16 a 30 </Button>
        </ButtonGroup>
        <Table borderless responsive style={{ marginTop: "10px" }}>
          <thead className="table_th-color" >
            <tr >
              <th>#</th>
              <th style={{ width: '400px', textoAlign: 'left' }}>Jugador</th>
              <th >Posición</th>
              <th >Goles</th>
              <th >Edad</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: 'red' }}>
            {Datos && Datos.length > 0 ?
              Datos.map((jugador, index) => (
                <tr key={index} className={ResltarPares && index % 2 === 0 ? "table-primary" :
                  ResaltarImpares && index % 2 === 1 ? "table-success" : null}>
                  <td>{jugador.number}</td>
                  <td style={{ textoAlign: 'left' }}>{jugador.name}</td>
                  <td>{jugador.position}</td>
                  <td>{jugador.goals}</td>
                  <td>{jugador.age}</td>
                </tr>
              ))
              : <tr><td colSpan="5">No hay jugadores</td></tr>
            }
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default TablaJugadores;
