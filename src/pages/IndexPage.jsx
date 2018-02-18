import React from "react";
import { Row, Col } from 'react-bootstrap';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'Home Dashboard';
  }

  render() {
    return (
      <main>
        <Row style={{ height: '100vh', width: '100%', }}>
          <Col xsHidden sm={2} style={{ backgroundColor: '#193441', height: '100%', }}>
            <div>Navbar here</div>
          </Col>
          <Col xs={12} sm={7} style={{ backgroundColor: '#FCFFF5', height: '100%', }}>
            <div>Dashboard here</div>
          </Col>
          <Col xs={12} sm={3} style={{ backgroundColor: '#FCFFF5', height: '100%', }}>
            <div>Status info boxes here</div>
          </Col>
        </Row>
      </main>
    );
  }
}

export default IndexPage;