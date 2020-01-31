import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';

export default class Emails extends Component {
  render() {
    return (
      <Content
        title="Emails"
        subTitle="Projeto Saboroso"
        browserTitle="Admin Projeto Saboroso - React"
      >
        <Row>
          <Col xs={6}>
            <h2>Component Emails</h2>
          </Col>
        </Row>
      </Content>
    );
  }
}
