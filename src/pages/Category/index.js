import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import CardList from '../../components/CardList';
import '../../index.css'


const Category = () => {
  return (
    <div>
      <Row justify="space-between">
        <Col xs={24} sm={24} md={16} lg={16}>
          <h2 className="site-title">
            Ordernar por: 
            <Button className="site-order-link site-title" type="link">Ordem Alfabética</Button> - 
            <Button className="site-order-link site-title" type="link">Data de Criação</Button>
          </h2>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8}>
          <Button type="primary" size="large">
            + Novo livro
          </Button>
        </Col>
      </Row>

      <CardList title={<h2 className="category-title">Sem Categoria</h2>}/>
    </div>
  );
};

export default Category;