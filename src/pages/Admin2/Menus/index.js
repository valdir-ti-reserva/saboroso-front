import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';

export default class Menus extends Component {
  render() {
    return (
      <Content
        title="Menus"
        subTitle="Projeto Saboroso"
        homeRoute="/admin2"
        // browserTitle="Admin Projeto Saboroso - React"
      >
        <Row>
          <Col xs={6}>
            <h2>Component Menus</h2>
          </Col>
        </Row>
      </Content>
    );
  }
}
