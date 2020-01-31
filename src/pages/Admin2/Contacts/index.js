import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';

export default class Contacts extends Component {
  render() {
    return (
      <Content
        title="Contatos"
        subTitle="Projeto Saboroso"
        homeRoute="/admin2"
        // browserTitle="Admin Projeto Saboroso - React"
      >
        <Row>
          <Col xs={6}>
            <h2>Component Contacts</h2>
          </Col>
        </Row>
      </Content>
    );
  }
}
