import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BtnAdd } from './styles';
import { FaPlus } from 'react-icons/fa';
import FormAddUser from '../Form/formAddUser';

export default class modalAddUsers extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose = e => {
    console.log(e);
    this.setState({ show: false });
  };

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <BtnAdd>
          <Button
            className="btn-adicionar"
            // bsStyle="primary"
            // bsSize="large"
            onClick={this.handleShow}
          >
            <FaPlus />
          </Button>
        </BtnAdd>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          style={{ opacity: 1, paddingTop: '20vh' }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormAddUser />
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="primary" onClick={this.handleClose}>
              Salvar
            </Button> */}
            {/* <Button onClick={this.handleSave}>Salvar</Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
