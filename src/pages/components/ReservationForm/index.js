import React from 'react';

export default function ReservationForm() {
  return (
    <>
      <form action="#">
        <div className="row form-group">
          <div className="col-md-12">
            <label htmlFor="inputName">Nome</label>
            <input
              type="text"
              id="inputName"
              name="name"
              className="form-control"
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
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-12">
            <label htmlFor="inputPeople">Pessoas</label>
            <select id="inputPeople" name="people" className="form-control">
              <option value=""> -- selecione -- </option>
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
      </form>
    </>
  );
}
