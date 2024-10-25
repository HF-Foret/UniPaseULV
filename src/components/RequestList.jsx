import { useState } from 'react';
import { Table, Button, Modal, Container } from 'react-bootstrap';
import { solicitudes } from '../utils/solicitudesData';

const Principal = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const solicitudesPorPagina = 5;

  const indiceUltimoSolicitud = paginaActual * solicitudesPorPagina;
  const indicePrimerSolicitud = indiceUltimoSolicitud - solicitudesPorPagina;
  const solicitudesActuales = solicitudes.slice(indicePrimerSolicitud, indiceUltimoSolicitud);

  const paginar = (numeroPagina) => setPaginaActual(numeroPagina);

  // Estado para el modal de detalles
  const [show, setShow] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleShowDetails = (request) => {
    setSelectedRequest(request);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container className="p-4">
      <h2 className="text-center mb-4">Lista de Salidas</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>TIPO DE SOLICITUD</th>
            <th>ESTATUS</th>
            <th>DETALLES</th>
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
          disabled={paginaActual === Math.ceil(solicitudes.length / solicitudesPorPagina)}
          variant="secondary"
        >
          Siguiente
        </Button>
      </div>

      {/* Modal para mostrar los detalles */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de Salida</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRequest && (
            <>
              <p><strong>ID:</strong> {selectedRequest.id}</p>
              <p><strong>Nombre de estudiante:</strong> {selectedRequest.nombre}</p>
              <p><strong>Correo:</strong> {selectedRequest.email}</p>
              <p><strong>Tipo de solicitud:</strong> {selectedRequest.tipo}</p>
              <p><strong>Estatus:</strong> {selectedRequest.estatus}</p>
              <p><strong>Fecha de salida:</strong> {selectedRequest.date}</p>
              <p><strong>Destino:</strong> {selectedRequest.destination}</p>
              <p><strong>Descripción:</strong> {selectedRequest.description}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Principal;
