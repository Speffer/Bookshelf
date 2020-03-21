import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import './index.css'

const CardList = ({ title, data, categoryID }) => {

  const [books, setBooks] = useState([]);

  useEffect(() => setBooks(data), [data]);

  const renderCard = useCallback(() => {
    let count = 0;

    let booksToShow = books.map(({ deleted, link, title, author, id, category }) => {
      if(!deleted && categoryID === category) {
        count++;

        return (
          <Col key={id} xs={24} sm={24} md={6} lg={6} xl={4}>
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
    
    return count > 0 ? booksToShow : <p style={{ color: '#172645' }}>Sem livros para essa categoria!</p>;
  }, [books]);

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