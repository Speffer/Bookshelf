import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import './index.css'

const data = [
  {
    id: 1,
    timestamp: '2020-02-12',
    title: 'O Mundo Assombrado pelos Demônios',
    description: 'auhsduiasdhuaisdhasuidhaisudhaiusdhiaussadasdasd', 
    author: 'Carl Sagan',
    category: 1,
    link: "https://static.mercadoshops.com/livro-mundo-assombrado-pelos-demonios-carl-sagan_iZ1024641864XvZxXpZ1XfZ68247532-1135427782-1.jpgXsZ68247532xIM.jpg",
    deleted: false
  },
  {
    id: 2,
    timestamp: '2020-02-12',
    title: 'Some title',
    description: 'auhsduiasdhuaisdhasuidhaisudhaiusdhiaussadasdasd', 
    author: 'Carl Sagan',
    category: 1,
    link: "https://static.mercadoshops.com/livro-mundo-assombrado-pelos-demonios-carl-sagan_iZ1024641864XvZxXpZ1XfZ68247532-1135427782-1.jpgXsZ68247532xIM.jpg",
    deleted: false
  },
  {
    id: 3,
    timestamp: '2020-02-12',
    title: 'Some title',
    description: 'auhsduiasdhuaisdhasuidhaisudhaiusdhiaussadasdasd', 
    author: 'Carl Sagan',
    category: 1,
    link: "https://static.mercadoshops.com/livro-mundo-assombrado-pelos-demonios-carl-sagan_iZ1024641864XvZxXpZ1XfZ68247532-1135427782-1.jpgXsZ68247532xIM.jpg",
    deleted: false
  },
  {
    id: 4,
    timestamp: '2020-02-12',
    title: 'Some title',
    description: 'auhsduiasdhuaisdhasuidhaisudhaiusdhiaussadasdasd', 
    author: 'Carl Sagan',
    category: 1,
    link: "https://static.mercadoshops.com/livro-mundo-assombrado-pelos-demonios-carl-sagan_iZ1024641864XvZxXpZ1XfZ68247532-1135427782-1.jpgXsZ68247532xIM.jpg",
    deleted: false
  },
  {
    id: 5,
    timestamp: '2020-02-12',
    title: 'Some title',
    description: 'auhsduiasdhuaisdhasuidhaisudhaiusdhiaussadasdasd', 
    author: 'Carl Sagan',
    category: 1,
    link: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    deleted: false
  },
  {
    id: 6,
    timestamp: '2020-02-12',
    title: 'Some title',
    description: 'auhsduiasdhuaisdhasuidhaisudhaiusdhiaussadasdasd', 
    author: 'Carl Sagan',
    category: 1,
    link: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    deleted: false
  },
  {
    id: 7,
    timestamp: '2020-02-12',
    title: 'Some title',
    description: 'auhsduiasdhuaisdhasuidhaisudhaiusdhiaussadasdasd', 
    author: 'Carl Sagan',
    category: 1,
    link: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    deleted: false
  },
  {
    id: 8,
    timestamp: '2020-02-12',
    title: 'Some title',
    description: 'auhsduiasdhuaisdhasuidhaisudhaiusdhiaussadasdasd', 
    author: 'Carl Sagan',
    category: 1,
    link: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    deleted: false
  },
  {
    id: 9,
    timestamp: '2020-02-12',
    title: 'Some title',
    description: 'auhsduiasdhuaisdhasuidhaisudhaiusdhiaussadasdasd', 
    author: 'Carl Sagan',
    category: 1,
    link: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    deleted: false
  },
  
];

const CardList = ({ title }) => {
  const renderCard = () => {
    return data.map(({deleted, link, title, author, id}) => {
      if(!deleted) {
        return (
          <Col xs={24} sm={24} md={6} lg={6} xl={4}>
            <Card
              className="card-body"
              cover={<img className="card-image" alt="book" src={link} />}
            >
              <Link to={`/book/${id}`}>
                <h3>{ title }</h3>
                <p style={{ color: '#172645' }}>{ author }</p>
              </Link>
            </Card>
          </Col>
        );
      }
    });
  };

  return (
    <Row style={{ marginTop: 40 }}>
      <Col span={24}>
        <Card title={ title }>
          <Row className="card-scroll" gutter={[12, 24]}>
            { renderCard() }
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default CardList;