import React, { Component } from 'react';
import styled from 'styled-components';

class royaltyCalculator extends Component {
    constructor() {
        super();
        
        this.state = {
          number1: 10,
          number2: 20,
          result: '',
          npages:'',
          setmrp:'',
          bookformat:'',
          fields: {},
          errors: {},
          hidden:'true',
          hiddenProductioncast:"true",
          
        };
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
      }
      handleValidation(){
        let fields = this.refs.npages.value;
        let setminprice = this.refs.setmrp.value*1;
        
        let errors = {};
        let formIsValid = true;
    
        //No of pages
        if(fields == ''){
          formIsValid = false;
          // this.setState({otherprice:});
          // this.setState({bfcprice: });
          // otherprice = '';
          // bfcprice = '';
          errors["name"] = "Please enter the valid number of pages";
        }
        if(fields <= 50){
          formIsValid = false;
          errors["name"] = "Number of pages should be more than 50.";
        }

    
        this.setState({errors: errors});
        return formIsValid;
      }
      handleValidation1(){

        let setminprice = this.refs.setmrp.value*1;
        let minpricehidden = this.refs.minpricehidden.value;
        let errors = {};
        let formIsValid = true;
      
        //Min price
        var setbfcprice =  0;
        var setohterprice =  0;
        if(setminprice == ''){
          formIsValid = false;
          this.setState({
            bfcprice: setbfcprice,
            otherprice:setohterprice
            
          }); 
          errors["setminprice"] = "Please enter the valid MRP";
        }

        if(setminprice < minpricehidden){
          var setbfcprice =  0;
        var setohterprice =  0;
          formIsValid = false;
          this.setState({
            bfcprice: setbfcprice,
            otherprice:setohterprice
            
          }); 
          errors["setminprice"] = "MRP should be more than recommended price";
        }

        if(minpricehidden == 0 || setminprice < minpricehidden){
          formIsValid = false;
          var setbfcprice =  0;
        var setohterprice =  0;
          this.setState({
            bfcprice: setbfcprice,
            otherprice:setohterprice
            
          }); 
          if(setminprice < minpricehidden){
            errors["setminprice"] = "MRP should be more than recommended price";
          }
          if(minpricehidden == 0){
            errors["setminprice"] = "you have to first calculate production cast";
          }
          
        }
       
    
        this.setState({errors: errors});
        return formIsValid;
      }
      handleOnChange = event => {
     
        this.setState({npages: event.target.value});

      }

    //  handleOnChange1(event){ 
      handleOnChange1 = event => { 
        console.log("ffff Line48",event.target.value);
        this.setState({selmrp: event.target.value});
         this.setState({setmrp: event.target.value*1});

      }


      handleChangeSelect(event) {
         //alert(event.target.value);
        // rajesh
        var footerhidden = '';
        var productioncast = '';
        if(event.target.value == 'Paperback'){
          footerhidden = "true";
          productioncast = "true";
        }
        if(event.target.value == 'Ebook'){
          footerhidden = "false";
          productioncast = "false";
        }

       
        this.setState({
          hidden: footerhidden,
          hiddenProductioncast:productioncast
        });
         console.log(event.target.value);
         this.setState({bookFormatEbook: event.target.value});
         this.setState({bookFormatPaperback: event.target.value});
      }

      handleSubmitSelect(event) {
        alert('Your favorite flavor1111 is: ' + this.state.value);
        event.preventDefault();
      }

