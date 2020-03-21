import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import logo from '../../assets/img/books-logo.png';

const Nav = () => (
  <div className="site-page-header">
    <Link to="/">
      <Row>
        <img alt="logo" className="books-logo" src={logo} />
        <h1 className="site-nav-title">Bookshelf</h1>
      </Row>
    </Link>
  </div>
);

export default Nav;