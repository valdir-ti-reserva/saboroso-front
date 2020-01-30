import React, { Component } from 'react';
import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
} from 'adminlte-2-react';

import Users from '../Users';

const { Item } = Sidebar;

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <Content
        title="Hello World"
        subTitle="Getting started with adminlte-2-react"
        browserTitle="Hello World"
      >
        <Row>
          <Col xs={6}>
            <Box
              title="My first box"
              type="primary"
              closable
              collapsable
              footer={<Button type="danger" text="Danger Button" />}
            >
              Hello World
            </Box>
          </Col>
          <Col xs={6}>
            <Box title="Another box">Content goes here</Box>
          </Col>
        </Row>
      </Content>
    );
  }
}

class App extends Component {
  sidebar = [
    <Item key="hello" text="Hello" to="/admin" />,
    <Item key="users" text="Users" to="/admin/users" />,
  ];

  render() {
    return (
      <AdminLTE
        title={['Projeto', 'Saboroso']}
        titleShort={['PJ', 'sb']}
        theme="purple"
        sidebar={this.sidebar}
      >
        <Dashboard path="/admin" />
        <Users path="/admin/users" />
      </AdminLTE>
    );
  }
}

export default App;
