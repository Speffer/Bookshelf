import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Button, Card, Typography, Comment, Avatar, Input, Popconfirm } from 'antd';
import { useParams } from 'react-router-dom';
import CategoryService from '../../services/CategoryService';
import BookService from '../../services/BookService';
import MessageUtils from '../../utils/MessageUtils';
import moment from 'moment';
import '../../index.css'
import EditBookModal from './EditBookModal';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;
const { TextArea } = Input;


const Book = ({ history }) => {
  const [book, setBook] = useState({});
  const [categoryTitle, setCategoryTitle] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useParams();

  const actions = [
    <Button size="small" type="primary">Editar</Button>,
    <Button className="btn-default" size="small">Excluir</Button>,
  ];

  useEffect(() => {
    setBook(history.location.state && history.location.state.book);
    getCategories();
  }, []);

  const onDelete = () => {
    try {
      BookService.deleteBook(parseInt(id));

      history.push('/')
      MessageUtils.swalSuccess('Livro deletado com sucesso!');
    } catch (error) {
      
    }
  }

  const getCategories = useCallback(() => {
    try {
      let response = CategoryService.getCategory();

      let categories = JSON.parse(response);
      
      if(categories.length > 0 && book) {
        categories.map((category) => {
          if(category.id === history.location.state.book.category) {
            setCategoryTitle(category.title);
          }
        });
      }
    } catch (error) {
      // Se fosse integrado com uma api precisaria do catch
    }
  }, [book]);

  const renderCategoryTitle = useCallback(() => {
    return (
      <Col xs={24} sm={24} md={24} lg={6} xl={6}>
        <Button size="small" style={{ cursor: 'default', margin: 5 }} type="primary">{categoryTitle}</Button>
      </Col>
    );
  }, [book]);

  return (
    <div>
      <Row gutter={[36, 36]}>
        <EditBookModal initialValue={book} getBooks={setBook} visible={modalVisible} onDismiss={() => setModalVisible(false)} />

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Card
            title={<h3 className="category-title">{ book.title }</h3>}
            cover={<img alt="book" src={book.link} />}
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Text strong>Autor: </Text> <Paragraph>{ book.author }</Paragraph>
              </Col>

              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Text strong>Data de criação:</Text> <Paragraph>{ moment(book.timestamp).format('DD/MM/YYYY') }</Paragraph>
              </Col>

              { renderCategoryTitle() }
            </Row>

            <Row justify="start">
              <Col xs={24} sm={12} md={12} lg={8} xl={4}>
                <Button 
                  onClick={() => setModalVisible(true)} 
                  style={{ margin: 5 }} 
                  size="small" 
                  type="primary"
                >
                  <EditOutlined />
                  Editar
                </Button>
              </Col>

              <Col xs={24} sm={12} md={12} lg={16} xl={20}>
                <Popconfirm
                  title="Tem certeza que quer excluir esse livro?"
                  onConfirm={onDelete}
                  okText="Sim, eu quero."
                  cancelText="Não!"
                >
                  <Button style={{ margin: 5 }} className="btn-default" size="small"><DeleteOutlined />Excluir</Button>
                </Popconfirm>
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