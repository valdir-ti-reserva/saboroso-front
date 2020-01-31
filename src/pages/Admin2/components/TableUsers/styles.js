import styled from 'styled-components';

export const Table = styled.div`
  .topo-table {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h2 {
      color: #999;
      border-bottom: 1px solid #999;
      font-size: 22px;
      font-style: italic;
      width: 50%;
    }

    .btn-adicionar {
      border-radius: 50%;
      width: 35px;
      color: #fff;
      background: #7159c1;
      outline: none;
      height: 35px;
      border: none;
      margin-right: 2%;
      padding: 0;
      padding-top: 2px;
    }
  }

  .table {
    .btn-excluir {
      border-radius: 50%;
      width: 35px;
      color: #999;
      background: #fff;
      outline: none;
      height: 35px;
      border: 1px solid #999;
      margin-left: 5%;
      padding: 0;
      padding-top: 2px;
    }
    .btn-excluir:hover,
    .btn-excluir:active,
    .btn-excluir:focus {
      color: #fff;
      background-color: #7159c1 !important;
      border: none;
    }
    /* .btn-excluir:active {
      color: #fff;
      background-color: #7159c1 !important;
      border: none;
    } */
    .btn-editar {
      border-radius: 50%;
      width: 35px;
      color: #999;
      background: #fff;
      outline: none;
      height: 35px;
      border: 1px solid #999;
      margin-left: 5%;
      padding: 0;
      padding-top: 2px;
    }
    .btn-editar:hover,
    .btn-editar:active,
    .btn-editar:focus {
      color: #fff;
    }
  }
`;
