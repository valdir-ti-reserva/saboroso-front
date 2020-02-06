import React from 'react';
import {
  Popover,
  Button,
  Tooltip,
  Modal,
  OverlayTrigger,
} from 'react-bootstrap';

export default class modalAddUsers extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Adicionar usuário
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          style={{ opacity: 1, paddingTop: '20vh' }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
