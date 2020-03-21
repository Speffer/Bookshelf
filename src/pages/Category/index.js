import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Button } from 'antd';
import { useParams } from 'react-router-dom';
import BookService from '../../services/BookService';
import CategoryService from '../../services/CategoryService';
import CardList from '../../components/CardList';
import AnyUtils from '../../utils/AnyUtils';
import '../../index.css'


const Category = () => {
  let { id } = useParams();
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    if(books.length > 0)
      getCategories();
  }, [books]);

  const filterByAlpha = useCallback(async() => {
    let newOrder = await AnyUtils.orderByAlpha(books);

    setBooks(newOrder);
  }, [books]);

  const filterByDate = useCallback(async() => {
    let newOrder = await AnyUtils.orderByDate(books);

    setBooks(newOrder);
  }, [books]);

  const getCategories = () => {
    try {
      let response = CategoryService.getCategory();

      let categories = JSON.parse(response);
      
      if(categories.length > 0) {
        categories.map((category) => {
          if(category.id === parseInt(id)) {
            setTitle(category.title);
          }
        });
      }
    } catch (error) {
      // Se fosse integrado com uma api precisaria do catch
    }
  };

  const getBooks = () => {
    try {
      let response = BookService.get();

      let booksByAlpha = AnyUtils.orderByAlpha(JSON.parse(response)); 

      setBooks(booksByAlpha);
    } catch (error) {
      // Se fosse integrado com uma api precisaria do catch
    }
  };

  return (
    <div>
      <Row justify="space-between">
        <Col xs={24} sm={24} md={16} lg={16}>
          <h2 className="site-title">
            Ordernar por: 
            <Button onClick={() => filterByAlpha()} className="site-order-link site-title" type="link">Ordem Alfabética</Button> - 
            <Button onClick={() => filterByDate()} className="site-order-link site-title" type="link">Data de Criação</Button>
          </h2>
        </Col>
      </Row>

      <CardList
        key={books.length}
        categoryID={parseInt(id)} 
        books={books}
        title={<h2 style={{ color: '#f92240' }}>{ title }</h2>} 
      />
    </div>
  );
};

export default Category;