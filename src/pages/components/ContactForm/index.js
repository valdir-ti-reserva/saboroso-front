import React from 'react';

export default function ContactForm() {
  return (
    <>
      <h3>Entre em Contato</h3>

      <form action="#">
        <div classNameName="row form-group">
          <div classNameName="col-md-12">
            <label className="sr-only" for="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Seu nome"
            />
          </div>
        </div>

        <div className="row form-group">
          <div className="col-md-12">
            <label className="sr-only" for="email">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Seu endereço de e-mail"
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-12">
            <label className="sr-only" for="message">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="form-control"
              placeholder="Escreve alguma coisa"
            ></textarea>
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Enviar" className="btn btn-primary" />
        </div>
      </form>
    </>
  );
}
