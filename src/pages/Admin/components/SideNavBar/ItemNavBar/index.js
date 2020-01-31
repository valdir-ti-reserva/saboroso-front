import React from 'react';
import PropTypes from 'prop-types';
import { MDBListGroupItem } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import './itemNavBar.css';

const ItemNavBar = props => {
  return (
    <NavLink
      exact={true}
      to={props.path}
      className="my-1"
      activeClassName="activeClass"
    >
      <MDBListGroupItem>
        <FontAwesomeIcon icon={props.icon} className="mr-3" />
        {props.name}
      </MDBListGroupItem>
    </NavLink>
  );
};

ItemNavBar.propTypes = {
  icon: PropTypes.object,
  path: PropTypes.string,
  name: PropTypes.string,
};

export default ItemNavBar;
