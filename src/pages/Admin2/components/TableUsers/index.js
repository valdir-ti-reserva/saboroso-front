import React, { Component } from 'react';
import { Table } from './styles';
import { FaTrash, FaPlus, FaPen } from 'react-icons/fa';

export default class TableUsers extends Component {
  state = {};
  render() {
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
              <tr>
                <td>1</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>
                  <button className="btn-editar btn-warning">
                    <FaPen />
                  </button>
                  <button className="btn-excluir btn-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Table>
      </>
    );
  }
}
