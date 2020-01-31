import React from 'react';
import { MDBListGroup } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import { faCogs, faUsers } from '@fortawesome/free-solid-svg-icons';

import ItemNavBar from './ItemNavBar';

const SideNavBar = () => {
  return (
    <div className="sidebar-fixed position-fixed">
      <MDBListGroup className="list-group-flush pt-4">
        <ItemNavBar
          path="/admin/configuracoes"
          icon={faCogs}
          name="Configurações"
        />
        <ItemNavBar path="/admin/welcome2" icon={faUsers} name="Usuários" />
      </MDBListGroup>
    </div>
  );
};

export default withRouter(SideNavBar);
