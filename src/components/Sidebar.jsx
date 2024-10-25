import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Offcanvas, Nav, Button } from 'react-bootstrap';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Estado para gestionar el hover

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar fixed at the top */}
      <BootstrapNavbar bg="light" expand={false} fixed="top" className="bg-body-tertiary w-100">
        <div className="container-fluid d-flex justify-content-between">
          {/* Button for the sidebar toggle - left side */}
          <Button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onMouseEnter={() => setIsHovered(true)}  // Detecta cuando el cursor está encima
            onMouseLeave={() => setIsHovered(false)} // Detecta cuando el cursor sale
            style={{
              backgroundColor: isHovered ? '#b0afae' : '#fff', // Cambia el fondo al pasar el cursor
              border: '#555',
              color: '#b0afae', // Color del texto e icono en blanco
            }}
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(20%)' }}></span>
          </Button>

          <div className="d-flex align-items-center" style={{ color: '#000' }}>
            <span className="me-2">Preceptor</span>
            <img
              src="/public/img/Perfil.jpg"
              alt="User Photo"
              className="navbar-user-photo rounded-circle"
              style={{ width: '40px', height: '40px' }} // Estilo opcional para la imagen
            />
          </div>

          {/* Offcanvas (sidebar) */}
          <Offcanvas
            show={isOpen}
            onHide={toggleSidebar}
            placement="start" // Sidebar aparece desde el lado izquierdo
            style={{ backgroundColor: '#7F6DF2' }}
          >
            <Offcanvas.Header closeButton style={{ color: '#FFFFFF' }}>
              <Offcanvas.Title>UniPaseULV</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" style={{ color: '#FFFFFF' }}>
                <Nav.Item>
                  <Link to="/home" className="nav-link">Inicio</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/salidas" className="nav-link">Salidas</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/documentos" className="nav-link">Documentos</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/RequestList" className="nav-link">Solicitudes</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/acerca" className="nav-link">Acerca</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="#" className="nav-link">Salir</Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </BootstrapNavbar>

      {/* Asegura que el contenido no se oculte detrás del Navbar */}
      <div style={{ marginTop: '56px' }}></div>
    </>
  );
};

export default SideNavbar;
