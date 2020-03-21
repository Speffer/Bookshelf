import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import CardList from '../../components/CardList';
import CategoryService from '../../services/CategoryService';
import BookService from '../../services/BookService';
import CategoriesEnum from '../../enums/CategoriesEnum';
import NewBookModal from './NewBookModal';
import '../../index.css'


const Home = () => {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    if(books.length > 0)
      getCategories();
  }, [books]);

  const getCategories = async() => {
    try {
      let response = await CategoryService.getCategory();

      setCategories(JSON.parse(response));
    } catch (error) {
      // Se fosse integrado com uma api precisaria do catch
    }
  }

  const getBooks = () => {
    try {
      let response = BookService.get();

      setBooks(JSON.parse(response));
    } catch (error) {
      // Se fosse integrado com uma api precisaria do catch
    }
  }

  const renderCardLists = useCallback(() => {
    return categories.map((category, index) => {
      switch(category.id) {
        case CategoriesEnum.READ:
          return (
            <CardList
              key={index} 
              categoryID={category.id} 
              data={books}
              title={<Link to={`/category/${category.id}`}><h2 className="category-title">Já Lidos</h2></Link> } 
            />
          );

        case CategoriesEnum.READING:
          return (
            <CardList 
              key={index}
              categoryID={category.id} 
              data={books} 
              title={<Link to={`/category/${category.id}`}><h2 className="category-title">Estou Lendo</h2></Link> } 
            />
          );

        case CategoriesEnum.WANT_TO_READ:
          return (
            <CardList 
              key={index}
              categoryID={category.id} 
              data={books} 
              title={<Link to={`/category/${category.id}`}><h2 className="category-title">Quero Ler</h2></Link> } 
            />
          );

        case CategoriesEnum.WITHOUT:
          return (
            <CardList 
              key={index}
              categoryID={category.id} 
              data={books} 
              title={<Link to={`/category/${category.id}`}><h2 className="category-title">Sem Categoria</h2></Link> }
            />
          );
      }
    });
  }, [categories]);

  return (
    <div>
      <NewBookModal books={books} getBooks={getBooks} visible={modalVisible} onDismiss={() => setModalVisible(false)} />

      <Row justify="space-between">
        <Col xs={24} sm={24} md={16} lg={16}>
          <h2 className="site-title">
            Ordernar por: 
            <Button className="site-order-link site-title" type="link">Ordem Alfabética</Button> - 
            <Button className="site-order-link site-title" type="link">Data de Criação</Button>
          </h2>
        </Col> 

        <Col xs={24} sm={24} md={8} lg={8}>
          <Button onClick={() => setModalVisible(true)} type="primary" size="large">
            + Novo livro
          </Button>
        </Col>
      </Row>

      {books.length === 0 && <p style={{ color: '#172645' }}>Nenhum livro adicionado</p>}

      {renderCardLists()}
    </div>
  );
};

export default Home;