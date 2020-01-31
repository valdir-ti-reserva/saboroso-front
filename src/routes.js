import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Menus from './pages/Menus';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import Reservations from './pages/Reservations';
import MainAdmin from './pages/Admin2/Main';
import AdminMBD from './pages/Admin/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/menus" component={Menus} />
        <Route path="/services" component={Services} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/reservations" component={Reservations} />
        <Route path="/admin2" component={MainAdmin} />
        <Route path="/admin" component={AdminMBD} />
      </Switch>
    </BrowserRouter>
  );
}
