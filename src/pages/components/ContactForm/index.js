import React from 'react';

export default function ContactForm() {
  return (
    <>
      <h3>Entre em Contato</h3>

      <form action="#">
        <div class="row form-group">
          <div class="col-md-12">
            <label class="sr-only" for="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="Seu nome"
            />
          </div>
        </div>

        <div class="row form-group">
          <div class="col-md-12">
            <label class="sr-only" for="email">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              class="form-control"
              placeholder="Seu endereço de e-mail"
            />
          </div>
        </div>
        <div class="row form-group">
          <div class="col-md-12">
            <label class="sr-only" for="message">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              class="form-control"
              placeholder="Escreve alguma coisa"
            ></textarea>
          </div>
        </div>
        <div class="form-group">
          <input type="submit" value="Enviar" class="btn btn-primary" />
        </div>
      </form>
    </>
  );
}
