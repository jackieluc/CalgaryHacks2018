import React from "react";
import { Row, Col } from 'react-bootstrap';
import Status from "../components/Status.jsx";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    document.title = "Home Dashboard";
  }

  render() {
    return (
      <main>
        <Row style={{ height: '100vh', width: '100%', overflow: 'hidden', }}>
          <Col xs={12} sm={9} style={{ backgroundColor: 'aqua', height: '100%', }}>
            <div>Dashboard here</div>
          </Col>
          <Col xs={12} sm={3} style={{ backgroundColor: 'green', height: '100%', }}>
            <div><Status/></div>
          </Col>
        </Row>
      </main>
    );
  }
}

export default IndexPage;