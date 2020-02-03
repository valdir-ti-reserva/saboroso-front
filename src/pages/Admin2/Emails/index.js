import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';
import TableEmails from '../components/TableEmails';

export default class Emails extends Component {
  render() {
    return (
      <Content
        title="Emails"
        subTitle="Projeto Saboroso"
        homeRoute="/admin2"
        // browserTitle="Admin Projeto Saboroso - React"
      >
        <Row>
          <Col xs={12}>
            <TableEmails title={'Listagem dos Emails'} />
          </Col>
        </Row>
      </Content>
    );
  }
}
