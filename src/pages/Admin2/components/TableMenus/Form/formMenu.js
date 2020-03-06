import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MenuActions from '~/store/modules/menu/actions';
import { Form, Button } from 'react-bootstrap';
import api from '~/services/api';
import { BtnAdd } from './styles';

class FormMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      price: '',
      photo: '',
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangePhoto = this.handleChangePhoto.bind(this);
  }

  handleChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  handleChangePrice = e => {
    this.setState({ price: e.target.value });
  };

  handleChangePhoto = e => {
    this.setState({ photo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addMenu } = this.props;
    const { title, description, price, photo } = this.state;

    api
      .post('menus', {
        title,
        description,
        price,
        photo,
      })
      .then(res => {
        if (res.status === 201) {
          setTimeout(function() {
            addMenu(res.data);
          }, 500);

          this.props.close();
        }
      });
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Título</Form.Label>
            <Form.Control
              name="title"
              type="text"
              autoComplete="off"
              placeholder="Nome do Menu"
              onChange={this.handleChangeTitle}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              name="description"
              type="text"
              autoComplete="off"
              placeholder="Descrição do Menu"
              onChange={this.handleChangeDescription}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              autoComplete="off"
              placeholder="Preço do Produto"
              onChange={this.handleChangePrice}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Imagem</Form.Label>
            <Form.Control
              type="file"
              autoComplete="off"
              onChange={this.handleChangePhoto}
            />
          </Form.Group>
          <BtnAdd>
            <Form.Group className="btn-add">
              <Button type="submit" onClick={this.handleSubmit}>
                Salvar
              </Button>
            </Form.Group>
          </BtnAdd>
        </Form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.menu,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MenuActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(FormAddUser);
export default connect(mapStateToProps, mapDispatchToProps)(FormMenu);
