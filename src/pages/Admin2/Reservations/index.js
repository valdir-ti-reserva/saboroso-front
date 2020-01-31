import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';

export default class Reservations extends Component {
  render() {
    return (
      <Content
        title="Reservas"
        subTitle="Projeto Saboroso"
        browserTitle="Admin Projeto Saboroso - React"
      >
        <Row>
          <Col xs={6}>
            <h2>Component Reservations</h2>
          </Col>
        </Row>
      </Content>
    );
  }
}
