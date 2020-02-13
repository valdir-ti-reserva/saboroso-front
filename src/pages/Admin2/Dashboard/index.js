import React, { Component } from 'react';
import { Content, Row, Col, Box, Button } from 'adminlte-2-react';
import { Chart } from 'react-google-charts';

export default class Dashboard extends Component {
  state = {};

  render() {
    return (
      <Content
        title="Dashboard"
        subTitle="Projeto Saboroso"
        browserTitle="Admin Projeto Saboroso - React"
        homeRoute="/admin2"
      >
        <Row>
          <Col xs={12}>
            <Chart
              chartType="ScatterChart"
              rows={[
                [8, 12],
                [4, 5.5],
                [11, 14],
                [4, 5],
                [3, 3.5],
                [6.5, 7],
              ]}
              columns={[
                {
                  type: 'number',
                  label: 'Idade',
                },
                {
                  type: 'number',
                  label: 'Peso',
                },
              ]}
              options={
                // Chart options
                {
                  title: 'Comparação Idade vs. Peso',
                  hAxis: {
                    title: 'Idade',
                    viewWindow: { min: 0, max: 15 },
                  },
                  vAxis: { title: 'Peso', viewWindow: { min: 0, max: 15 } },
                  legend: 'none',
                }
              }
              width={'100%'}
              height={'400px'}
              legendToggle
            />
            {/* <Box
              title="My first box"
              type="primary"
              closable
              collapsable
              footer={<Button type="danger" text="Danger Button" />}
            >
              Projeto Saboroso
            </Box> */}
          </Col>
          <Col xs={12}>
            <Box title="Another box">Content goes here</Box>
          </Col>
        </Row>
      </Content>
    );
  }
}
