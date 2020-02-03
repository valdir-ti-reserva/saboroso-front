import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';
import TableReservations from '../components/TableReservations';

export default class Reservations extends Component {
  render() {
    return (
      <Content
        title="Reservas"
        subTitle="Projeto Saboroso"
        homeRoute="/admin2"
        // browserTitle="Admin Projeto Saboroso - React"
      >
        <Row>
          <Col xs={12}>
            <TableReservations title={'Listagem das Reservas'} />
          </Col>
        </Row>
      </Content>
    );
  }
}
