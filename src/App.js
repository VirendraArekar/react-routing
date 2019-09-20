import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/pages/Login';


function App() {
  return (
    <div className="App">
         <Header /> 
         <Router>
              <Link to="/login"></Link>
               <Route path="/login" exact component={Login} />
         </Router>  
          
    </div>
  );
}

export default App;
