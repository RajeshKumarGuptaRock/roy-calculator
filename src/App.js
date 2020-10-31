import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";




//import "./bootstrap.min.css";
//import Navebar from './components/Navebar';
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Agam from "./components/agam";
import Roy from "./components/roy";
import Roy1 from "./components/roy1";
import Footer from "./components/footer";

import styled from 'styled-components';
class App extends Component {
  render() {
    return (
      <div>
        { 
        <NavWrapper className="navbar navbar-expand border-bottom">
          <Link className="navbar-brand" to="https://bfcpublications.com">
              <img src="https://bfcpublications.com/public/frontendAssets/images/htt-logo.jpg"  height="50px" width="200px" alt="store" className="navbar-brand"/>
          </Link>
        
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/roy1"} className="nav-link">
              Royalty Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/https://bfcpublications.com/login"} className="nav-link">
                Author Dashboard
              </Link>
            </li>
          </div>
        </NavWrapper>
     }
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route path="/agam" component={Agam} />
            <Route path="/roy" component={Roy} />
            <Route path="/roy1" component={Roy1} />

          </Switch>
        </div>
        <Footer/>
        
      </div>
    );
  }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    font-size:1rem;
    background-color:#fff;
    color:#000;
    // 1rem 20px
}
.nav-item{
  background-color:#000;
  color:#fff;
}
.border-bottom{
  border-bottom: 1px solid;
  padding:27px;
}

`;

const footerwrapper = styled.div`
.rock{
  background-color: #1b8bcc;
  color:#000;
}

`;
export default App;
