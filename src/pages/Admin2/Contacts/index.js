import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';
import TableContacts from '../components/TableContacts';

export default class Contacts extends Component {
  state = {};
  render() {
    return (
      <Content
        title="Contatos"
        subTitle="Projeto Saboroso"
        homeRoute="/admin2"
        // browserTitle="Admin Projeto Saboroso - React"
      >
        <Row>
          <Col xs={12}>
            <TableContacts title={'Listagem dos Contatos'} />
          </Col>
        </Row>
      </Content>
    );
  }
}
