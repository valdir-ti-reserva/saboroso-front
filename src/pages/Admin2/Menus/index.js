import React, { Component } from 'react';
import { Content, Row, Col } from 'adminlte-2-react';
import TableMenus from '../components/TableMenus';

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
          <Col xs={12}>
            <TableMenus title={'Listagem dos Menus'} />
          </Col>
        </Row>
      </Content>
    );
  }
}
