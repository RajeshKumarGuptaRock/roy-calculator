import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Roy1 from "./components/roy1";
import royaltyCalculator from "./components/royaltyCalculator";
import Footer from "./components/footer";
import styled from 'styled-components';
class App extends Component {
  render() {
    return (
      <div>
        { 
             <nav className="navbar navbar-default">
        <div className="container">
          {/* BRAND */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#alignment-example" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand " href="https://bfcpublications.com/" ><img src="http://demobfcpublication.ga/bfcweb/images/logos/bfc-publications-logo.png"  alt="store" /></a>
          </div>
          {/* COLLAPSIBLE NAVBAR */}
          <div className="collapse navbar-collapse" id="alignment-example">
            {/* Links */}
            <ul className="nav navbar-nav navbar-right" >
              <li className="active"><a href="https://bfcpublications.com/"> Home<span className="sr-only">(current)</span></a></li>
              <li className=""><a href="#"> Royalty Calculator<span className="sr-only">(current)</span></a></li>
          
            </ul>
            
          </div>
        </div>
      </nav>
      
     }
        <div className="container-fluid mt-3">
          <Switch>
            
            <Route path="/roy1" component={Roy1} />
            <Route path="/royaltyCalculator" component={royaltyCalculator} />
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
.w-100{
width:100%;
}
.navbar-brand {
    float: left;
    height: 50px;
    padding: 0px 0px !important;
    font-size: 18px;
    line-height: 20px;
}
.navbar-brand.img {
   
margin-bottom:100px;
}

`;
export default App;
