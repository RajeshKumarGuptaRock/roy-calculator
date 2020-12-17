import React, { Component } from 'react';

import styled from 'styled-components';
class Footer extends Component {
    render() {
      return (
        <ProductWrapper className="col-lg-12 col-sm-12 rock">
        <div class="footer-widgets rock">
  <div className="container rock">
    <div className="row">
    <div class="col-xs-12 col-sm-6 col-md-3 footer-col">
        <div class="footer-block footer-block-2">
          <h4>Office Address</h4>
          <div class="content">
            <div class="text"> BFC Publications Pvt Ltd, 
              CP-61, Viraj Khand, Gomti Nagar, Lucknow, 
              Uttar Pradesh 226010
              <br/>
              <span className="text">
              Phone No. : <a href="tel:+915223514141" className="text">+915223514141</a></span>
              <br/><span>
              <a href="" className="text">
              Mail: support@bfcpublications.com
              </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-3 footer-col">
        <div class="footer-block footer-block-3 border-bottom1">
          <h4 className="padding">
          Stay Connected
          </h4>
          <div class="content">
            <ul class="widget-social-icon">
              <li>
              <a target="_blank" href="https://www.facebook.com/BFC-Publications-663170264296179" class="social-icon-inner facebook" title="Facebook">
              {/*<i class="fa fa-facebook"></i>*/}<span className="text">Facebook</span>
              </a>
              </li>
              <li>
              <a target="_blank" href="https://twitter.com/BfcPublications" class="social-icon-inner twitter" title="Twitter">
              {/*<i class="fa fa-twitter"></i>*/}<span className="text"> Twitter</span>
              </a>
              </li>
              <li>
              <a target="_blank" href="https://www.linkedin.com/company/bfc-publications" class="social-icon-inner google" title="Google Plus">
              {/*<i class="fa fa-linkedin"></i>*/}<span className="text">Linkedin</span>
              </a>
              </li>
              <li>
              <a target="_blank" href="https://www.instagram.com/bfc_publications/" class="social-icon-inner instagram" title="Instagram">
              {/*<i class="fa fa-instagram"></i>*/}<span className="text"> Instagram</span>
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div class="col-xs-12 col-sm-6 col-md-2 footer-col">
        <div class="footer-block footer-block-4">
        <h4 className="padding">
        Information
        </h4>
        <div class="content">
          <ul class="footer-menu">
          <li><a href="https://bfcpublications.com"> <b className="text">Home</b></a></li>
          <li><a href="https://bfcpublications.com/about-us"><b className="text"> About Us</b></a></li>
          <li><a href="https://bfcpublications.com/packages"><b className="text">Packages</b></a></li>
          <li><a href="https://bfcpublications.com/services"><b className="text">Services</b></a></li>
          <li><a href="https://bfcpublications.com/contact-us"><b className="text">Contact Us</b></a></li>
          <li><a href="https://bfcpublications.com/login"><b className="text">Author Dashboard</b></a></li>
          </ul>
        </div>
        </div>
      </div> 
     {/*  <div class="col-xs-12 col-sm-6 col-md-2 footer-col">
        <div class="footer-block footer-block-5">
          <h4>
          Quick Links
          </h4>
          <div class="content">
            <ul class="footer-menu">
              <li><a href="https://bfcpublications.com/privacy-policy" className="text">Privacy Policy</a></li>
              <li><a href="https://bfcpublications.com/legal-desclimer" className="text">Legal Disclaimer</a></li>
              <li><a href="https://bfcpublications.com/refund-cancellation" className="text">Refund &amp; Cancellation</a></li>
              <li><a href="https://bfcpublications.com/term-condition" className="text">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>*/}
    
    </div>
    </div>
    </div>
</ProductWrapper>

        
      )
    }
}  

const ProductWrapper = styled.div`
.rock{
  
  COLOR: #fff;
  background-color: #1b8bcc;
  padding-top: 10px;
  
}
h4{
  font-family: "Montserrat",Arial,Helvetica,sans-serif;
    color: #fff;
    font-weight: 400;
    margin-bottom: 20px;
    padding: 5px 0 0 0;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 15px;
}
.footer-widgets {
  padding: 40px 0 45px;
}
.footer-block .footer-menu {
  margin: 0;
  list-style: none;
}
.padding{
  padding-left: 37px;
  font-size: 15px;
}

.text{
    COLOR: #fff;
    list-style-type:none;
    font-size: 12px;
}
ul li{
    list-style-type:none;
}`;

export default Footer;