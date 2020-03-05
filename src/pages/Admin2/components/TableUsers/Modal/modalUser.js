import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BtnAdd } from './styles';
import { FaPlus } from 'react-icons/fa';
import FormUser from '../Form/formUser';
// import FormAddUser from '../Form/formAddUser';
import { connect } from 'react-redux';

class modalAddUsers extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose = e => {
    this.setState({ show: false });
  };

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <BtnAdd>
          <Button className="btn-adicionar" onClick={this.handleShow}>
            <FaPlus />
          </Button>
        </BtnAdd>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          style={{ opacity: 1, paddingTop: '12%' }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormUser close={this.handleClose} />
            {/* <FormAddUser close={this.handleClose} /> */}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default connect()(modalAddUsers);
