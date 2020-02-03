import React, { Component } from 'react';
// import { Table } from './styles';
import { Table } from '../../../../styles/tables';
import { FaTrash, FaPlus, FaPen } from 'react-icons/fa';
import api from '../../../../services/api';

export default class TableContacts extends Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    const response = await api.get('contacts');
    console.table(response.data);
    this.setState({ items: response.data });
  }

  render() {
    const { items } = this.state;

    return (
      <>
        <Table className="table-responsive">
          <div className="topo-table">
            <h2>{this.props.title}</h2>
            <button className="btn-adicionar">
              <FaPlus />
            </button>
          </div>

          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>NOME</th>
                <th>EMAIL</th>
                <th>MENSAGEM</th>
                <th width={200}>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
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
