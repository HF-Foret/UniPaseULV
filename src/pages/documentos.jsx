import { useState } from 'react';
import { Table, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { solicitudes } from '../utils/solicitudesData';
import { Buscador } from '../components/Buscador';

const Documentos = () => {
  const [valorInput, setValorInput] = useState('');
  const [solicitudesFiltradas, setSolicitudesFiltradas] = useState(solicitudes);  // Estado para las solicitudes filtradas
  const [paginaActual, setPaginaActual] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [solicitudSeleccionada, setSolicitudSeleccionada] = useState(null);

  const solicitudesPorPagina = 14;

  const indiceUltimoSolicitud = paginaActual * solicitudesPorPagina;
  const indicePrimerSolicitud = indiceUltimoSolicitud - solicitudesPorPagina;
  const solicitudesActuales = solicitudesFiltradas.slice(indicePrimerSolicitud, indiceUltimoSolicitud);

  const onChange = (evento) => {
    setValorInput(evento.target.value);  // Actualizar el valor del input al escribir
  };

  const onSubmit = (evento) => {
    evento.preventDefault();  // Evitar el comportamiento por defecto del formulario
    // Filtrar solicitudes por nombre, tipo, estatus o documentos
    const resultadosFiltrados = solicitudes.filter((solicitud) => {
      const nombre = solicitud.nombre.toLowerCase();
      const tipo = solicitud.tipo.toLowerCase();
      const estatus = solicitud.estatus.toLowerCase();
      const date = solicitud.date.toLowerCase();
      const documentos = solicitud.documentos.toLowerCase();
      const busqueda = valorInput.toLowerCase();
      return (
        nombre.includes(busqueda) ||
        tipo.includes(busqueda) ||
        estatus.includes(busqueda) ||
        date.includes(busqueda) ||
        documentos.includes(busqueda)
      );
    });
    setSolicitudesFiltradas(resultadosFiltrados);  // Actualizar el estado con los resultados filtrados
    setPaginaActual(1);  // Reiniciar a la primera página
  };

  const paginar = (numeroPagina) => setPaginaActual(numeroPagina);

  const handleShowDetails = (solicitud) => {
    setSolicitudSeleccionada(solicitud);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSolicitudSeleccionada(null);
  };

  return (
    <Container className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-center mb-4">Documentos</h2>
      
      {/* Componente Buscador */}
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
            <th>DOCUMENTOS</th>
          </tr>
        </thead>
        <tbody>
          {solicitudesActuales.map((solicitud, index) => (
            <tr key={index}>
              <td>
                {solicitud.nombre}
                <br />
                <small>{solicitud.documentos}</small>
              </td>
              <td>{solicitud.tipo}</td>
              <td>{solicitud.estatus}</td>
              <td>
                <span
                  style={{
                    color: 'blue',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                  onClick={() => handleShowDetails(solicitud)}
                >
                  Ver Detalles
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Paginación */}
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

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la Solicitud</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {solicitudSeleccionada && (
            <div>
              <p><strong>Nombre:</strong> {solicitudSeleccionada.nombre}</p>
              <p><strong>Tipo de Solicitud:</strong> {solicitudSeleccionada.tipo}</p>
              <p><strong>Estatus:</strong> {solicitudSeleccionada.estatus}</p>
              <p><strong>Documentos:</strong> {solicitudSeleccionada.documentos}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Documentos;
