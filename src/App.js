import React, { Component } from 'react';
import './App.css';
import { Router, Route } from 'react-router';
import history from './history';
import Layout from '../src/layout';
import Login from '../src/Login/Login';
import VideoPage from '../src/VideoPage/VideoPage';

class App extends Component {
  render() {
    return (
    
      <div className="App">
       <Layout>
        <header className="App-header">
           {/* <Login/> */}
           <Router history={history}>
                <React.Fragment>
                    <Route exact path="/" component={Login} />
                    {/* <Route path="/login" component={Login} /> */}
                    <Route path="/VideoPage" component={VideoPage} />
                </React.Fragment>
            </Router>
        </header>
       </Layout> 
       </div>
      
      
    );
  }
}

export default App;
