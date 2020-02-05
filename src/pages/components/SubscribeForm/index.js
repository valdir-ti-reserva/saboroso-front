import React, { Component } from 'react';
import api from '../../../services/api';
import { Form } from './styles';

export default class SubscribeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email } = this.state;
    api
      .post('emails', {
        email,
      })
      .then(res => {
        console.log(res.status);
        if (res.status === 201) {
          setTimeout(
            function() {
              this.setState({ email: '' });
            }.bind(this),
            1000
          );
        }
      });
  };

  render() {
    return (
      <>
        <Form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                autoComplete="off"
                id="email"
                placeholder="Seu E-mail"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <button type="submit" className="btn btn-default btn-block">
              Inscrever
            </button>
          </div>
        </Form>
      </>
    );
  }
}
