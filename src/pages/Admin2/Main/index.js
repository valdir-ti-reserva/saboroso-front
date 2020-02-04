import React, { Component } from 'react';
import AdminLTE, { Sidebar, Navbar, Footer } from 'adminlte-2-react';

// import Header from './styles';

import Dashboard from '../Dashboard';
import Users from '../Users';
import Emails from '../Emails';
import Menus from '../Menus';
import Contacts from '../Contacts';
import Reservations from '../Reservations';

const { Item, UserPanel } = Sidebar;
const { NotificationItem } = Navbar;

class App extends Component {
  state = {};

  sidebar = [
    <UserPanel
      username="Valdir Silva"
      imageUrl="https://img.icons8.com/plasticine/2x/user.png"
      status="Online"
      statusType="green"
    />,
    <Item key="dashboard" text="Dashboard" to="/admin2" icon="fa-chart-line" />,
    <Item key="users" text="Usuários" to="/admin2/users" icon="fa-users" />,
    <Item
      key="contacts"
      text="Contatos"
      to="/admin2/contacts"
      icon="fa-phone-volume"
    />,
    <Item key="emails" text="E-mails" to="/admin2/emails" icon="fa-envelope" />,
    <Item key="menus" text="Menus" to="/admin2/menus" icon="fa-book-open" />,
    <Item
      key="reservations"
      text="Reservas"
      to="/admin2/reservations"
      icon="fa-calendar-alt"
    />,
  ];
  navbar = [
    <NotificationItem
      icon="fa-chart-line"
      iconColor="red"
      text="Teste de notificação"
    />,
  ];

  render() {
    return (
      <AdminLTE
        title={['Projeto', 'Saboroso']}
        titleShort={['PS', 'ab']}
        theme="purple"
        sidebar={this.sidebar}
        navbar={this.navbar}
      >
        <Users path="/admin2/users" />
        <Contacts path="/admin2/contacts" />
        <Emails path="/admin2/emails" />
        <Menus path="/admin2/menus" />
        <Reservations path="/admin2/reservations" />
        <Dashboard path="/admin2" />

        <Footer children="Teste" includeVersionInfo={true} />
      </AdminLTE>
    );
  }
}

export default App;
