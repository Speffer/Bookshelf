import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import CardList from '../../components/CardList';
import '../../index.css'


const Home = () => {
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

      <CardList title={<Link to="/category/0"><h2 className="category-title">Sem Categoria</h2></Link> }/>

      <CardList title={<Link to="/category/1"><h2 className="category-title">Quero Ler</h2></Link> } />

      <CardList title={<Link to="/category/2"><h2 className="category-title">Já Lidos</h2></Link> } />

      <CardList title={<Link to="/category/3"><h2 className="category-title">Estou Lendo</h2></Link> } />
    </div>
  );
};

export default Home;