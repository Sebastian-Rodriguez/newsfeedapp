import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

//components
import Header from '../Header';
import SideBar from '../SideBar';

//pages
import Home from '../Pages/Home';
import Deportes from '../Pages/Deportes';
import Politica from '../Pages/Politica';
import Espectaculos from '../Pages/Espectaculos';
import Tecnologia from '../Pages/Tecnologia';
import Internacionales from '../Pages/Internacionales';
import Search from '../Pages/Search';

class App extends Component{
  constructor(){
    super()
  }

  

  render(){

    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <SideBar />
            
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route path="/deportes" component={ Deportes }/>
              <Route path="/espectaculos" component={ Espectaculos }/>
              <Route path="/tecnologia" component={ Tecnologia }/>
              <Route path="/politica" component={ Politica }/>
              <Route path="/internacionales" component={ Internacionales }/>
              <Route path="/search/:key" component={ Search }/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;