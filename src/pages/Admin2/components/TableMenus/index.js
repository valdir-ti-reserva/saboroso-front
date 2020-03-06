import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MenuActions from '~/store/modules/menu/actions';
import { confirmAlert } from 'react-confirm-alert';
import ModalMenu from './Modal/modalMenu';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Table } from '~/styles/tables';
import { FaTrash, FaPen } from 'react-icons/fa';
import api from '~/services/api';

class TableMenus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      render: false,
    };
  }

  componentDidUpdate() {
    if (this.props.menuT.length > this.state.items.length) {
      this.setState({ items: this.props.menuT });
    }
  }

  async componentDidMount() {
    const { listMenu } = this.props;
    const response = await api.get('menus');

    listMenu(response.data);
    setTimeout(
      function() {
        this.setState({ items: this.props.menuT, render: true });
      }.bind(this),
      100
    );
  }

  async delete(id) {
    const { removeMenu } = this.props;

    const response = await api.delete('menus/' + id);

    if (response.statusText === 'OK') {
      // const items = this.state.items.filter(item => item.id !== id);
      setTimeout(
        function() {
          removeMenu(id);

          this.setState({ items: this.props.menuT, render: true });
        }.bind(this),
        750
      );
    }
  }

  handleDelete(id, e) {
    e.preventDefault();

    confirmAlert({
      title: 'Excluir menu',
      message: 'Você tem certeza que deseja excluir?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => this.delete(id),
        },
        {
          label: 'Não',
          onClick: () => console.log('Não excluir!'),
        },
      ],
    });
  }

  render() {
    const { items } = this.state;

    console.log('State: ', this.state);

    return (
      <>
        <ModalMenu />
        <Table className="table-responsive">
          <div className="topo-table">
            <h2>{this.props.title}</h2>
          </div>

          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th width={25}>#</th>
                <th>TÍTULO</th>
                <th>DESCRIÇÃO</th>
                <th>PREÇO</th>
                <th>IMAGEM</th>
                <th width={200}>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <img src={item.photo} alt={item.title} width={60} />
                  </td>
                  <td>
                    <button className="btn-editar btn-warning">
                      <FaPen />
                    </button>
                    <button
                      className="btn-excluir btn-danger"
                      onClick={this.handleDelete.bind(this, item.id)}
                    >
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

const mapStateToProps = state => ({
  menuT: state.menu,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MenuActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableMenus);
