import React, { Component } from 'react';
import { Content, Row, Col, SimpleTable } from 'adminlte-2-react';

export default class Users extends Component {
  state = {};
  dados = [
    { id: '1', name: 'Valdir' },
    { id: '2', name: 'Julia' },
    { id: '3', name: 'Lila' },
  ];
  columns = ['id', 'name'];
  columnOptions = [{ title: 'teste' }];

  render() {
    return (
      <Content
        title="Usuários"
        subTitle="Projeto Saboroso"
        // browserTitle="Projeto Saboroso React"
      >
        <Row>
          <Col xs={12}>
            <SimpleTable
              data={this.dados}
              columns={this.columns}
              border
              responsive
              hover
              ColumnOptions={this.ColumnOptions}
            />
          </Col>
        </Row>
      </Content>
    );
  }
}