      handleResult = e => {
        if(this.handleValidation()){
          let booktype=0;
          if(this.refs.bookFormat.value=='Paperback'){
            //alert(bookFormat);
              // if(this.refs.npages.value <= 72){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log("<= 72 5x8")
              //     booktype=0.605
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.718
              //     console.log(" <= 72 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.82
              //     console.log(" <= 72 8.5x11")
              //   }else{}
              
              // }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 73 <=96 5x8")
              //     booktype=0.605
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.718
              //     console.log(" >= 73 <=96 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //       booktype=0.71
              //       console.log(" >= 73 <=96 8.5x11")
              //     }else{}
              
              // }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 97 <=108 5x8")
              //     booktype=0.533
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.602
              //     console.log(">= 97 <=108 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.71
              //     console.log(" >= 97 <=108 8.5x11")
              //   }else{}
              
              // }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 109 <=128 5x8")
              //     booktype=0.533
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.602
              //     console.log(">= 109 <=128 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.67
              //     console.log(">= 109 <=128 8.5x11")
              //   }else{}
              
              // }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
              //     if(this.refs.bookSize.value =='5x8'){
              //       console.log(">= 129 <=148 5x8")
              //       booktype=0.460
              //     }else if(this.refs.bookSize.value =='6x9'){
              //       booktype=0.573
              //       console.log(">= 129 <=148 6x9")
              //     }else if(this.refs.bookSize.value =='8x11'){
              //       booktype=0.65
              //       console.log(">= 129 <=148 8.5x11")
              //     }else{}
                
              // }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 149 <=192 5x8")
              //     booktype=0.460
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.573
              //     console.log(">= 149 <=192 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.59
              //     console.log(">= 149 <=192 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 193 <=216 5x8")
              //     booktype=0.424
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.537
              //     console.log(">= 193 <=216 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.59
              //     console.log(">= 193 <=216 8.5x11")
              //   }else{}
        
              // }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
              
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log("5x8 >= 217  <=252  ")
              //     booktype=0.424
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.537
              //     console.log(">= 217  <=252 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.56
              //     console.log(">= 217  <=252 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){
            
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 253 <=256 5x8")
              //     booktype=0.424
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.537
              //     console.log(">= 253 <=256 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.56
              //     console.log(">= 253 <=2568.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
              
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 257 <=276 5x8")
              //     booktype=0.413
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.515
              //     console.log(">= 257 <=276 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.56
              //     console.log(">= 257 <=276 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 277 <=320 5x8")
              //     booktype=0.413
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.515
              //     console.log(">= 277 <=320 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.56
              //     console.log(">= 277 <=320 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
                
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 321 <=352 5x8")
              //     booktype=0.405
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(" >= 321 <=3526x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.54
              //     console.log(" >= 321 <=3528.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
              
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 353 <=384 5x8")
              //     booktype=0.405
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(">= 353 <=384 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.53
              //     console.log(">= 353 <=384 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
              
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 385  <=432  5x8")
              //     booktype=0.405
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(">= 385  <=432  6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.52
              //     console.log(">= 385  <=432  8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
              
              //   if(this.refs.bookSize.value =='8.5x11'){
              //     booktype=0.51
              //     console.log(">= 433 <=492 8.5x11")
              //   }if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 433 <=492 5x8")
              //     booktype=0.405
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(">= 433 <=492 6x9")
              //   }else{
                  
              //   }
              // }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
              
              //   if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.41
              //     console.log(">= 493 <=548 6x9")
              //   }if(this.refs.bookSize.value =='5x8'){
              //   booktype=0.405
              //   console.log(">= 493 <=548 6x9")
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(">= 493 <=548 6x9")
              //   }else{

              //   }
              // }else if(this.refs.npages.value >=549 ){
              //   if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.51
              //     console.log(">= 493 <=548 6x9")
              //   }if(this.refs.bookSize.value =='5x8'){
              //   booktype=0.405
              //   console.log(">= 493 <=548 6x9")
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(">= 493 <=548 6x9")
              //   }else{

              //   }
              // }else{}
              if(this.refs.npages.value <= 72){
                if(this.refs.bookSize.value =='5x8'){
                  console.log("<= 72 5x8")
                  booktype=0.605
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.718
                  console.log(" <= 72 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.85
                  console.log(" <= 72 8.5x11")
                }else{}
                
              }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 73 <=96 5x8")
                  booktype=0.605
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.718
                  console.log(" >= 73 <=96 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                    booktype=0.85
                    console.log(" >= 73 <=96 8.5x11")
                  }else{}
    
              }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 97 <=108 5x8")
                  booktype=0.533
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.602
                  console.log(">= 97 <=108 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.74
                  console.log(" >= 97 <=108 8.5x11")
                }else{}
    
              }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 109 <=128 5x8")
                  booktype=0.533
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.602
                  console.log(">= 109 <=128 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.70
                  console.log(">= 109 <=128 8.5x11")
                }else{}
    
              }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
                  if(this.refs.bookSize.value =='5x8'){
                    console.log(">= 129 <=148 5x8")
                    booktype=0.460
                  }else if(this.refs.bookSize.value =='6x9'){
                    booktype=0.573
                    console.log(">= 129 <=148 6x9")
                  }else if(this.refs.bookSize.value =='8x11'){
                    booktype=0.68
                    console.log(">= 129 <=148 8.5x11")
                  }else{}
                
              }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(">= 149 <=192 5x8")
                  booktype=0.460
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.573
                  console.log(">= 149 <=192 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.62
                  console.log(">= 149 <=192 8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(">= 193 <=216 5x8")
                  booktype=0.424
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.537
                  console.log(">= 193 <=216 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.62
                  console.log(">= 193 <=216 8.5x11")
                }else{}
    
              }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
                
                if(this.refs.bookSize.value =='5x8'){
                  console.log("5x8 >= 217  <=252  ")
                  booktype=0.424
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.537
                  console.log(">= 217  <=252 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.59
                  console.log(">= 217  <=252 8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){
    
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 253 <=256 5x8")
                  booktype=0.424
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.537
                  console.log(">= 253 <=256 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.59
                  console.log(">= 253 <=2568.5x11")
                }else{}
              }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
                
                if(this.refs.bookSize.value =='5x8'){
                  console.log(">= 257 <=276 5x8")
                  booktype=0.413
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.515
                  console.log(">= 257 <=276 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.59
                  console.log(">= 257 <=276 8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 277 <=320 5x8")
                  booktype=0.413
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.515
                  console.log(">= 277 <=320 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.57
                  console.log(">= 277 <=320 8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
                
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 321 <=352 5x8")
                  booktype=0.405
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(" >= 321 <=3526x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.57
                  console.log(" >= 321 <=3528.5x11")
                }else{}
              }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
                
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 353 <=384 5x8")
                  booktype=0.405
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(">= 353 <=384 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.56
                  console.log(">= 353 <=384 8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
                
                if(this.refs.bookSize.value =='5x8'){
                  console.log(">= 385  <=432  5x8")
                  booktype=0.405
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(">= 385  <=432  6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.55
                  console.log(">= 385  <=432  8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
                
                if(this.refs.bookSize.value =='8x11'){
                  booktype=0.54
                  console.log(">= 433 <=492 8.5x11")
                }if(this.refs.bookSize.value =='5x8'){
                  console.log(">= 433 <=492 5x8")
                  booktype=0.405
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(">= 433 <=492 6x9")
                }else{
                  
                }
              }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
                
                if(this.refs.bookSize.value =='8x11'){
                  booktype=0.54
                  console.log(">= 493 <=548 6x9")
                }if(this.refs.bookSize.value =='5x8'){
                  booktype=0.405
                  console.log(">= 493 <=548 6x9")
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(">= 493 <=548 6x9")
                }else{
    
                }
              }else if(this.refs.npages.value >=549 ){
                if(this.refs.bookSize.value =='8x11'){
                  booktype=0.54
                  console.log(">= 493 <=548 6x9")
                }if(this.refs.bookSize.value =='5x8'){
                  booktype=0.405
                  console.log(">= 493 <=548 6x9")
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(">= 493 <=548 6x9")
                }else{
    
                }
              }else{}
              var prodcost = this.state.npages * booktype + 8.5;
              //prodcost = parseFloat(prodcost).toFixed(2);
              var prodsubpercentage = (prodcost*15)/100

              var prodsubpercentagetot = prodcost + prodsubpercentage
              prodsubpercentagetot = parseFloat(prodsubpercentagetot).toFixed(2);
              var minprice = prodcost*2.5
              minprice = parseFloat(minprice).toFixed(2);
          }else if(this.refs.bookFormat.value=='Ebook'){
            //alert(bookFormat);
              // if(this.refs.npages.value <= 72){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log("<= 72 5x8")
              //     booktype=0.605
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.718
              //     console.log(" <= 72 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.82
              //     console.log(" <= 72 8.5x11")
              //   }else{}
              
              // }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 73 <=96 5x8")
              //     booktype=0.605
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.718
              //     console.log(" >= 73 <=96 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //       booktype=0.71
              //       console.log(" >= 73 <=96 8.5x11")
              //     }else{}
              
              // }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 97 <=108 5x8")
              //     booktype=0.533
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.602
              //     console.log(">= 97 <=108 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.71
              //     console.log(" >= 97 <=108 8.5x11")
              //   }else{}
              
              // }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 109 <=128 5x8")
              //     booktype=0.533
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.602
              //     console.log(">= 109 <=128 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.67
              //     console.log(">= 109 <=128 8.5x11")
              //   }else{}
              
              // }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
              //     if(this.refs.bookSize.value =='5x8'){
              //       console.log(">= 129 <=148 5x8")
              //       booktype=0.460
              //     }else if(this.refs.bookSize.value =='6x9'){
              //       booktype=0.573
              //       console.log(">= 129 <=148 6x9")
              //     }else if(this.refs.bookSize.value =='8x11'){
              //       booktype=0.65
              //       console.log(">= 129 <=148 8.5x11")
              //     }else{}
                
              // }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 149 <=192 5x8")
              //     booktype=0.460
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.573
              //     console.log(">= 149 <=192 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.59
              //     console.log(">= 149 <=192 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 193 <=216 5x8")
              //     booktype=0.424
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.537
              //     console.log(">= 193 <=216 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.59
              //     console.log(">= 193 <=216 8.5x11")
              //   }else{}
        
              // }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
              
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log("5x8 >= 217  <=252  ")
              //     booktype=0.424
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.537
              //     console.log(">= 217  <=252 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.56
              //     console.log(">= 217  <=252 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){
            
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 253 <=256 5x8")
              //     booktype=0.424
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.537
              //     console.log(">= 253 <=256 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.56
              //     console.log(">= 253 <=2568.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
              
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 257 <=276 5x8")
              //     booktype=0.413
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.515
              //     console.log(">= 257 <=276 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.56
              //     console.log(">= 257 <=276 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 277 <=320 5x8")
              //     booktype=0.413
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.515
              //     console.log(">= 277 <=320 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.56
              //     console.log(">= 277 <=320 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
                
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 321 <=352 5x8")
              //     booktype=0.405
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(" >= 321 <=3526x9")
              //   }else if(this.refs.bookSize.value =='8.5x11'){
              //     booktype=0.54
              //     console.log(" >= 321 <=3528.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
              
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 353 <=384 5x8")
              //     booktype=0.405
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(">= 353 <=384 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.53
              //     console.log(">= 353 <=384 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
              
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 385  <=432  5x8")
              //     booktype=0.405
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(">= 385  <=432  6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.52
              //     console.log(">= 385  <=432  8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
              
              //   if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.51
              //     console.log(">= 433 <=492 8.5x11")
              //   }if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 433 <=492 5x8")
              //     booktype=0.405
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(">= 433 <=492 6x9")
              //   }else{
                  
              //   }
              // }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
              
              //   if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.51
              //     console.log(">= 493 <=548 6x9")
              //   }if(this.refs.bookSize.value =='5x8'){
              //   booktype=0.405
              //   console.log(">= 493 <=548 6x9")
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(">= 493 <=548 6x9")
              //   }else{

              //   }
              // }else if(this.refs.npages.value >=549 ){
              //   if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.51
              //     console.log(">= 493 <=548 6x9")
              //   }if(this.refs.bookSize.value =='5x8'){
              //   booktype=0.405
              //   console.log(">= 493 <=548 6x9")
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.500
              //     console.log(">= 493 <=548 6x9")
              //   }else{}
              // }else{}
              // if(this.refs.npages.value <= 72){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log("<= 72 5x8")
              //     booktype=0.505
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.618
              //     console.log(" <= 72 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.85
              //     console.log(" <= 72 8.5x11")
              //   }else{}
                
              // }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 73 <=96 5x8")
              //     booktype=0.505
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.618
              //     console.log(" >= 73 <=96 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //       booktype=0.74
              //       console.log(" >= 73 <=96 8.5x11")
              //     }else{}
    
              // }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 97 <=108 5x8")
              //     booktype=0.433
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.502
              //     console.log(">= 97 <=108 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.74
              //     console.log(" >= 97 <=108 8.5x11")
              //   }else{}
    
              // }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 109 <=128 5x8")
              //     booktype=0.433
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.502
              //     console.log(">= 109 <=128 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.70
              //     console.log(">= 109 <=128 8.5x11")
              //   }else{}
    
              // }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
              //     if(this.refs.bookSize.value =='5x8'){
              //       console.log(">= 129 <=148 5x8")
              //       booktype=0.360
              //     }else if(this.refs.bookSize.value =='6x9'){
              //       booktype=0.473
              //       console.log(">= 129 <=148 6x9")
              //     }else if(this.refs.bookSize.value =='8x11'){
              //       booktype=0.68
              //       console.log(">= 129 <=148 8.5x11")
              //     }else{}
                
              // }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 149 <=192 5x8")
              //     booktype=0.360
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.473
              //     console.log(">= 149 <=192 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.62
              //     console.log(">= 149 <=192 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 193 <=216 5x8")
              //     booktype=0.324
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.437
              //     console.log(">= 193 <=216 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.62
              //     console.log(">= 193 <=216 8.5x11")
              //   }else{}
    
              // }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
                
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log("5x8 >= 217  <=252  ")
              //     booktype=0.324
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.437
              //     console.log(">= 217  <=252 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.59
              //     console.log(">= 217  <=252 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){
    
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 253 <=256 5x8")
              //     booktype=0.324
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.437
              //     console.log(">= 253 <=256 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.59
              //     console.log(">= 253 <=2568.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
                
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 257 <=276 5x8")
              //     booktype=0.313
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.415
              //     console.log(">= 257 <=276 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.59
              //     console.log(">= 257 <=276 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 277 <=320 5x8")
              //     booktype=0.313
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.415
              //     console.log(">= 277 <=320 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.57
              //     console.log(">= 277 <=320 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
                
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 321 <=352 5x8")
              //     booktype=0.305
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.400
              //     console.log(" >= 321 <=3526x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.57
              //     console.log(" >= 321 <=3528.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
                
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(" >= 353 <=384 5x8")
              //     booktype=0.305
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.400
              //     console.log(">= 353 <=384 6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.56
              //     console.log(">= 353 <=384 8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
                
              //   if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 385  <=432  5x8")
              //     booktype=0.305
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.400
              //     console.log(">= 385  <=432  6x9")
              //   }else if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.55
              //     console.log(">= 385  <=432  8.5x11")
              //   }else{}
              // }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
                
              //   if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.54
              //     console.log(">= 433 <=492 8.5x11")
              //   }if(this.refs.bookSize.value =='5x8'){
              //     console.log(">= 433 <=492 5x8")
              //     booktype=0.305
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.400
              //     console.log(">= 433 <=492 6x9")
              //   }else{
                  
              //   }
              // }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
                
              //   if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.54
              //     console.log(">= 493 <=548 6x9")
              //   }if(this.refs.bookSize.value =='5x8'){
              //     booktype=0.305
              //     console.log(">= 493 <=548 6x9")
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.400
              //     console.log(">= 493 <=548 6x9")
              //   }else{
    
              //   }
              // }else if(this.refs.npages.value >=549 ){
              //   if(this.refs.bookSize.value =='8x11'){
              //     booktype=0.54
              //     console.log(">= 493 <=548 6x9")
              //   }if(this.refs.bookSize.value =='5x8'){
              //     booktype=0.305
              //     console.log(">= 493 <=548 6x9")
              //   }else if(this.refs.bookSize.value =='6x9'){
              //     booktype=0.400
              //     console.log(">= 493 <=548 6x9")
              //   }else{
    
              //   }
              // }else{}
              if(this.refs.npages.value <= 72){
                if(this.refs.bookSize.value =='5x8'){
                  console.log("<= 72 5x8")
                  booktype=0.605
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.718
                  console.log(" <= 72 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.85
                  console.log(" <= 72 8.5x11")
                }else{}
                
              }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 73 <=96 5x8")
                  booktype=0.605
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.718
                  console.log(" >= 73 <=96 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                    booktype=0.85
                    console.log(" >= 73 <=96 8.5x11")
                  }else{}
    
              }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 97 <=108 5x8")
                  booktype=0.533
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.602
                  console.log(">= 97 <=108 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.74
                  console.log(" >= 97 <=108 8.5x11")
                }else{}
    
              }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 109 <=128 5x8")
                  booktype=0.533
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.602
                  console.log(">= 109 <=128 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.70
                  console.log(">= 109 <=128 8.5x11")
                }else{}
    
              }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
                  if(this.refs.bookSize.value =='5x8'){
                    console.log(">= 129 <=148 5x8")
                    booktype=0.460
                  }else if(this.refs.bookSize.value =='6x9'){
                    booktype=0.573
                    console.log(">= 129 <=148 6x9")
                  }else if(this.refs.bookSize.value =='8x11'){
                    booktype=0.68
                    console.log(">= 129 <=148 8.5x11")
                  }else{}
                
              }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(">= 149 <=192 5x8")
                  booktype=0.460
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.573
                  console.log(">= 149 <=192 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.62
                  console.log(">= 149 <=192 8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(">= 193 <=216 5x8")
                  booktype=0.424
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.537
                  console.log(">= 193 <=216 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.62
                  console.log(">= 193 <=216 8.5x11")
                }else{}
    
              }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
                
                if(this.refs.bookSize.value =='5x8'){
                  console.log("5x8 >= 217  <=252  ")
                  booktype=0.424
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.537
                  console.log(">= 217  <=252 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.59
                  console.log(">= 217  <=252 8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){
    
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 253 <=256 5x8")
                  booktype=0.424
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.537
                  console.log(">= 253 <=256 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.59
                  console.log(">= 253 <=2568.5x11")
                }else{}
              }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
                
                if(this.refs.bookSize.value =='5x8'){
                  console.log(">= 257 <=276 5x8")
                  booktype=0.413
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.515
                  console.log(">= 257 <=276 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.59
                  console.log(">= 257 <=276 8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 277 <=320 5x8")
                  booktype=0.413
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.515
                  console.log(">= 277 <=320 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.57
                  console.log(">= 277 <=320 8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
                
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 321 <=352 5x8")
                  booktype=0.405
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(" >= 321 <=3526x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.57
                  console.log(" >= 321 <=3528.5x11")
                }else{}
              }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
                
                if(this.refs.bookSize.value =='5x8'){
                  console.log(" >= 353 <=384 5x8")
                  booktype=0.405
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(">= 353 <=384 6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.56
                  console.log(">= 353 <=384 8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
                
                if(this.refs.bookSize.value =='5x8'){
                  console.log(">= 385  <=432  5x8")
                  booktype=0.405
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(">= 385  <=432  6x9")
                }else if(this.refs.bookSize.value =='8x11'){
                  booktype=0.55
                  console.log(">= 385  <=432  8.5x11")
                }else{}
              }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
                
                if(this.refs.bookSize.value =='8x11'){
                  booktype=0.54
                  console.log(">= 433 <=492 8.5x11")
                }if(this.refs.bookSize.value =='5x8'){
                  console.log(">= 433 <=492 5x8")
                  booktype=0.405
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(">= 433 <=492 6x9")
                }else{
                  
                }
              }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
                
                if(this.refs.bookSize.value =='8x11'){
                  booktype=0.54
                  console.log(">= 493 <=548 6x9")
                }if(this.refs.bookSize.value =='5x8'){
                  booktype=0.405
                  console.log(">= 493 <=548 6x9")
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(">= 493 <=548 6x9")
                }else{
    
                }
              }else if(this.refs.npages.value >=549 ){
                if(this.refs.bookSize.value =='8x11'){
                  booktype=0.54
                  console.log(">= 493 <=548 6x9")
                }if(this.refs.bookSize.value =='5x8'){
                  booktype=0.405
                  console.log(">= 493 <=548 6x9")
                }else if(this.refs.bookSize.value =='6x9'){
                  booktype=0.500
                  console.log(">= 493 <=548 6x9")
                }else{
    
                }
              }else{}
              var prodcost = this.state.npages * booktype + 8.5;
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

        }else{
          this.setState({
            prodcostx: 0,
            prodsubcostx: 0,
            minprice:0
          });
         
        }
       
       
      }


      handleResult1 = e => {
        if(this.handleValidation1()){
          let booktype=0;
          if(this.refs.bookFormat.value=='Paperback'){
          // if(this.refs.npages.value <= 72){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log("<= 72 5x8")
          //     booktype=0.505
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.618
          //     console.log(" <= 72 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.85
          //     console.log(" <= 72 8.5x11")
          //   }else{}
            
          // }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 73 <=96 5x8")
          //     booktype=0.505
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.618
          //     console.log(" >= 73 <=96 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //       booktype=0.74
          //       console.log(" >= 73 <=96 8.5x11")
          //     }else{}

          // }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 97 <=108 5x8")
          //     booktype=0.433
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.502
          //     console.log(">= 97 <=108 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.74
          //     console.log(" >= 97 <=108 8.5x11")
          //   }else{}

          // }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 109 <=128 5x8")
          //     booktype=0.433
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.502
          //     console.log(">= 109 <=128 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.70
          //     console.log(">= 109 <=128 8.5x11")
          //   }else{}

          // }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
          //     if(this.refs.bookSize.value =='5x8'){
          //       console.log(">= 129 <=148 5x8")
          //       booktype=0.360
          //     }else if(this.refs.bookSize.value =='6x9'){
          //       booktype=0.473
          //       console.log(">= 129 <=148 6x9")
          //     }else if(this.refs.bookSize.value =='8x11'){
          //       booktype=0.68
          //       console.log(">= 129 <=148 8.5x11")
          //     }else{}
            
          // }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(">= 149 <=192 5x8")
          //     booktype=0.360
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.473
          //     console.log(">= 149 <=192 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.62
          //     console.log(">= 149 <=192 8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(">= 193 <=216 5x8")
          //     booktype=0.324
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.437
          //     console.log(">= 193 <=216 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.62
          //     console.log(">= 193 <=216 8.5x11")
          //   }else{}

          // }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
            
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log("5x8 >= 217  <=252  ")
          //     booktype=0.324
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.437
          //     console.log(">= 217  <=252 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.59
          //     console.log(">= 217  <=252 8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){

          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 253 <=256 5x8")
          //     booktype=0.324
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.437
          //     console.log(">= 253 <=256 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.59
          //     console.log(">= 253 <=2568.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
            
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(">= 257 <=276 5x8")
          //     booktype=0.313
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.415
          //     console.log(">= 257 <=276 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.59
          //     console.log(">= 257 <=276 8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 277 <=320 5x8")
          //     booktype=0.313
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.415
          //     console.log(">= 277 <=320 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.57
          //     console.log(">= 277 <=320 8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
            
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 321 <=352 5x8")
          //     booktype=0.305
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(" >= 321 <=3526x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.57
          //     console.log(" >= 321 <=3528.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
            
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 353 <=384 5x8")
          //     booktype=0.305
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(">= 353 <=384 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.56
          //     console.log(">= 353 <=384 8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
            
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(">= 385  <=432  5x8")
          //     booktype=0.305
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(">= 385  <=432  6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.55
          //     console.log(">= 385  <=432  8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
            
          //   if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.54
          //     console.log(">= 433 <=492 8.5x11")
          //   }if(this.refs.bookSize.value =='5x8'){
          //     console.log(">= 433 <=492 5x8")
          //     booktype=0.305
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(">= 433 <=492 6x9")
          //   }else{
              
          //   }
          // }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
            
          //   if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.54
          //     console.log(">= 493 <=548 6x9")
          //   }if(this.refs.bookSize.value =='5x8'){
          //     booktype=0.305
          //     console.log(">= 493 <=548 6x9")
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(">= 493 <=548 6x9")
          //   }else{

          //   }
          // }else if(this.refs.npages.value >=549 ){
          //   if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.54
          //     console.log(">= 493 <=548 6x9")
          //   }if(this.refs.bookSize.value =='5x8'){
          //     booktype=0.305
          //     console.log(">= 493 <=548 6x9")
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(">= 493 <=548 6x9")
          //   }else{

          //   }
          // }else{}
          if(this.refs.npages.value <= 72){
            if(this.refs.bookSize.value =='5x8'){
              console.log("<= 72 5x8")
              booktype=0.605
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.718
              console.log(" <= 72 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.85
              console.log(" <= 72 8.5x11")
            }else{}
            
          }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 73 <=96 5x8")
              booktype=0.605
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.718
              console.log(" >= 73 <=96 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
                booktype=0.85
                console.log(" >= 73 <=96 8.5x11")
              }else{}

          }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 97 <=108 5x8")
              booktype=0.533
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.602
              console.log(">= 97 <=108 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.74
              console.log(" >= 97 <=108 8.5x11")
            }else{}

          }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 109 <=128 5x8")
              booktype=0.533
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.602
              console.log(">= 109 <=128 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.70
              console.log(">= 109 <=128 8.5x11")
            }else{}

          }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
              if(this.refs.bookSize.value =='5x8'){
                console.log(">= 129 <=148 5x8")
                booktype=0.460
              }else if(this.refs.bookSize.value =='6x9'){
                booktype=0.573
                console.log(">= 129 <=148 6x9")
              }else if(this.refs.bookSize.value =='8x11'){
                booktype=0.68
                console.log(">= 129 <=148 8.5x11")
              }else{}
            
          }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 149 <=192 5x8")
              booktype=0.460
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.573
              console.log(">= 149 <=192 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.62
              console.log(">= 149 <=192 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 193 <=216 5x8")
              booktype=0.424
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.537
              console.log(">= 193 <=216 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.62
              console.log(">= 193 <=216 8.5x11")
            }else{}

          }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log("5x8 >= 217  <=252  ")
              booktype=0.424
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.537
              console.log(">= 217  <=252 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.59
              console.log(">= 217  <=252 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){

            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 253 <=256 5x8")
              booktype=0.424
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.537
              console.log(">= 253 <=256 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.59
              console.log(">= 253 <=2568.5x11")
            }else{}
          }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 257 <=276 5x8")
              booktype=0.413
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.515
              console.log(">= 257 <=276 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.59
              console.log(">= 257 <=276 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 277 <=320 5x8")
              booktype=0.413
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.515
              console.log(">= 277 <=320 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.57
              console.log(">= 277 <=320 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 321 <=352 5x8")
              booktype=0.405
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(" >= 321 <=3526x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.57
              console.log(" >= 321 <=3528.5x11")
            }else{}
          }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 353 <=384 5x8")
              booktype=0.405
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(">= 353 <=384 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.56
              console.log(">= 353 <=384 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 385  <=432  5x8")
              booktype=0.405
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(">= 385  <=432  6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.55
              console.log(">= 385  <=432  8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
            
            if(this.refs.bookSize.value =='8x11'){
              booktype=0.54
              console.log(">= 433 <=492 8.5x11")
            }if(this.refs.bookSize.value =='5x8'){
              console.log(">= 433 <=492 5x8")
              booktype=0.405
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(">= 433 <=492 6x9")
            }else{
              
            }
          }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
            
            if(this.refs.bookSize.value =='8x11'){
              booktype=0.54
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
              booktype=0.405
              console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else if(this.refs.npages.value >=549 ){
            if(this.refs.bookSize.value =='8x11'){
              booktype=0.54
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
              booktype=0.405
              console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else{}
          // var prodcost = this.state.npages * booktype + 8.5;
          // var prodsubpercentage = (prodcost * 15)/100;
          // var prodsubpercentagetot = prodcost + prodsubpercentage
          // var mrp = prodcost * 2.5;
          var prodcost = this.state.npages*booktype+8.5
          //var mrp = this.state.setmrp
          //rajesh
          var mrp = this.state.selmrp;
          //alert(mrp);
          
          var brfmrppercent  = (mrp * 15)/100;
          var othermrppercent  = (mrp * 50)/100;
          var setbfcprice = (mrp-(prodcost + brfmrppercent))*85/100;
          setbfcprice = parseFloat(setbfcprice).toFixed(2);
          var setohterprice = (mrp-(prodcost + othermrppercent))*85/100
          setohterprice = parseFloat(setohterprice).toFixed(2);
          }else if(this.refs.bookFormat.value=='Ebook'){
          // if(this.refs.npages.value <= 72){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log("<= 72 5x8")
          //     booktype=0.505
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.618
          //     console.log(" <= 72 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.72
          //     console.log(" <= 72 8x11")
          //   }else{}

          // }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 73 <=96 5x8")
          //     booktype=0.505
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.618
          //     console.log(" >= 73 <=96 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //       booktype=0.61
          //       console.log(" >= 73 <=96 8.5x11")
          //     }else{}

          // }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 97 <=108 5x8")
          //     booktype=0.433
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.502
          //     console.log(">= 97 <=108 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.61
          //     console.log(" >= 97 <=108 8.5x11")
          //   }else{}

          // }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 109 <=128 5x8")
          //     booktype=0.433
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.502
          //     console.log(">= 109 <=128 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.57
          //     console.log(">= 109 <=128 8.5x11")
          //   }else{}

          // }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
          //     if(this.refs.bookSize.value =='5x8'){
          //       console.log(">= 129 <=148 5x8")
          //       booktype=0.360
          //     }else if(this.refs.bookSize.value =='6x9'){
          //       booktype=0.473
          //       console.log(">= 129 <=148 6x9")
          //     }else if(this.refs.bookSize.value =='8x11'){
          //       booktype=0.55
          //       console.log(">= 129 <=148 8.5x11")
          //     }else{}
            
          // }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(">= 149 <=192 5x8")
          //     booktype=0.360
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.473
          //     console.log(">= 149 <=192 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.49
          //     console.log(">= 149 <=192 8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(">= 193 <=216 5x8")
          //     booktype=0.324
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.437
          //     console.log(">= 193 <=216 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.49
          //     console.log(">= 193 <=216 8.5x11")
          //   }else{}

          // }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){

          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log("5x8 >= 217  <=252  ")
          //     booktype=0.324
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.437
          //     console.log(">= 217  <=252 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.46
          //     console.log(">= 217  <=252 8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){

          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 253 <=256 5x8")
          //     booktype=0.324
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.437
          //     console.log(">= 253 <=256 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.46
          //     console.log(">= 253 <=2568.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){

          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(">= 257 <=276 5x8")
          //     booktype=0.313
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.415
          //     console.log(">= 257 <=276 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.46
          //     console.log(">= 257 <=276 8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 277 <=320 5x8")
          //     booktype=0.313
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.415
          //     console.log(">= 277 <=320 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.46
          //     console.log(">= 277 <=320 8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
            
          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 321 <=352 5x8")
          //     booktype=0.305
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(" >= 321 <=3526x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.44
          //     console.log(" >= 321 <=3528.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){

          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(" >= 353 <=384 5x8")
          //     booktype=0.305
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(">= 353 <=384 6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.43
          //     console.log(">= 353 <=384 8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){

          //   if(this.refs.bookSize.value =='5x8'){
          //     console.log(">= 385  <=432  5x8")
          //     booktype=0.305
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(">= 385  <=432  6x9")
          //   }else if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.42
          //     console.log(">= 385  <=432  8.5x11")
          //   }else{}
          // }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){

          //   if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.41
          //     console.log(">= 433 <=492 8.5x11")
          //   }if(this.refs.bookSize.value =='5x8'){
          //     console.log(">= 433 <=492 5x8")
          //     booktype=0.305
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(">= 433 <=492 6x9")
          //   }else{
              
          //   }
          // }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){

          //   if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.41
          //     console.log(">= 493 <=548 6x9")
          //   }if(this.refs.bookSize.value =='5x8'){
          //   booktype=0.305
          //   console.log(">= 493 <=548 6x9")
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(">= 493 <=548 6x9")
          //   }else{

          //   }
          // }else if(this.refs.npages.value >=549 ){
          //   if(this.refs.bookSize.value =='8x11'){
          //     booktype=0.41
          //     console.log(">= 493 <=548 6x9")
          //   }if(this.refs.bookSize.value =='5x8'){
          //   booktype=0.305
          //   console.log(">= 493 <=548 6x9")
          //   }else if(this.refs.bookSize.value =='6x9'){
          //     booktype=0.400
          //     console.log(">= 493 <=548 6x9")
          //   }else{

          //   }
          // }else{}
          if(this.refs.npages.value <= 72){
            if(this.refs.bookSize.value =='5x8'){
              console.log("<= 72 5x8")
              booktype=0.605
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.718
              console.log(" <= 72 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.85
              console.log(" <= 72 8.5x11")
            }else{}
            
          }else if(this.refs.npages.value >= 73 && this.refs.npages.value <=96){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 73 <=96 5x8")
              booktype=0.605
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.718
              console.log(" >= 73 <=96 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
                booktype=0.85
                console.log(" >= 73 <=96 8.5x11")
              }else{}

          }else if(this.refs.npages.value >= 97 && this.refs.npages.value <=108 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 97 <=108 5x8")
              booktype=0.533
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.602
              console.log(">= 97 <=108 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.74
              console.log(" >= 97 <=108 8.5x11")
            }else{}

          }else if(this.refs.npages.value >= 109 && this.refs.npages.value <=128 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 109 <=128 5x8")
              booktype=0.533
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.602
              console.log(">= 109 <=128 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.70
              console.log(">= 109 <=128 8.5x11")
            }else{}

          }else if(this.refs.npages.value >= 129 && this.refs.npages.value <=148 ){
              if(this.refs.bookSize.value =='5x8'){
                console.log(">= 129 <=148 5x8")
                booktype=0.460
              }else if(this.refs.bookSize.value =='6x9'){
                booktype=0.573
                console.log(">= 129 <=148 6x9")
              }else if(this.refs.bookSize.value =='8x11'){
                booktype=0.68
                console.log(">= 129 <=148 8.5x11")
              }else{}
            
          }else if(this.refs.npages.value >= 149 && this.refs.npages.value <=192 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 149 <=192 5x8")
              booktype=0.460
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.573
              console.log(">= 149 <=192 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.62
              console.log(">= 149 <=192 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 193 && this.refs.npages.value <=216 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 193 <=216 5x8")
              booktype=0.424
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.537
              console.log(">= 193 <=216 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.62
              console.log(">= 193 <=216 8.5x11")
            }else{}

          }else if(this.refs.npages.value >= 217 && this.refs.npages.value <=252 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log("5x8 >= 217  <=252  ")
              booktype=0.424
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.537
              console.log(">= 217  <=252 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.59
              console.log(">= 217  <=252 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 253 && this.refs.npages.value <=256 ){

            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 253 <=256 5x8")
              booktype=0.424
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.537
              console.log(">= 253 <=256 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.59
              console.log(">= 253 <=2568.5x11")
            }else{}
          }else if(this.refs.npages.value >= 257 && this.refs.npages.value <=276 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 257 <=276 5x8")
              booktype=0.413
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.515
              console.log(">= 257 <=276 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.59
              console.log(">= 257 <=276 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 277 && this.refs.npages.value <=320 ){
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 277 <=320 5x8")
              booktype=0.413
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.515
              console.log(">= 277 <=320 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.57
              console.log(">= 277 <=320 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 321 && this.refs.npages.value <=352 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 321 <=352 5x8")
              booktype=0.405
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(" >= 321 <=3526x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.57
              console.log(" >= 321 <=3528.5x11")
            }else{}
          }else if(this.refs.npages.value >= 353 && this.refs.npages.value <=384 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(" >= 353 <=384 5x8")
              booktype=0.405
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(">= 353 <=384 6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.56
              console.log(">= 353 <=384 8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 385 && this.refs.npages.value <=432 ){
            
            if(this.refs.bookSize.value =='5x8'){
              console.log(">= 385  <=432  5x8")
              booktype=0.405
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(">= 385  <=432  6x9")
            }else if(this.refs.bookSize.value =='8x11'){
              booktype=0.55
              console.log(">= 385  <=432  8.5x11")
            }else{}
          }else if(this.refs.npages.value >= 433 && this.refs.npages.value <=492 ){
            
            if(this.refs.bookSize.value =='8x11'){
              booktype=0.54
              console.log(">= 433 <=492 8.5x11")
            }if(this.refs.bookSize.value =='5x8'){
              console.log(">= 433 <=492 5x8")
              booktype=0.405
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(">= 433 <=492 6x9")
            }else{
              
            }
          }else if(this.refs.npages.value >= 493 && this.refs.npages.value <=548 ){
            
            if(this.refs.bookSize.value =='8x11'){
              booktype=0.54
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
              booktype=0.405
              console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else if(this.refs.npages.value >=549 ){
            if(this.refs.bookSize.value =='8x11'){
              booktype=0.54
              console.log(">= 493 <=548 6x9")
            }if(this.refs.bookSize.value =='5x8'){
              booktype=0.405
              console.log(">= 493 <=548 6x9")
            }else if(this.refs.bookSize.value =='6x9'){
              booktype=0.500
              console.log(">= 493 <=548 6x9")
            }else{

            }
          }else{}
          // var prodcost = this.state.npages*booktype+8.5
          // var mrp = prodcost * 2.5
          // mrp = parseFloat(mrp).toFixed(2);
          // Rajesh

          var prodcost = this.state.npages*booktype+8.5
          //var mrp = this.state.setmrp
          //rajesh
          var mrp = this.state.selmrp;

          var brfmrppercent  = (mrp * 15)/100
          var othermrppercent  = (mrp * 70)/100
          var setbfcprice = (mrp-brfmrppercent)*85/100
          setbfcprice = parseFloat(setbfcprice).toFixed(2);
          var setohterprice = (mrp-othermrppercent)*85/100
          setohterprice = parseFloat(setohterprice).toFixed(2);
          }else{}
          this.setState({
            bfcprice: setbfcprice,
            otherprice:setohterprice
            
          }); 
        }else{
          }
       }

    render(){
      var isLoggedIn = this.state.prodcostx;
      let person = null;
      let productioncast1 = null;
      if(this.state.hiddenProductioncast == 'true'){
        productioncast1 = (
          <div className="card-right bg-gradient br-10" style={{width: '100%', textAlign: 'center', padding: ''}}>
          <label style={{color: '#fff', fontSize: '15px'}}>Production Cost</label>
          <div className="employees">
            <span style={{color: 'white', paddingTop: '2px', marginTop: 0, marginBottom: 0, fontSize: '30px', marginRight: '3px'}}>₹</span>
            <span className="counter-count" style={{color: 'white', paddingTop: '2px', marginTop: 0, marginBottom: 0, fontSize: '20px'}}>
            {isLoggedIn ? parseFloat(this.state.prodcostx).toFixed(2) : 0}
              </span>
          </div>
        </div>
          );
      }
      if (this.state.hidden == 'true') {
        person = (
        <div className="personCard">
           <div className="footerEbook card-right br-10 shadow" style={{width: '100%', textAlign: 'center', padding: '.2rem'}}>
            <label style={{fontSize: '15px',color:'#000'}} className="">Author's Copy - at Subsidised Price : <span className="text-danger"> ₹{this.state.prodsubcostx}</span></label>
            <p style={{fontSize: '13px'}}>
              This is the price at which you can purchase your own book. Minimum number of copies per order is 20.
              Delivery charges extra as per Location.
            </p>
          </div>
        </div>
        );
      }
        return(
          <div>
            {
 <ProductWrapper>
 
                <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
                 <img src="https://image.freepik.com/free-photo/blank-blue-notepad-top-view_23-2148475411.jpg" className="img-calc br-20"/>
          </div>
          <div className="col-md-8">
             <h5 className="text-center" style={{marginBottom: '0rem',marginTop: '0rem'}}> Royalty Calculator</h5>
     <hr className="border-bottom-info-2" style={{marginBottom: '1.5rem',marginTop: '1rem'}} />
            <div className="row">
               <div className="col-md-6 sm-pd">
            <div className="card br-20 shadow" style={{padding: '2rem', backgroundColor: 'white', borderRadius: '20px'}}>
              <div className="card-header br-10">
                <h5 style={{}}>ENTER BOOK DETAILS</h5>
              </div>
            
              <div className="card-body">
                <div className="row" style={{marginBottom: '2rem'}}>
                  <div className="col-md-6">
                    <label className style={{marginTop: '25px'}}>Number Of Pages</label>
                  </div>
                  <div className="col-md-6">
                    <div className="form__group field">
                      {/* <input type="input" className="form__field" placeholder="Name" name="name" id="name" required /> */}
                      <input
                              type="number"
                              onChange={this.handleOnChange}
                              id="npages"
                              name="npages"
                              value={this.state.npages}
                              ref="npages"
                              placeholder="npages"
                              className="form__field"
                              required

                              />
<span style={{color: "red"}}>{this.state.errors["name"]}</span>
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
                      <label htmlFor="npages" className="form__label">Number Of Pages</label>
                    </div>
                  </div>
                </div>
                
                <div className="row" style={{marginBottom: '2rem'}}>
                  <div className="col-md-6">
                    <label style={{marginTop: '6px'}}> Book Format</label>
                  </div>
                  <div className="col-md-6">
            
                  <div class="inputBox">
                  <select                                         
                               onChange={this.handleChangeSelect}   
                               value={this.state.value}  
                               name="bookFormat"
                               id="bookFormat" 
                               ref="bookFormat"  
                               required  
                               className="input select select-spcl" 
                                disabled

                             >
                               <option
                                 className="long-book"
                                 value="Paperback"
                                 id="Paperback"
                                 style={{ display: "block" }}
                               >
                                 Paperback
                               </option>
                               {/* <option
                                 className="long-book"
                                 value="Ebook"
                                 id="Ebook"
                                 style={{ display: "block" }}
                               >
                                 Ebook
                               </option> */}
                             </select></div>
                    {/* <div className="custom-btn-container">
                      <span className="mycustombtn">
                        <input  ref="bookFormatPaperback" onChange={this.handleChangeSelect} value={this.state.value}  type="radio" data-type="radio_subservice" name="bookformat" id="royaltybookformat-paperback"/>
                        <label className="light-black" htmlFor="royaltybookformat-paperback">Paperback</label>
                      </span>
                      <span className="mycustombtn">
                        <input  ref="bookFormatEbook" onChange={this.handleChangeSelect} value={this.state.value} type="radio" data-type="radio_subservice" name="bookformat" id="royaltybookformat-centerpin"/>
                        <label className="light-black" htmlFor="royaltybookformat-centerpin">E BOOK</label>
                      </span>
                    </div> */}
                  </div>
                </div>
               
                <div className="row" style={{marginBottom: '2rem'}}>
                  <div className="col-md-6">
                    <label style={{marginTop: '6px'}}> Book Size</label>
                  </div>
                  <div className="col-md-6">
                  <div class="inputBox">
                  <select id="booksize" name="booksize" ref="bookSize" required  className="input select">
                                {/* <option value="Select" >Select Book Size
                               </option> */}
                               <option value="5x8">
                                 5" x 8"
                               </option>
                              {/* <option value="216-140">5.5" x 8.5"</option>*/}
                               <option value="6x9">6" x 9"</option>
                               {/*<option value="216-216">8.5" x 8.5"</option>*/}
                               <option value="8x11">8" x 11"</option>
                             </select></div>
                    {/* <div className="custom-btn-container">
                      <span className="mycustombtn">
                        <input  ref="bookSize" onChange={this.handleChangeSelect} value={this.state.value} type="radio" data-type="radio_subservice" name="booksize" id="royaltybooksize-hardcover" defaultValue="5x8"/>
                        <label className="pad" htmlFor="royaltybooksize-hardcover">5 x 8</label>
                      </span>
                      <span className="mycustombtn">
                        <input  ref="bookSize" onChange={this.handleChangeSelect} value={this.state.value} type="radio" data-type="radio_subservice" name="booksize" id="royaltybooksize-centerpin" defaultValue="6x9" />
                        <label className="pad" htmlFor="royaltybooksize-centerpin">6 x 9</label>
                      </span>
                      <span className="mycustombtn">
                        <input  ref="bookSize" onChange={this.handleChangeSelect} value={this.state.value} type="radio" data-type="radio_subservice" name="booksize" id="royaltybooksize-centerpin1" defaultValue="8x11" />
                        <label className="pad" htmlFor="royaltybooksize-centerpin1">8 x 11</label>
                      </span>
                    </div> */}
                  </div>
                </div>
                
                <div className="row" style={{marginBottom: '2rem'}}>
                  <div className="col-md-6">
                    <label style={{marginTop: '6px'}}> Book Type</label>
                  </div>
                  <div className="col-md-6">
                  <div class="inputBox">
                  <select id="bookColor" name="bookcolor"  ref="bookColor"  className="input select select-spcl" required disabled>
                               <option value="bw" selected="selected">
                                 Black &amp; White
                               </option>
                               {/*<option value="color">Full Color</option>*/}
                             </select></div>
                    {/* <div className="custom-btn-container">
                      <span className="mycustombtn">
                        <input onChange={this.handleChangeSelect} value={this.state.value} type="radio" data-type="radio_subservice" ref="bookColor" name="bookcolor1" id="royaltybookformat-Black" defaultValue="bw" />
                        <label className htmlFor="royaltybookformat-Black">Black &amp; White</label>
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
              
             
              <div className="card-footer" style={{paddingBottom: '1.8rem'}}>
                <div className="row">
                  <div className="col-md-6">
                  </div>
                  <div className="col-md-6">
                    {/* <button className="mybtn animated-btn bluebtn" style={{width: '100%'}}>Calculate</button> */}
          
                    <button                                  
                       className="mybtn animated-btn bluebtn" style={{width: '50%'}}
                       onClick={this.handleResult}
                     >
                       Calculate
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
             <div className="col-md-6 " style={{marginBottom:'2rem'}}>
            <div className="card shadow br-20" style={{padding: '2rem', paddingBottom: '1rem', backgroundColor: 'white'}}>
              <div className="card-body">
                <div className="row">
                  
                  <div className="col-md-6 sm-pd">
                    {/*  */}
                    {productioncast1}
                  </div>
                  <div className="col-md-6 sm-pd">
                    <div className="card-right bg-gradient br-10" style={{width: '100%', textAlign: 'center', padding: ''}}>
                      <label style={{color: '#fff', fontSize: '15px'}}> Recommended Price</label>
                      <div className="employees">
                        <span style={{color: 'white', fontSize: '30px', marginRight: '3px'}}>₹</span> 
                        <span className="counter-count" style={{color: 'white',fontSize: '20px'}}>{this.state.minprice}</span>
                        <input type="hidden" value={this.state.minprice} name="minpricehidden" ref="minpricehidden"/>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="row" style={{marginBottom: '2rem'}}>
                  <div className="col-md-12" style={{marginTop: '10px'}}>
                    <span style={{color: '#9b9b9b', fontWeight: 'bold'}}> MRP should not be less than recommended price.</span>
                  </div>
                  <div className="col-md-5">
                    <label className style={{marginTop: '20px'}}>MRP</label>
                  </div>
                  <div className="col-md-7">
                    <div className="form__group field">
                      <input  ref="selmrp" onChange={this.handleOnChange1} value={this.state.selmrp} ref="setmrp" type="number" className="form__field" placeholder="Set MRP (INR)" id="Set MRP (INR)" name="selmrp" required />
                      <label htmlFor="Set MRP (INR)" className="form__label">MRP here</label>
                      
                      <span style={{color: "red"}}>{this.state.errors["setminprice"]}</span>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card-footer">
                <div className="row">
                  <div className="col-md-5">
                  </div>
                  <div className="col-md-7">
                    <button  onClick={this.handleResult1} className=" validate mybtn animated-btn bluebtn" style={{width: '40%'}}>Calculate</button>
                  </div>
                </div>
              </div>
              <label style={{marginTop: '3%', marginBottom: '.5%'}}>Author's Earning Per Copy : </label>
              <div className="row">
                <div className="col-md-6 sm-pd ">
                  <div className="card-right bg-gradient br-10" style={{width: '100%', textAlign: 'center', padding: ''}}>
                    <label style={{color: '#fff', fontSize: '15px'}}>BFC Publications</label>
                    <div className="employees">
                      <span style={{color: 'white', paddingTop: '2px', marginTop: 0, marginBottom: 0, fontSize: '30px', marginRight: '3px'}}>₹</span> <span className="counter-count" style={{color: 'white', paddingTop: '2px', marginTop: 0, marginBottom: 0, fontSize: '20px'}}>{this.state.bfcprice}</span> 
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-right bg-gradient br-10" style={{width: '100%', textAlign: 'center', padding: ''}}>
                    <label style={{color: '#fff', fontSize: '15px'}}>Other Stores</label>
                    <div className="employees">
                      <span style={{color: 'white', paddingTop: '2px', marginTop: 0, marginBottom: 0, fontSize: '30px', marginRight: '3px'}}>₹</span> <span className="counter-count" style={{color: 'white', paddingTop: '2px', marginTop: 0, marginBottom: 0, fontSize: '20px'}}>{this.state.otherprice}</span> 
                    </div>
                  </div>
                </div>
               
              </div>
              <span style={{fontSize:'10.5px', color:'#9b9b9b'}}>These Rates are for illustration purpose only. Actual earnings may vary.</span>
            </div>
          </div>
            </div>
            <div className="row">
              <div className="col-md-12">
            {person}  
              </div>
            </div>
          </div>
        </div>
      </div>
         <br/>
          
        <div className="clearfix">  
            </div>
    <div className="container-fluid">
       <h3 className="text-center">Frequently Asked Questions</h3> 
            <hr/>
           
            <div className="border-btm">
            <h5>1) What is the Recommended Price?</h5>
            <p className="para">Recommended Price is the lowest MRP that can be set for your book. This is based on Production and Distribution costs. </p>
            </div>

             <div className="border-btm">
            <h5>2) How to set the MRP for a book?</h5>
            <p className="para">MRP can be set by putting any number higher than the Recommended Price for a book. </p>
            </div>

         <div className="border-btm">
            <h5>3) How is author’s profit calculated?</h5>
            <p className="para">Profit is calculated as the difference between the MRP and expenses incurred during the production and distribution of the book. Profit = MRP – Expenses (Production Cost + Distribution Cost). Author will get 85% of the net profits from the book.</p>
            </div>

         <div className="" >
            <h5>4) What is Author’s Subsidised Price?</h5>
            <p className="para">Author can order extra copies at this price; it is based on Production Cost + Applicable Distribution Charges.</p>
            </div>
            
    </div> 

   

</ProductWrapper>

            }
          </div>
         
        
            )
    }

}
const ProductWrapper = styled.div`

.para{
 text-align: justify;
font-size:16px;
}
.border-btm{
border-bottom:1px solid #e7e7e7;
margin-bottom:3rem;
}

.mycheck input[type="checkbox"]:checked,
.mycheck input[type="checkbox"]:not(:checked) {
	position: absolute;
	opacity: 0;
}

.mycheck input[type="checkbox"]:checked+label,
.mycheck input[type="checkbox"]:not(:checked)+label {
	position: relative;
	padding-left: 28px;
	cursor: pointer;
	line-height: 20px;
	display: inline-block;
	color: #666;
	font-weight: normal;
}

.mycheck input[type="checkbox"]:checked+label::before,
.mycheck input[type="checkbox"]:not(:checked)+label::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 18px;
	height: 18px;
	border: 1px solid #d4d4d4;
	background: #fff;
}

.mycheck input[type="checkbox"]:disabled+label {
	cursor: not-allowed;
}

.mycheck input[type="checkbox"]:checked+label::after,
.mycheck input[type="checkbox"]:not(:checked)+label::after {
	content: "\e013";
	font-family: 'Glyphicons Halflings';
	font-style: normal;
	font-weight: 400;
	color: #e6ab13;
	position: absolute;
	top: -1px;
	left: 3px;
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
	font-size: 11px;
}

.mycheck input[type="checkbox"]:not(:checked)+label::after {
	opacity: 0;
	-webkit-transform: scale(0);
	transform: scale(0);
}

.mycheck input[type="checkbox"]:checked+label::after {
	opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}

.myradio input[type="radio"]:checked,
.myradio input[type="radio"]:not(:checked) {
	position: absolute;
	opacity: 0;
}

.myradio input[type="radio"]:disabled+label {
	cursor: not-allowed !important;
}

.myradio input[type="radio"]:checked+label,
.myradio input[type="radio"]:not(:checked)+label {
	position: relative;
	padding-left: 28px;
	cursor: pointer;
	line-height: 20px;
	display: inline-block;
	color: #666;
}

.myradio input[type="radio"]:checked+label::before,
.myradio input[type="radio"]:not(:checked)+label::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 18px;
	height: 18px;
	border: 1px solid #d4d4d4;
	border-radius: 100%;
	background: #fff;
}

.myradio input[type="radio"]:checked+label::after,
.myradio input[type="radio"]:not(:checked)+label::after {
	content: '';
	width: 10px;
	height: 10px;
	background: #e6ab13;
	position: absolute;
	top: 4px;
	left: 4px;
	border-radius: 100%;
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}

.myradio input[type="radio"]:not(:checked)+label::after {
	opacity: 0;
	-webkit-transform: scale(0);
	transform: scale(0);
}

.myradio input[type="radio"]:checked+label::after {
	opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}

.mycustombtn input[type="radio"]:checked,
.mycustombtn input[type="radio"]:not(:checked) {
	position: absolute;
	opacity: 0;
}

.mycustombtn input[type="radio"]:disabled+label {
	cursor: not-allowed !important;
}

.mycustombtn input[type="radio"]:not(:checked)+label,
.mycustombtn input[type="radio"]:checked+label {
	position: relative;
	/* padding: 7px 16px; */
	padding: 10px 10px 8px 10px;
	border: 1px solid #83b8d8;
	color: #000;
	cursor: pointer;
}

.mycustombtn input[type="radio"]:checked+label {
	background-color: #83b8d8;
}

.mybtn {
	width: 100%;
	/*padding: 7px 5px;*/
	border-radius: 2px;
	border: none;
	font-size: 13px;
}

.mybtn[disabled] {
	cursor: not-allowed;
}

.animated-btn {
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	position: relative;
	-webkit-transition-property: color;
	transition-property: color;
	-webkit-transition-duration: 0.5s;
	transition-duration: 0.5s;
	overflow: hidden;
}

button {
	border: none;
	background: none;
}

.animated-btn:hover,
.animated-btn:active,
.animated-btn:focus {
	color: white;
	text-decoration: none;
}

.animated-btn:hover::before,
.animated-btn:active::before,
.animated-btn:focus::before {
	-webkit-transform: scaleX(1);
	transform: scaleX(1);
	-webkit-transition-timing-function: cubic-bezier(0.52, 2rem4, 0.37, 0.66);
	transition-timing-function: cubic-bezier(0.52, 2rem4, 0.37, 0.66);
}

.animated-btn:before {
	content: "";
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #e6ab13;
	-webkit-transform: scaleX(0);
	transform: scaleX(0);
	-webkit-transform-origin: 0 50%;
	transform-origin: 0 50%;
	-webkit-transition-property: transform;
	transition-property: transform;
	-webkit-transition-duration: 0.5s;
	transition-duration: 0.5s;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;
}

.card-header {
	padding: .5rem;
	text-align: center;
	background: #dc3545;
	color: #fff;
	font-weight: bold;
}

.mycustombtn input[type="radio"]:checked+label {
	background-color: #dc3545;
	color: #fff !important;
	border: 1px solid #dc3545 !important;
}

.mycustombtn input[type="radio"]:not(:checked)+label,
.mycustombtn input[type="radio"]:checked+label {
	border: 1px solid #9b9b9b;
	color: #9b9b9b;
  padding: 5px 20px 5px 20px;
  margin-right:1rem;
}

.shadow {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.shadow:hover{
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
}

.bluebtn {
	background-color: #dc3545;
	color: #FFF;
}

.animated-btn:before {
	content: "";
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #f75461;
	-webkit-transform: scaleX(0);
	transform: scaleX(0);
	-webkit-transform-origin: 0 50%;
	transform-origin: 0 50%;
	-webkit-transition-property: transform;
	transition-property: transform;
	-webkit-transition-duration: 0.5s;
	transition-duration: 0.5s;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;
}

.form__group {
	position: relative;
	padding: 15px 0 0;
	margin-top: 0px;
	width: 100%;
}

.form__field {
	font-family: inherit;
	width: 100%;
	border: 0;
	border-bottom: 2px solid #9b9b9b;
	outline: 0;
	font-size: 1.3rem;
	color: #000;
	padding: 7px 0;
	background: transparent;
	transition: border-color 0.2s;
}

.form__field::placeholder {
	color: transparent !important;
}

.form__field:placeholder-shown~.form__label {
	font-size: 1.3rem;
	cursor: text;
	top: 20px;
}

.form__label {
	position: absolute;
	top: 0;
	display: block;
	transition: 0.2s;
	font-size: 1rem;
	color: #9b9b9b;
}

.form__field:focus {
	padding-bottom: 6px;
	font-weight: 700;
	border-width: 3px;
	border-image: linear-gradient(to right, #dc3545, #56080f);
	border-image-slice: 1;
}

.form__field:focus~.form__label {
	position: absolute;
	top: 0;
	display: block;
	transition: 0.2s;
	font-size: 1rem;
	color: #dc3545;
	font-weight: 700;
}


/* reset input */

.form__field:required,
.form__field:invalid {
	box-shadow: none;
}

label {
	color: #9b9b9b;
}





.bg-gradient {
	 background-color: #dc3545;
	/* background-color: #2a3695;*/
	// background-image: linear-gradient(to right, #dc3545, #3e4a9d);
}

.br-10 {
	border-radius: 10px;
}

.br-20 {
	border-radius: 20px;
}

@media only screen and (max-width: 600px) {
	.sm-pd {
		padding-bottom: 2rem;
	}
}
.inputBox{
	position: relative;
	box-sizing: border-box;
	/*margin-bottom: 20px;*/
   border-bottom: 2px solid #9b9b9b;
}
.inputBox .inputText{
	position: absolute;
    font-size: 14px;
    line-height: 50px;
    transition: .5s;
    opacity: .5;
    color:#000; 
}

.inputBox .form-check-input{
    font-size: 14px;
    transition: .5s;
   /* opacity: .5;*/
    color:#000; 
}
.inputBox .input{
	position: relative;
	width: 100%;
	height: 35px;
	background: transparent;
	border: none;
    outline: none;
    font-size: 16px;
   /* border-bottom: 1px solid rgba(0,0,0,.5);*/
font-family: inherit;
    width: 100%;
  
    font-size: 1.3rem;
    color: #9b9b9b;
    font-weight: 600;
   
    background: transparent;
    transition: border-color 0.2s;
}
}
.focus .inputText{
	transform: translateY(-30px);
	font-size: 16px;
	opacity: 1;
	color: #dc3545;

}

.select-spcl {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
color:#000 !important;

    text-overflow: '';

}
.img-calc{
width:100%;
height:88vh;
object-fit: cover;
}
`;
export default royaltyCalculator
