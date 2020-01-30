import React, { Component } from 'react';
import AdminLTE, { Sidebar } from 'adminlte-2-react';

import Dashboard from '../Dashboard';
import Users from '../Users';
import Emails from '../Emails';
import Menus from '../Menus';
import Contacts from '../Contacts';
import Reservations from '../Reservations';

const { Item } = Sidebar;

class App extends Component {
  sidebar = [
    <Item key="dashboard" text="Dashboard" to="/admin" icon="fa-chart-line" />,
    <Item key="users" text="Usuários" to="/admin/users" icon="fa-users" />,
    <Item
      key="contacts"
      text="Contatos"
      to="/admin/contacts"
      icon="fa-phone-volume"
    />,
    <Item key="emails" text="E-mails" to="/admin/emails" icon="fa-envelope" />,
    <Item key="menus" text="Menus" to="/admin/menus" icon="fa-book-open" />,
    <Item
      key="reservations"
      text="Reservas"
      to="/admin/reservations"
      icon="fa-calendar-alt"
    />,
  ];

  render() {
    return (
      <AdminLTE
        title={['Projeto', 'Saboroso']}
        titleShort={['PJ', 'sb']}
        theme="purple"
        sidebar={this.sidebar}
      >
        <Users path="/admin/users" />
        <Contacts path="/admin/contacts" />
        <Emails path="/admin/emails" />
        <Menus path="/admin/menus" />
        <Reservations path="/admin/reservations" />
        <Dashboard path="/admin" />
      </AdminLTE>
    );
  }
}

export default App;
