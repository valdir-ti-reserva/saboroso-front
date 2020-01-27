import React from 'react';

export default function SubscribeForm() {
  return (
    <>
      <form class="form-inline">
        <div class="col-md-6 col-sm-6">
          <div class="form-group">
            <label for="email" class="sr-only">
              E-mail
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Seu E-mail"
            />
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <button type="submit" class="btn btn-default btn-block">
            Inscrever
          </button>
        </div>
      </form>
    </>
  );
}
