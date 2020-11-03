/**
 * Created by rafal on 28/02/2017.
 */
import React, { Component } from 'react';

import styled from 'styled-components';
//import { Row, Col, FormGroup} from 'react-bootstrap';

import "../css/_royaltycalculator.css";
import "../css/_common1.css";

class Roy1 extends Component {


    constructor() {
        super();
        this.state = {
            value22: 'Please write an essay about your favorite DOM element.',
            booktype22 : 0
          };

        this.state = {
          number1: 10,
          number2: 20,
          result: 0,
          npages:'',
          setmrp:'',
          bookformat:''
        };

        this.handleChangeSelect = this.handleChangeSelect.bind(this);

      }


      handleOnChange = e => {
      

     // handleOnChange(e){
        console.log("ffff Line37",e.target.value);
        const { target: { value, name } } = e;
     
        this.setState({
          [name]: Number(value)
        });      

      }

    //  handleOnChange1(event){ 
      handleOnChange1 = event => { 

        console.log("ffff Line48",event.target.value);
      //  console.log(event.target.value);
       
       this.setState({setmrp: event.target.value});

      }


      handleChangeSelect(event) {
         console.log(event.target.value);

        // console.log("-----------vvvvvv");
    //    console.log(event.target);
         this.setState({bookformat: event.target.value});
       // this.setState();       
         //  console.log(this);

      }

      handleSubmitSelect(event) {
        alert('Your favorite flavor1111 is: ' + this.state.value);
        event.preventDefault();
      }

