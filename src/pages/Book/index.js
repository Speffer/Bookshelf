import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, Typography, Comment, Avatar, Input } from 'antd';
import moment from 'moment';
import '../../index.css'

const { Paragraph, Text } = Typography;
const { TextArea } = Input;


const Book = () => {
  const [book, setBook] = useState({});

  const actions = [
    <Button size="small" type="primary">Editar</Button>,
    <Button className="btn-default" size="small">Excluir</Button>,
  ];

  useEffect(() => {
    setBook({
      id: 1,
      timestamp: '2020-02-12',
      title: 'O Mundo Assombrado pelos Demônios',
      description: 'auhsduiasdhuaisdhasuidhaisudhaiusdhiaussadasdasd', 
      author: 'Carl Sagan',
      category: 1,
      link: "https://static.mercadoshops.com/livro-mundo-assombrado-pelos-demonios-carl-sagan_iZ1024641864XvZxXpZ1XfZ68247532-1135427782-1.jpgXsZ68247532xIM.jpg",
      deleted: false
    });
  }, []);

  return (
    <div>
      <Row gutter={[36, 36]}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card
            title={<h3 className="category-title">{ book.title }</h3>}
            cover={<img alt="book" src={book.link} />}
          >
            <Row>
              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <Text strong>Autor: </Text> <Paragraph>{ book.author }</Paragraph>
              </Col>

              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <Text strong>Data de criação:</Text> <Paragraph>{ moment(book.timestamp).format('DD/MM/YYYY') }</Paragraph>
              </Col>

              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <Button size="small" type="primary">Estou Lendo</Button>
              </Col>

              <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                <Button size="small" type="primary">Editar</Button>
              </Col>
            </Row>

            <Text strong>Descrição: </Text>
            <Paragraph ellipsis={{ rows: 30, expandable: true }}>{ book.description }</Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <Card title={<h3 className="category-title">Comentários: </h3>}>
            <Comment
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              }
              content={
                <div>
                    <TextArea rows={4} />
                    <Button style={{ marginTop: 10 }} type="primary">
                      Novo Comentário
                    </Button>
                </div>
              }
            />

            <Comment
              actions={actions}
              author={<p>Han Solo</p>}
              avatar={
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              }
              content={
                <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure), to help people create their product prototypes beautifully
                  and efficiently.
                </p>
              }
              datetime={
                moment(book.timestamp).format('DD/MM/YYYY')
              }
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Book;