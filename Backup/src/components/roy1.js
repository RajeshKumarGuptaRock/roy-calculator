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

   <div className="container ">
     <h2 className="text-center mt-5">Calculate Author Earnings</h2>
     <hr className="border-bottom-info-2 mb-5"/>
     </div>
   <div className="container mb-5">
     <div className="row">

     <div className="col-md-6">
        <div className="card shadow ">
            <div className="card-header text-center font-weight-bold text-light bg-info text-uppercase">
                Enter Book Deatils
            </div>
            <div className="card-body">
               
                   <div className="form-group row">
                <label for="No of Pages" className="col-sm-5 col-form-label">Number Of Pages</label>
                <div className="col-sm-7">
               <input
                               type="number"
                               onChange={this.handleOnChange}
                               id="npages"
                               name="npages"
                               value={this.state.npages}
                               ref="npages"
                               className="form-control"
                               required
                               
                             />

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
                   
                    <div className="form-group row">
                <label for="No of Pages" className="col-sm-5 col-form-label">Book Format </label>
                <div className="col-sm-7">
              
                     <select                                         
                               onChange={this.handleChangeSelect}   
                               value={this.state.value}  
                               name="bookFormat"
                               id="bookFormat" 
                               ref="bookFormat"  
                               required  
                               className="form-control"                                  

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
                   
                    <div className="form-group row">
                <label for="No of Pages" className="col-sm-5 col-form-label">Book Size </label>
                <div className="col-sm-7">
                 <select id="booksize" name="booksize" ref="bookSize" required  className="form-control">
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
                   
                    <div className="form-group row">
                <label for="No of Pages" className="col-sm-5 col-form-label">Book Type </label>
                <div className="col-sm-7">
                  <select id="bookColor" name="bookcolor"  ref="bookColor"  className="form-control" required>
                               <option value="bw" selected="selected">
                                 Black &amp; White
                               </option>
                               {/*<option value="color">Full Color</option>*/}
                             </select>
                </div>    
                   </div>
                 <button                                  
                       className="form-control btn btn-info font-weight-bold mt-4"
                       onClick={this.handleResult}
                     >
                       Calculate
                     </button>
                   
              
            </div>
            <div className="card-footer">
                <table className="table">
                    <tr>
                    <th>Production Cost</th>
                    <td>:</td>
                    <td> <span className="result prodcostx" id="prodcost">
                               Rs. {this.state.prodcostx}
                             </span></td>
                    </tr>
                    
                     <tr>
                    <th>Author copies -at subsidized price</th>
                    <td>:</td>
                    <td><span className="value prodsubcostx" id="prodsubcostx">
                             Rs. {this.state.prodsubcostx}
                             </span></td>
                    </tr>
                    
                     <tr>
                    <td colspan="3">This is the price at which you can purchase your own book the minimum number of copies per order is 20.</td>
                    </tr>
                </table>
            </div>
         </div>
     </div> 
     <div class="col-md-6 mt-sm">
               <div class="card shadow ">
                  <div class="card-header text-center font-weight-bold text-light bg-info text-uppercase">
                     Author Earning Calculator
                  </div>
                  <div class="card-body">
                   
                        <tr>
                           <td colspan="3">Set a selling price above the Minimum Selling Price
                         and hit 'Calculate' to see how much you earn.</td>
                        </tr>
                        
                        <br/> 
                        <div class="form-group row">
                           <label for="No of Pages" class="col-sm-5 col-form-label">Minimum Recommended Price</label>
                           <div class="col-sm-7">
                              <input type="text" class="form-control" id="" placeholder="" value= {this.state.minprice} disabled/>
                           </div>
                        </div>
                        <div class="form-group row">
                           <label for="No of Pages" class="col-sm-5 col-form-label"> Set Selling Price (INR)</label>
                           <div class="col-sm-7">
                             
                              <input
                             type="number"
                              class="form-control"
                             onChange={this.handleOnChange1}
                             id="setmrp"
                             name="setmrp"
                             value={this.state.setmrp}
                             ref="setmrp"
                             required
                           />
                           </div>
                        </div>
                       
                        <button
                     className="form-control btn btn-info"
                     onClick={this.handleResult1}
                   >
                     Calculate
                   </button>
                     
                  </div>
                  <div class="card-footer pb-5">
                     <table class="table">
                        <tr>
                           <th>Channel</th>
                           <td></td>
                           <th>Author Earning Per Copy</th>
                        </tr>
                        <tr>
                           <th>BFC Publications</th>
                           <td>: </td>
                           <td> Rs. {this.state.bfcprice}</td>
                        </tr>
                        <tr>
                           <th>Other Stores</th>
                           <td>:</td>
                           <td>Rs. {this.state.otherprice} </td>
                        </tr>
                     </table>
                  </div>
               </div>
            </div>
       
     
   </div>
   </div>
   <div className="col-lg-12 faq-block" style={{}}>
     <div className="row guidedfaq greybg">
       <div className="container">
       
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
.card-footer{
  background-color: #deeff7;
  }
  @media only screen and (max-width: 600px) {
  .mt-sm {
  margin-top: 4rem;
  }
  }
`;
export default Roy1