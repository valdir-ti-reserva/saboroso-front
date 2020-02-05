import React, { Component } from 'react';
import api from '../../../services/api';
import { Form } from './styles';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handleMsgChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;

    api
      .post('contacts', {
        name,
        email,
        message,
      })
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          setTimeout(
            function() {
              this.setState({ name: '', email: '', message: '' });
            }.bind(this),
            1000
          );
        }
      });
  };

  render() {
    return (
      <>
        <h3>Entre em Contato</h3>

        <Form onSubmit={this.handleSubmit}>
          <div className="row form-group">
            <div className="col-md-12">
              <label className="sr-only" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Seu nome"
                name="name"
                value={this.state.name}
                onChange={this.handleNameChange}
                required
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="sr-only" htmlFor="email">
                E-mail
              </label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Seu endereço de e-mail"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label className="sr-only" htmlFor="message">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="form-control"
                placeholder="Escreve alguma coisa"
                value={this.state.message}
                onChange={this.handleMsgChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Enviar" className="btn btn-primary" />
          </div>
        </Form>
      </>
    );
  }
}
