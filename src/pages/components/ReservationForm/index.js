import React from 'react';

export default function ReservationForm() {
  return (
    <>
      <form action="#">
        <div class="row form-group">
          <div class="col-md-12">
            <label for="inputName">Nome</label>
            <input
              type="text"
              id="inputName"
              name="name"
              class="form-control"
            />
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-12">
            <label for="inputEmail">E-mail</label>
            <input
              type="email"
              id="inputEmail"
              name="email"
              class="form-control"
            />
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-12">
            <label for="inputPeople">Pessoas</label>
            <select id="inputPeople" name="people" class="form-control">
              <option value=""> -- selecione -- </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-12">
            <label for="inputDate">Data</label>
            <input
              type="text"
              id="inputDate"
              name="date"
              class="form-control"
            />
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-12">
            <label for="inputTime">Hora</label>
            <input
              type="text"
              id="inputTime"
              name="time"
              class="form-control"
            />
          </div>
        </div>

        <div class="row form-group">
          <div class="col-md-12">
            <input
              type="submit"
              class="btn btn-primary btn-block"
              value="Reservar Agora"
            />
          </div>
        </div>
      </form>
    </>
  );
}
