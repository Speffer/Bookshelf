import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Button } from 'antd';
import { useParams } from 'react-router-dom';
import BookService from '../../services/BookService';
import CategoryService from '../../services/CategoryService';
import CardList from '../../components/CardList';
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

      setBooks(JSON.parse(response));
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
            <Button className="site-order-link site-title" type="link">Ordem Alfabética</Button> - 
            <Button className="site-order-link site-title" type="link">Data de Criação</Button>
          </h2>
        </Col>
      </Row>

      <CardList
        categoryID={parseInt(id)} 
        data={books}
        title={<h2 className="category-title">{ title }</h2>} 
      />
    </div>
  );
};

export default Category;