      handleResult = e => {
       let booktype=0;
       if(this.refs.bookFormat.value=='Paperback'){
          if(this.refs.npages.value <= 72){
            if(this.refs.bookSize.value =='5x8'){
              console.log("<= 72 5x8")
              booktype=0.505
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.618
              console.log(" <= 72 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.72
              console.log(" <= 72 8.5x11")
            }else{}
           
          }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 73 <=96 5x8")
              booktype=0.505
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.618
              console.log(" >= 73 <=96 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
                booktype=0.61
                console.log(" >= 73 <=96 8.5x11")
              }else{}
          
          }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 97 <=108 5x8")
              booktype=0.433
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.502
              console.log(">= 97 <=108 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.61
              console.log(" >= 97 <=108 8.5x11")
            }else{}
          
          }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 109 <=128 5x8")
              booktype=0.433
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.502
              console.log(">= 109 <=128 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.57
              console.log(">= 109 <=128 8.5x11")
            }else{}
          
          }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
              if(this.refs.bookSize.value =='5x8'){
                console.log(">= 129 <=148 5x8")
                booktype=0.360
              }else if(this.refs.bookSize.value =='6x9'){
                booktype=0.473
                console.log(">= 129 <=148 6x9")
              }else if(this.refs.bookSize.value =='8.5x11'){
                booktype=0.55
                console.log(">= 129 <=148 8.5x11")
              }else{}
            
          }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 149 <=192 5x8")
              booktype=0.360
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.473
              console.log(">= 149 <=192 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.49
              console.log(">= 149 <=192 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 193 <=216 5x8")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 193 <=216 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.49
              console.log(">= 193 <=216 8.5x11")
            }else{}
    
          }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
           
            if(this.refs.bookSize.value =='5x8'){
              console.log("5x8 >= 217  <=252  ")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 217  <=252 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 217  <=252 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){
         
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 253 <=256 5x8")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 253 <=256 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 253 <=2568.5x11")
            }else{}
          }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
           
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 257 <=276 5x8")
              booktype=0.313
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.415
              console.log(">= 257 <=276 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 257 <=276 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 277 <=320 5x8")
              booktype=0.313
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.415
              console.log(">= 277 <=320 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 277 <=320 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 321 <=352 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(" >= 321 <=3526x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.44
              console.log(" >= 321 <=3528.5x11")
            }else{}
          }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
           
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 353 <=384 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 353 <=384 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.43
              console.log(">= 353 <=384 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
           
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 385  <=432  5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 385  <=432  6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.42
              console.log(">= 385  <=432  8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
           
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 433 <=492 8.5x11")
            }if(this.refs.bookSize.value =='5x8'){
              console.log(">= 433 <=492 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 433 <=492 6x9")
            }else{
              
            }
          }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
           
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
             booktype=0.305
             console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else if(this.refs.npages.value >=549 ){
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
             booktype=0.305
             console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else{

          }
          var prodcost = this.state.npages*booktype+8.5
         // prodcost = parseFloat(prodcost).toFixed(2);
          var prodsubpercentage = (prodcost*15)/100

          var prodsubpercentagetot = prodcost + prodsubpercentage
          prodsubpercentagetot = parseFloat(prodsubpercentagetot).toFixed(2);
          var minprice = prodcost*2.5
          minprice = parseFloat(minprice).toFixed(2);
       }else if(this.refs.bookFormat.value=='Ebook'){
          if(this.refs.npages.value <= 72){
            if(this.refs.bookSize.value =='5x8'){
              console.log("<= 72 5x8")
              booktype=0.505
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.618
              console.log(" <= 72 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.72
              console.log(" <= 72 8.5x11")
            }else{}
          
          }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 73 <=96 5x8")
              booktype=0.505
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.618
              console.log(" >= 73 <=96 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
                booktype=0.61
                console.log(" >= 73 <=96 8.5x11")
              }else{}
          
          }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 97 <=108 5x8")
              booktype=0.433
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.502
              console.log(">= 97 <=108 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.61
              console.log(" >= 97 <=108 8.5x11")
            }else{}
          
          }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 109 <=128 5x8")
              booktype=0.433
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.502
              console.log(">= 109 <=128 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.57
              console.log(">= 109 <=128 8.5x11")
            }else{}
          
          }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
              if(this.refs.bookSize.value =='5x8'){
                console.log(">= 129 <=148 5x8")
                booktype=0.360
              }else if(this.refs.bookSize.value =='6x9'){
                booktype=0.473
                console.log(">= 129 <=148 6x9")
              }else if(this.refs.bookSize.value =='8.5x11'){
                booktype=0.55
                console.log(">= 129 <=148 8.5x11")
              }else{}
            
          }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 149 <=192 5x8")
              booktype=0.360
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.473
              console.log(">= 149 <=192 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.49
              console.log(">= 149 <=192 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 193 <=216 5x8")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 193 <=216 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.49
              console.log(">= 193 <=216 8.5x11")
            }else{}
    
          }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
          
            if(this.refs.bookSize.value =='5x8'){
              console.log("5x8 >= 217  <=252  ")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 217  <=252 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 217  <=252 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){
        
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 253 <=256 5x8")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 253 <=256 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 253 <=2568.5x11")
            }else{}
          }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
          
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 257 <=276 5x8")
              booktype=0.313
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.415
              console.log(">= 257 <=276 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 257 <=276 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 277 <=320 5x8")
              booktype=0.313
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.415
              console.log(">= 277 <=320 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 277 <=320 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 321 <=352 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(" >= 321 <=3526x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.44
              console.log(" >= 321 <=3528.5x11")
            }else{}
          }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
          
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 353 <=384 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 353 <=384 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.43
              console.log(">= 353 <=384 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
          
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 385  <=432  5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 385  <=432  6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.42
              console.log(">= 385  <=432  8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
          
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 433 <=492 8.5x11")
            }if(this.refs.bookSize.value =='5x8'){
              console.log(">= 433 <=492 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 433 <=492 6x9")
            }else{
              
            }
          }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
          
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
            booktype=0.305
            console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else if(this.refs.npages.value >=549 ){
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
            booktype=0.305
            console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else{

          }
          var prodcost = this.state.npages*booktype+8.5
          prodcost = parseFloat(prodcost).toFixed(2);
          var prodsubpercentage = (prodcost*15)/100

          var prodsubpercentagetot = prodcost + prodsubpercentage
          prodsubpercentagetot = parseFloat(prodsubpercentagetot).toFixed(2);
          var minprice = prodcost*2.5
          minprice = minprice*0.6
          minprice = parseFloat(minprice).toFixed(2);
       }else{}
        this.setState({
          prodcostx: prodcost,
          prodsubcostx: prodsubpercentagetot,
          minprice:minprice
        });
      }


      handleResult1 = e => {
        let booktype=0;
       if(this.refs.bookFormat.value=='Paperback'){
          if(this.refs.npages.value <= 72){
            if(this.refs.bookSize.value =='5x8'){
              console.log("<= 72 5x8")
              booktype=0.505
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.618
              console.log(" <= 72 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.72
              console.log(" <= 72 8.5x11")
            }else{}
           
          }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 73 <=96 5x8")
              booktype=0.505
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.618
              console.log(" >= 73 <=96 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
                booktype=0.61
                console.log(" >= 73 <=96 8.5x11")
              }else{}
          
          }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 97 <=108 5x8")
              booktype=0.433
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.502
              console.log(">= 97 <=108 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.61
              console.log(" >= 97 <=108 8.5x11")
            }else{}
          
          }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 109 <=128 5x8")
              booktype=0.433
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.502
              console.log(">= 109 <=128 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.57
              console.log(">= 109 <=128 8.5x11")
            }else{}
          
          }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
              if(this.refs.bookSize.value =='5x8'){
                console.log(">= 129 <=148 5x8")
                booktype=0.360
              }else if(this.refs.bookSize.value =='6x9'){
                booktype=0.473
                console.log(">= 129 <=148 6x9")
              }else if(this.refs.bookSize.value =='8.5x11'){
                booktype=0.55
                console.log(">= 129 <=148 8.5x11")
              }else{}
            
          }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 149 <=192 5x8")
              booktype=0.360
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.473
              console.log(">= 149 <=192 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.49
              console.log(">= 149 <=192 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 193 <=216 5x8")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 193 <=216 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.49
              console.log(">= 193 <=216 8.5x11")
            }else{}
    
          }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
           
            if(this.refs.bookSize.value =='5x8'){
              console.log("5x8 >= 217  <=252  ")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 217  <=252 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 217  <=252 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){
         
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 253 <=256 5x8")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 253 <=256 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 253 <=2568.5x11")
            }else{}
          }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
           
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 257 <=276 5x8")
              booktype=0.313
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.415
              console.log(">= 257 <=276 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 257 <=276 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 277 <=320 5x8")
              booktype=0.313
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.415
              console.log(">= 277 <=320 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 277 <=320 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 321 <=352 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(" >= 321 <=3526x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.44
              console.log(" >= 321 <=3528.5x11")
            }else{}
          }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
           
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 353 <=384 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 353 <=384 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.43
              console.log(">= 353 <=384 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
           
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 385  <=432  5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 385  <=432  6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.42
              console.log(">= 385  <=432  8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
           
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 433 <=492 8.5x11")
            }if(this.refs.bookSize.value =='5x8'){
              console.log(">= 433 <=492 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 433 <=492 6x9")
            }else{
              
            }
          }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
           
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
             booktype=0.305
             console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else if(this.refs.npages.value >=549 ){
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
             booktype=0.305
             console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else{}
          var prodcost = this.state.npages*booktype+8.5
          var prodsubpercentage = (prodcost*15)/100
          var prodsubpercentagetot = prodcost + prodsubpercentage
          var mrp = prodcost*2.5
          var prodcost = this.state.npages*booktype+8.5
        //var mrp = this.state.setmrp
        var brfmrppercent  = (mrp * 15)/100
        var othermrppercent  = (mrp * 50)/100
        var setbfcprice = (mrp-(prodcost + brfmrppercent))*85/100
        setbfcprice = parseFloat(setbfcprice).toFixed(2);
        var setohterprice = (mrp-(prodcost + othermrppercent))*85/100
        setohterprice = parseFloat(setohterprice).toFixed(2);
       }else if(this.refs.bookFormat.value=='Ebook'){
          if(this.refs.npages.value <= 72){
            if(this.refs.bookSize.value =='5x8'){
              console.log("<= 72 5x8")
              booktype=0.505
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.618
              console.log(" <= 72 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.72
              console.log(" <= 72 8.5x11")
            }else{}
          
          }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 73 <=96 5x8")
              booktype=0.505
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.618
              console.log(" >= 73 <=96 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
                booktype=0.61
                console.log(" >= 73 <=96 8.5x11")
              }else{}
          
          }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 97 <=108 5x8")
              booktype=0.433
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.502
              console.log(">= 97 <=108 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.61
              console.log(" >= 97 <=108 8.5x11")
            }else{}
          
          }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 109 <=128 5x8")
              booktype=0.433
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.502
              console.log(">= 109 <=128 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.57
              console.log(">= 109 <=128 8.5x11")
            }else{}
          
          }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
              if(this.refs.bookSize.value =='5x8'){
                console.log(">= 129 <=148 5x8")
                booktype=0.360
              }else if(this.refs.bookSize.value =='6x9'){
                booktype=0.473
                console.log(">= 129 <=148 6x9")
              }else if(this.refs.bookSize.value =='8.5x11'){
                booktype=0.55
                console.log(">= 129 <=148 8.5x11")
              }else{}
            
          }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 149 <=192 5x8")
              booktype=0.360
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.473
              console.log(">= 149 <=192 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.49
              console.log(">= 149 <=192 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 193 <=216 5x8")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 193 <=216 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.49
              console.log(">= 193 <=216 8.5x11")
            }else{}
    
          }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
          
            if(this.refs.bookSize.value =='5x8'){
              console.log("5x8 >= 217  <=252  ")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 217  <=252 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 217  <=252 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){
        
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 253 <=256 5x8")
              booktype=0.324
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.437
              console.log(">= 253 <=256 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 253 <=2568.5x11")
            }else{}
          }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
          
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 257 <=276 5x8")
              booktype=0.313
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.415
              console.log(">= 257 <=276 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 257 <=276 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 277 <=320 5x8")
              booktype=0.313
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.415
              console.log(">= 277 <=320 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.46
              console.log(">= 277 <=320 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 321 <=352 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(" >= 321 <=3526x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.44
              console.log(" >= 321 <=3528.5x11")
            }else{}
          }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
          
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 353 <=384 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 353 <=384 6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.43
              console.log(">= 353 <=384 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
          
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 385  <=432  5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 385  <=432  6x9")
            }else if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.42
              console.log(">= 385  <=432  8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
          
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 433 <=492 8.5x11")
            }if(this.refs.bookSize.value =='5x8'){
              console.log(">= 433 <=492 5x8")
              booktype=0.305
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 433 <=492 6x9")
            }else{
              
            }
          }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
          
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
            booktype=0.305
            console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else if(this.refs.npages.value >=549 ){
            if(this.refs.bookSize.value =='8.5x11'){
              booktype=0.41
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
            booktype=0.305
            console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.400
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else{}
          var prodcost = this.state.npages*booktype+8.5
          var mrp = prodcost*2.5
          mrp = parseFloat(mrp).toFixed(2);
          var brfmrppercent  = (mrp * 15)/100
          var othermrppercent  = (mrp * 50)/100
          var setbfcprice = (mrp-brfmrppercent)*85/100
          setbfcprice = parseFloat(setbfcprice).toFixed(2);
          var setohterprice = (mrp-brfmrppercent)*85/100
          setohterprice = parseFloat(setohterprice).toFixed(2);
       }else{}
         this.setState({
           bfcprice: setbfcprice,
           otherprice:setohterprice
           
         });
 
 
 
       }




    render(){
        return(
          <div>
            {
 <ProductWrapper>
 <div className="col-lg-12 royaltycalculator section_padding reset_section_padding_bottom">
 <div className>
   <div className="container royaltytitle">
     <div className="row justify-content-center">
       <h6 className="main-heading-rock">Calculate Author Earnings</h6>                 
     </div>
     <div className="row justify-content-center">
       {/*<p>Calculate your profit margins and set your ideal selling price.</p>*/}
     </div>
    
     <div className="row justify-content-center">
       <div className="button_container">
         
       </div>
     </div>
   </div>
   <div className="container">
     <div className="row">
       <div className="col-lg-12 col-md-nopadding">
         <div className="row">
           <div className="col-lg-6 col-md-6 enterdetails col-md-nopadding col-md-padding-7 card1">
             <div className="col-lg-12 col-xl-11 ml-xl-auto col-md-padding-7 col-md-nopadding">
               <div className="row margin-top-20">
                 <div className="col-lg-12">
                   <h4>FILL BOOK DETAILS HERE</h4>
                 </div>
                 <div
                   id="productionCost"
                   className="formcontainer col-lg-12"
                    
                 >
                   <input type="hidden" name="VISITS" defaultValue={1} />
                   <input
                     type="hidden"
                     name="ILANDPAGE"
                     defaultValue="https%3A//notionpress.com/pod-royalty-calculator"
                   />
                   <input
                     type="hidden"
                     name="LREFERRER"
                     defaultValue="https%3A//www.google.com/"
                   />
                   <input
                     type="hidden"
                     name="IREFERRER"
                     defaultValue="https%3A//www.google.com/"
                   />
                   <input
                     type="hidden"
                     defaultValue="diy"
                     name="publishingmode"
                   />
                   <div
                     className="get_values centerbox col-lg-12"
                     style={{ minHeight: 251 }}
                   >
                     <div className="row">
                       <div className="col-lg-12">
                         <div className="row align-items-center" id={1}>
                           <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding">
                             <label>Number of Pages</label>
                           </div>
                           <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding">
                             <span className="delimiter"></span>
                             <input
                               type="number"
                               onChange={this.handleOnChange}
                               id="npages"
                               name="npages"
                               value={this.state.npages}
                               ref="npages"
                               required
                               
                             />
{/* <div className="Calculator">
<input onChange={this.handleOnChange} name="number1" type="text" value={this.state.number1} />
{' + '}
<input onChange={this.handleOnChange} name="number2" type="text" value={this.state.number2} />
<p><button onClick={this.handleResult}>=</button></p>

<p className="result">{this.state.result}</p>
</div>
*/}


                             <div
                               className="alert alert-danger hidealert"
                               id="npagesrequired"
                               style={{ display: "none" }}
                             >
                               Number of pages is required.
                             </div>
                             <div
                               className="alert alert-danger hidealert"
                               id="npagesnumeric"
                               style={{ display: "none" }}
                             >
                               Number of pages has to be numeric.
                             </div>
                             <div
                               className="alert alert-danger hidealert"
                               id="npageslessthan100"
                               style={{ display: "none" }}
                             >
                               Pages should be between 4 to 700.
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="col-lg-12">
                         <div className="row align-items-center" id={2}>
                           <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding">
                             <label>Book Format</label>
                           </div>
                           <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding">
                             <span className="delimiter"></span>
                             <select                                         
                               onChange={this.handleChangeSelect}   
                               value={this.state.value}  
                               name="bookFormat"
                               id="bookFormat" 
                               ref="bookFormat"  
                               required                                    

                             >
                               <option
                                 className="long-book"
                                 value="Paperback"
                                 id="Paperback"
                                 style={{ display: "block" }}
                               >
                                 Paperback
                               </option>
                               <option
                                 className="long-book"
                                 value="Ebook"
                                 id="Ebook"
                                 style={{ display: "block" }}
                               >
                                 Ebook
                               </option>
                             </select>
                           </div>
                         </div>
                       </div>
                       <div className="col-lg-12">
                         <div className="row align-items-center" id={3}>
                           <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding">
                             <label>Book Size</label>
                           </div>
                           <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding">
                             <span className="delimiter"></span>
                             <select id="booksize" name="booksize" ref="bookSize" required>
                               <option value="5x8" selected="selected">
                                 5" x 8"
                               </option>
                              {/* <option value="216-140">5.5" x 8.5"</option>*/}
                               <option value="6x9">6" x 9"</option>
                               {/*<option value="216-216">8.5" x 8.5"</option>*/}
                               <option value="8.5x11">8.5" x 11"</option>
                             </select>
                           </div>
                         </div>
                       </div>
                       <div className="col-lg-12">
                         <div className="row align-items-center" id={4}>
                           <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding">
                             <label>Book Type</label>
                           </div>
                           <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding">
                             <span className="delimiter"></span>
                             <select id="bookColor" name="bookcolor"  ref="bookColor" required>
                               <option value="bw" selected="selected">
                                 Black &amp; White
                               </option>
                               {/*<option value="color">Full Color</option>*/}
                             </select>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-12 button text-center">
                     <button                                  
                       className="btn btn-primary"
                       onClick={this.handleResult}
                     >
                       Calculate
                     </button>
                   </div>
                   <div
                     className="bottombox col-lg-12"
                     style={{ minHeight: 231 }}
                   >
                     <div className="row calculation-section">
                       <div className="col-lg-12 row-class">
                         <div className="row align-items-center">
                           <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding">
                             <label>Production Cost </label>
                           </div>
                           <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding">
                             <span className="delimiter"></span>
                             {/* <p className="result">{this.state.result}</p> */}
                             
                             <span className="result prodcostx" id="prodcost">
                               Rs. {this.state.prodcostx}
                             </span>
                           </div>
                         </div>
                       </div>
                       <div className="col-lg-12 row-class toppadding">
                         <div className="row align-items-start">
                           <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding">
                             <label>
                               Author copies - at subsidized price{" "}
                             </label>
                           </div>
                           <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding">
                             <span className="delimiter"> </span>
                             <span className="value prodsubcostx" id="prodsubcostx">
                             Rs. {this.state.prodsubcostx}
                             </span>
                           </div>
                         </div>
                       </div>
                       <p className="col-lg-12">
                         This is the price at which you can purchase your own
                         book. The minimum number of copies per order is 20.
                       </p>
                      
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-6 col-md-6 authorroyalty col-md-nopadding col-md-padding-7 card2">
             <div className="col-lg-12 col-xl-11 mr-xl-auto col-md-padding-7 col-md-nopadding margin-top-20">
               <div className="col-lg-12 nopadding">
                 <h4>AUTHOR EARNINGS CALCULATOR</h4>
               </div>
               {/* <form
                 id="authorRoyalty"
                 className="formcontainer col-lg-12 nopadding"
               >*/}
                 <input type="hidden" name="VISITS" defaultValue={1} />
                 <input
                   type="hidden"
                   name="ILANDPAGE"
                   defaultValue="https%3A//notionpress.com/pod-royalty-calculator"
                 />
                 <input
                   type="hidden"
                   name="LREFERRER"
                   defaultValue="https%3A//www.google.com/"
                 />
                 <input
                   type="hidden"
                   name="IREFERRER"
                   defaultValue="https%3A//www.google.com/"
                 />
                 <input
                   type="hidden"
                   defaultValue="diy"
                   name="publishingmode"
                 />
                 <div
                   className="centerbox col-lg-12"
                   style={{ minHeight: 251 }}
                 >
                   <div className="row align-items-center">
                     <div className="get_values col-lg-12">
                       <div
                         className="alert alert-danger hidealert"
                         id="setmrprequired"
                         style={{ display: "none" }}
                       >
                         MRP needs to be set.
                       </div>
                       <div
                         className="alert alert-danger hidealert"
                         id="setmrpgreater"
                         style={{ display: "none" }}
                       >
                         The Set MRP needs to be greater than the Minimum MRP.
                       </div>
                       <div
                         className="alert alert-danger hidealert"
                         id="setmrpnumeric"
                         style={{ display: "none" }}
                       >
                         MRP has to be numeric.
                       </div>
                       <p>
                         Set a selling price above the Minimum Selling Price
                         and hit 'Calculate' to see how much you earn.
                       </p>
                       <div className="row align-items-center paddingtop">
                         <div className="col-lg-4 col-md-5 col-sm-4 col-4 nopadding">
                           <label>Set Selling Price</label>
                         </div>
                         <div className="col-lg-8 col-md-7 col-sm-8 col-8 nopadding">
                           <span className="delimiter"></span>
                           <input
                             type="number"
                             onChange={this.handleOnChange1}
                             id="setmrp"
                             name="setmrp"
                             value={this.state.setmrp}
                             ref="setmrp"
                             required
                           />
                         </div>
                       </div>
                       <div className="row align-items-xl-end align-items-md-end align-items-sm-end align-items-center align-items-lg-center">
                         <div className="col-lg-12 col-md-5 col-sm-4 col-4 nopadding">
                           <label>Minimum Recommended Price</label><span id="minmrp">Rs. {this.state.minprice}</span>
                         </div>
                         
                       </div>
                       
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-12 button text-center">
                   <button
                     className="btn btn-primary"
                     onClick={this.handleResult1}
                   >
                     Calculate
                   </button>
                  
                   
                 </div>
                 <div
                   className="bottombox col-lg-12 display_values calculation-section"
                   style={{ minHeight: 231 }}
                 >
                   <div className="row align-items-center">
                     <div className="col-lg-12">
                       <div className="row">
                         <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding">
                           <label className="heading">Channel</label>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                           <span className="heading">
                             Author earnings per copy
                           </span>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-12 row-class paddingtop ">
                       <div className="row">
                         <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding">
                           <label>BFC Publications</label>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding">
                           <span className="delimiter"></span>
                           <span id="npauthorprofit" className="result value">
                             Rs. {this.state.bfcprice}
                           </span>
                         </div>
                       </div>
                     </div>
                     <div className="col-lg-12 row-class paddingtop">
                       <div className="row">
                         <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding">
                           <label>Other Stores</label>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding">
                           <span className="delimiter"></span>
                           <span
                             id="flipkartauthorprofit"
                             className="result value"
                           >
                             Rs.  {this.state.otherprice}
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               {/*</form>*/}
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div className="col-lg-12 faq-block" style={{}}>
     <div className="row guidedfaq greybg">
       <div className="container">
         <hr/>
         <div className="row">
           <div className="col-lg-12 mx-auto">
             <h4>Frequently Asked Questions</h4>
             <ul>
               <li>
                 <strong>What is Recommended Minimum MRP?</strong>
                 <p>
                   Recommended Minimum MRP is the lowest MRP that can be set
                   for your book. This is calculated taking into account the
                   printing and distribution costs.
                 </p>
               </li>
               <li>
                 <strong>How do I set the MRP for my book?</strong>
                 <p>
                   You can set any number higher than the Recommended Minimum
                   Price for your book. As soon as you type an MRP, you get to
                   see how much you will earn via each of our sales channels.
                 </p>
               </li>
               <li>
                 <strong>How is author profit calculated?</strong>
                 <p>
                   Profit is calculated as the difference between the MRP and
                   expenses incurred during the production and distribution of
                   the book. Profit = MRP – Expenses (Production Cost +
                   Distribution Cost). Authors get 100% of the net profits from
                   the book.
                 </p>
               </li>
               <li>
                 <strong>
                   Why is the profit higher when I sell via the BFC Publications
                   Bookstore?
                 </strong>
                 <p>
                   Booksellers and eCommerce websites usually charge a 50%
                   distribution fee on MRP on the books they sell. Hence, the
                   earnings you receive is lower than what you receive via our
                   own bookstore, where lower distribution fees are levied and
                   this advantage translates into higher profits for the
                   author.
                 </p>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>{" "}
 </div>
</div>    
<hr/>


</ProductWrapper>

            }
          </div>
         
        
            )
    }

}
const ProductWrapper = styled.div`
.card1{
  border-color:transparent;
  transition:all 1s linear;
  COLOR: #f1e8e8;
  background-color: #67a7d3;
  border-radius: 87px;
}
.card2{
  border-color:transparent;
  transition:all 1s linear;
  COLOR: #f1e8e8;
  background-color: #67a7d3;
  border-radius: 87px;
}
.margin-top-20{
  margin-top:40px;
}
.main-heading-rock{
  COLOR: #000;
  background-color: #fff;
  font-size:40px;
  font-weight:100px;
}
.calculation-section{
  border-radius: 45px;
    border-color: white;
    border-style: solid;
    min-height: 0px !important;
}
.border-bottom{
  border-bottom: 1px solid;
  padding:27px;
  background-color: #1b8bcc;
  color:#000;
}
.border-bottom1{
  border-bottom: 1px solid;
  padding:27px;
  background-color: #1b8bcc;
  color:#000;
}
`;
export default Roy1