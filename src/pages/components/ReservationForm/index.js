import React, { Component } from 'react';
import api from '../../../services/api';
import { Form } from './styles';

export default class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      people: '',
      date: '',
      time: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePeopleChange = event => {
    this.setState({ people: event.target.value });
  };

  handleDateChange = event => {
    this.setState({ date: event.target.value });
  };

  handleTimeChange = event => {
    this.setState({ time: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, email, people, date, time } = this.state;

    api
      .post('reservations', {
        name,
        email,
        people,
        date,
        time,
      })
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          setTimeout(
            function() {
              this.setState({
                name: '',
                email: '',
                people: '',
                date: '',
                time: '',
              });
            }.bind(this),
            1000
          );
        }
      });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="inputName">Nome</label>
              <input
                type="text"
                id="inputName"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.handleNameChange}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="inputEmail">E-mail</label>
              <input
                type="email"
                id="inputEmail"
                name="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleEmailChange}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="inputPeople">Pessoas</label>
              <select
                id="inputPeople"
                name="people"
                className="form-control"
                value={this.state.people}
                onChange={this.handlePeopleChange}
                required
              >
                <option value=""> -- Selecione -- </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="inputDate">Data</label>
              <input
                type="text"
                id="inputDate"
                name="date"
                className="form-control"
                value={this.state.date}
                onChange={this.handleDateChange}
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="inputTime">Hora</label>
              <input
                type="text"
                id="inputTime"
                name="time"
                className="form-control"
                value={this.state.time}
                onChange={this.handleTimeChange}
                required
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="Reservar Agora"
              />
            </div>
          </div>
        </Form>
      </>
    );
  }
}
