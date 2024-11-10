import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Offcanvas, Nav, Button } from 'react-bootstrap';
import { FaHome, FaSignOutAlt, FaFileAlt, FaInfoCircle, FaListAlt } from 'react-icons/fa';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: isHovered ? '#b0afae' : '#fff',
              border: '#555',
              color: '#b0afae',
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
              style={{ width: '40px', height: '40px' }}
            />
          </div>

          {/* Offcanvas (sidebar) */}
          <Offcanvas
            show={isOpen}
            onHide={toggleSidebar}
            placement="start"
            style={{ backgroundColor: '#7F6DF2' }}
          >
            <Offcanvas.Header closeButton style={{ color: '#FFFFFF' }}>
              <Offcanvas.Title>UniPaseULV</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" style={{ color: '#FFFFFF' }}>
                <Nav.Item>
                  <Link to="/home" className="nav-link d-flex align-items-center">
                    <FaHome className="me-2" /> Inicio
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/salidas" className="nav-link d-flex align-items-center">
                    <FaListAlt className="me-2" /> Salidas
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/documentos" className="nav-link d-flex align-items-center">
                    <FaFileAlt className="me-2" /> Documentos
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/RequestList" className="nav-link d-flex align-items-center">
                    <FaListAlt className="me-2" /> Solicitudes
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/acerca" className="nav-link d-flex align-items-center">
                    <FaInfoCircle className="me-2" /> Acerca
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <FaSignOutAlt className="me-2" /> Salir
                  </Link>
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
