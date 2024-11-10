import { useState } from 'react';
import { Buscador } from '../components/Buscador';
import { Table, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { solicitudes as initialSolicitudes } from '../utils/solicitudesData';

const Salidas = () => {
  const [valorInput, setValorInput] = useState('');
  const [solicitudesFiltradas, setSolicitudesFiltradas] = useState(initialSolicitudes);
  const [paginaActual, setPaginaActual] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [solicitudSeleccionada, setSolicitudSeleccionada] = useState(null);
  const solicitudesPorPagina = 10;
  const indiceUltimoSolicitud = paginaActual * solicitudesPorPagina;
  const indicePrimerSolicitud = indiceUltimoSolicitud - solicitudesPorPagina;
  const solicitudesActuales = solicitudesFiltradas.slice(indicePrimerSolicitud, indiceUltimoSolicitud);

  const onChange = (evento) => {
    setValorInput(evento.target.value);
  };

  const onSubmit = (evento) => {
    evento.preventDefault();
    const resultadosFiltrados = initialSolicitudes.filter((solicitud) => {
      const nombre = solicitud.nombre.toLowerCase();
      const email = solicitud.email.toLowerCase();
      const tipo = solicitud.tipo.toLowerCase();
      const date = solicitud.date.toLowerCase();
      const busqueda = valorInput.toLowerCase();
      return (
        nombre.includes(busqueda) || 
        email.includes(busqueda) || 
        tipo.includes(busqueda) ||
        date.includes(busqueda)
      );
    });
    setSolicitudesFiltradas(resultadosFiltrados);
    setPaginaActual(1);
  };

  const paginar = (numeroPagina) => setPaginaActual(numeroPagina);

  const cambiarEstatus = (index) => {
    setSolicitudesFiltradas((prevSolicitudes) => {
      const nuevasSolicitudes = [...prevSolicitudes];
      const estatusActual = nuevasSolicitudes[index].estatus;

      if (estatusActual === "Aprobada") {
        nuevasSolicitudes[index].estatus = "Pendiente";
      } else if (estatusActual === "Pendiente") {
        nuevasSolicitudes[index].estatus = "Rechazada";
      } else {
        nuevasSolicitudes[index].estatus = "Aprobada";
      }

      return nuevasSolicitudes;
    });
  };

  const handleShowModal = (solicitud) => {
    setSolicitudSeleccionada(solicitud);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Lista de Salidas</h2>
      <Row className="mb-4">
        <Col xs={12} md={6}>
          <Buscador
            valorInput={valorInput}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>TIPO DE SOLICITUD</th>
            <th>ESTATUS</th>
            <th>VALORAR</th>
            <th>DETALLES</th> {/* Nueva columna para los detalles */}
          </tr>
        </thead>
        <tbody>
          {solicitudesActuales.map((solicitud, index) => (
            <tr key={index}>
              <td>
                {solicitud.nombre}
                <br />
                <small>{solicitud.date}</small>
              </td>
              <td>{solicitud.tipo}</td>
              <td>{solicitud.estatus}</td>
              <td>
                <Button 
                  style={{ backgroundColor: '#FFC107', borderColor: '#FFC107' }} 
                  onClick={() => cambiarEstatus(index)}
                >
                  Valorar
                </Button>
              </td>
              <td>
                <Button 
                  style={{ backgroundColor: '#7F6DF2', borderColor: '#7F6DF2' }}
                  onClick={() => handleShowModal(solicitud)}
                >
                  Ver Detalles
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      {/* Modal para mostrar los detalles */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la Solicitud</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {solicitudSeleccionada && (
            <div>
              <p><strong>Nombre del Estudiante:</strong> {solicitudSeleccionada.nombre}</p>
              <p><strong>Fecha de Solicitud:</strong> {solicitudSeleccionada.date}</p>
              <p><strong>Tipo de Solicitud:</strong> {solicitudSeleccionada.tipo}</p>
              <p><strong>Estatus:</strong> {solicitudSeleccionada.estatus}</p>
              <p><strong>Descripción:</strong> {solicitudSeleccionada.descripcion}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex justify-content-center mt-4">
        <Button
          onClick={() => paginar(paginaActual - 1)}
          disabled={paginaActual === 1}
          variant="secondary"
          className="me-2"
        >
          Anterior
        </Button>
        <Button
          onClick={() => paginar(paginaActual + 1)}
          disabled={paginaActual === Math.ceil(solicitudesFiltradas.length / solicitudesPorPagina)}
          variant="secondary"
        >
          Siguiente
        </Button>
      </div>
    </Container>
  );
};

export default Salidas;
