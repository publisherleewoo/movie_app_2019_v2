import React, { Component } from 'react';
import './App.css';
import { HashRouter,Route,Link } from 'react-router-dom';
import Home from './routes/Home';
import Movies from './routes/Movies';
import MovieDetail from './components/MovieDetail';
import Join from './routes/Join';

 
class App extends Component {

  render() {
    return (<HashRouter>
      <Link to="/">홈</Link>
      <Link to="/movies">무비스</Link>
      <Link to="/join">회원가입</Link>
      <Route exact path="/"  component={Home}>
      </Route>
      <Route exact path="/movies" component={Movies} >
      </Route>
      <Route path="/movies/:id"  component={MovieDetail}>
      </Route>
      <Route path="/join"  component={Join}>
      </Route>
        
    </HashRouter>
    );
  }
}

export default App;
