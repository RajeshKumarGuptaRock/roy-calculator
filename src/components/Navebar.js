import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from 'styled-components';


export default class Navbar extends Component {
  render(){
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link className="navbar-brand" to="#">
            <img src="https://bfcpublications.com/public/frontendAssets/images/htt-logo.jpg"  height="50px" width="200px" alt="store" className="navbar-brand"/>
          
        </Link>
         <ul className="navbar-nav align-iteams-center"> 
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">Products</Link>
            </li>
            <li className="nav-item ml-5"></li>
         </ul> 
         <Link className="ml-auto" to="/cart">
            <ButtonContainer>
                <span className="mr-2">
            <img src="https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-part-1/33/add_cart-512.png" height="30px" width="20px"/>    
            </span>
               my cart
            </ButtonContainer> 
        </Link> 
      </NavWrapper>
      );
  }
   
} 
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    // 1rem 20px
}
`


