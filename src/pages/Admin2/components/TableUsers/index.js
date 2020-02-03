import React, { Component } from 'react';
import { Table } from './styles';
import { FaTrash, FaPlus, FaPen } from 'react-icons/fa';
import api from '../../../../services/api';

export default class TableUsers extends Component {
  state = {
    clients: [],
  };

  async componentDidMount() {
    const response = await api.get('clients');

    this.setState({ clients: response.data });
  }

  render() {
    const { clients } = this.state;

    return (
      <>
        <Table className="table-responsive">
          <div className="topo-table">
            <h2>Listagem de usuários</h2>
            <button className="btn-adicionar">
              <FaPlus />
            </button>
          </div>

          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Profissão</th>
                <th width={200}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.nome}</td>
                  <td>{client.sobrenome}</td>
                  <td>
                    <button className="btn-editar btn-warning">
                      <FaPen />
                    </button>
                    <button className="btn-excluir btn-danger">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Table>
      </>
    );
  }
}
