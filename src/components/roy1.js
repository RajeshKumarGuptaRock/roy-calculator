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
          npages:0,
          bookformat:''
        };

        this.handleChangeSelect = this.handleChangeSelect.bind(this);

      }


      handleOnChange = e => {
        const { target: { value, name } } = e;
     
        this.setState({
          [name]: Number(value)
        });      

      }


      handleChangeSelect(event) {
         console.log(event.target.value);

         console.log("-----------vvvvvv");
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

       // alert('Your favorite flavor is...: ' + this.state.bookformat);
         let booktype=0;
        if(this.state.bookformat=='Paperback'){
            booktype=1000;

        }else if(this.state.bookformat=='Hardcase'){
            booktype=2000;

        }

        this.setState({
        //   result: this.state.number1 + this.state.number2
        // if(this.state.bookformat=='Paperback'){   sdf=5253; }
         
      //  result: this.state.npages+99+booktype
      prodcostx: this.state.npages+99+booktype

      //  prodcostx: this.state.npages+99+booktype;
      //  author_copies_price: this.state.npages+99+booktype;
      
 

     
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
                   <h4>FILL BOOK DETAILS</h4>
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
                               required                                    

                             >
                               <option
                                 className="short-book"
                                 value="Saddle stitch"
                                 disabled="disabled"
                                 style={{ display: "none" }}
                               >
                                 Saddle stitch
                               </option>
                               <option
                                 className="long-book"
                                 value="Paperback"
                                 id="paPERBack"
                                 style={{ display: "block" }}
                               >
                                 Paperback
                               </option>
                               <option
                                 className="long-book"
                                 value="Hardcase"
                                 id="hARdCase"
                                 style={{ display: "block" }}
                               >
                                 Hardcase
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
                             <select id="booksize" name="booksize" required>
                               <option value="203-127" selected="selected">
                                 5" x 8"
                               </option>
                               <option value="216-140">5.5" x 8.5"</option>
                               <option value="229-152">6" x 9"</option>
                               <option value="216-216">8.5" x 8.5"</option>
                               <option value="279-216">8.5" x 11"</option>
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
                             <select id="bookColor" name="bookcolor" required>
                               <option value="bw" selected="selected">
                                 Black &amp; White
                               </option>
                               <option value="color">Full Color</option>
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
                             <span className="value author_copies_price" id="author_copies_price">
                             Rs. {this.state.author_copies_price}
                             </span>
                           </div>
                         </div>
                       </div>
                       <p className="col-lg-12">
                         This is the price at which you can purchase your own
                         book. The minimum number of copies per order is 20.
                       </p>
                       {/*										<p class="col-lg-12">* Production cost for a book printed in black and white.</p>*/}
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
               <form
                 id="authorRoyalty"
                 className="formcontainer col-lg-12 nopadding"
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
                             id="setmrp"
                             name="setmrp"
                             required
                           />
                         </div>
                       </div>
                       <div className="row align-items-xl-end align-items-md-end align-items-sm-end align-items-center align-items-lg-center">
                         <div className="col-lg-12 col-md-5 col-sm-4 col-4 nopadding">
                           <label>Minimum Recommended Price</label><span id="minmrp">Rs. 225</span>
                         </div>
                         
                       </div>
                       
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-12 button text-center">
                   <button
                     className="btn btn-primary"
                     id="calculateprofit"
                     name="calculateprofit"
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
                           <label>BFC Publication</label>
                         </div>
                         <div className="col-lg-6 col-md-6 col-sm-6 col-6 nopadding">
                           <span className="delimiter"></span>
                           <span id="npauthorprofit" className="result value">
                             Rs. 122.19
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
                             Rs. 52.89
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </form>
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
                   Why is the profit higher when I sell via the BFC Publication
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