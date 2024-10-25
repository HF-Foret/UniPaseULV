// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Offcanvas, Button } from 'react-bootstrap';
// import Sidebar from './Sidebar';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar d-flex justify-content-between align-items-center p-3"style={{ backgroundColor: '#7F6DF2' }}>
//       {/* Botón para abrir el Sidebar, reemplazando "Preceptor" */}
//       <div className="d-flex align-items-center">
//         <Button variant="secondary" onClick={toggleSidebar} style={{ backgroundColor: '#7F6DF2' }}>
//           UniPaseULV
//           <Sidebar/>
//         </Button>
//       </div>

//       <div className="d-flex align-items-center" style={{color: '#FFFFFF'}}>
//         <span className="me-2">Preceptor</span>
//         <img
//           src="/public/img/fotoPrece.jpeg"
//           alt="User Photo"
//           className="navbar-user-photo rounded-circle"
//           style={{ width: '40px', height: '40px' }} // Estilo opcional para la imagen
//         />
//       </div>

//       {/* Sidebar Offcanvas */}
//       <Offcanvas show={isOpen} onHide={toggleSidebar} placement="start">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>UniPaseULV</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <ul className="list-unstyled">
//             <li className="mb-2">
//               <Link to="/home">Inicio</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/salidas">Salidas</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/documentos">Documentos</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/RequestList">Solicitudes</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="/acerca">Acerca</Link>
//             </li>
//             <li className="mb-2">
//               <Link to="#">Salir</Link>
//             </li>
//           </ul>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </nav>
//   );
// };

// export default Navbar;
