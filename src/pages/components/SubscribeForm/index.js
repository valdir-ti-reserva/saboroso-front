import React from 'react';

export default function SubscribeForm() {
  return (
    <>
      <form className="form-inline">
        <div className="col-md-6 col-sm-6">
          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Seu E-mail"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <button type="submit" className="btn btn-default btn-block">
            Inscrever
          </button>
        </div>
      </form>
    </>
  );
}
