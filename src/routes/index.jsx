import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Acerca from '../pages/acerca';
import Documentos from '../pages/documentos';
import Salidas from '../pages/salidas';
//import Navbar from '../components/Navbar';
import RequestList from '../components/RequestList';
import Sidebar from '../components/Sidebar';
//import Sidebar from '../components/Sidebar';

const AppRoutes = () => {
  return (
    <Router>
      <div className="app-container d-flex">
        {/* Sidebar occupies 25% of the width */}
        <div className="main-content flex-grow-1">
          <Sidebar/>
          <div className="content-container">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/requestlist" element={<RequestList />} />
              <Route path="/acerca" element={<Acerca />} />
              <Route path="/documentos" element={<Documentos />} />
              <Route path="/salidas" element={<Salidas />} />
              {/* Add more routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
