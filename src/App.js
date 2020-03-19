import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import createHistory from 'history/createBrowserHistory';
import Home from './pages/Home';
import Book from './pages/Book';
import Category from './pages/Category';
import Nav from './components/Nav';
import './index.css';

const { Content } = Layout;


const App = () => {
  const history = createHistory();

  return (
    <div>
      <Router history={history}>
          <Nav />
          
          <Content style={{ padding: '40px 50px' }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/book/:id" exact component={Book} />
              <Route path="/category/:id" exact component={Category} />
            </Switch>
          </Content>
      </Router>
    </div>
  );
};

export default App;