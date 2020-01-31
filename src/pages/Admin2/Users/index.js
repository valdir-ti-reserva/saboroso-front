import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';
import TableUsers from '../components/TableUsers';

export default class Users extends Component {
  state = {};

  render() {
    return (
      <Content
        title="Usuários"
        subTitle="Projeto Saboroso"
        homeRoute="/admin2"
        // browserTitle="Projeto Saboroso React"
      >
        <Row>
          <Col xs={12}>
            <TableUsers />
          </Col>
        </Row>
      </Content>
    );
  }
}
