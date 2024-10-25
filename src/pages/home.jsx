import RequestList from '../components/RequestList';
import { Container, Row, Col } from 'react-bootstrap';
import Calendar from '../components/Calendar';
import NotiAvisos from '../components/Avisos';

const Home = () => {
  return (
    <Container fluid>
      <Row>
      
        <Col xs={12} md={8}> {/* xs=12 en pantallas pequeñas, md=8 en pantallas medianas o más grandes */}
          <div className="home-section mb-4">
            <RequestList />
          </div>
        </Col>

        <Col xs={12} md={4}> {/* xs=12 en pantallas pequeñas, md=4 en pantallas medianas o más grandes */}
          <div className="home-section mb-4">
            <h3>Calendario</h3>
            <Calendar />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={5}>
          <div className="home-section mb-4">
            <NotiAvisos />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
