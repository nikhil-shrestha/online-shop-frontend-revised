import React from 'react'

export default function productList() {
  return (
    <div>
      <main role="main" class="container afternav">
         <div class="breadcrum">
            <span>Home</span>
            <span>Home & Living</span>
            <span>Home Decor</span>
         </div>
         <div id="textbox"  style={{clear: 'both'}} class="row">
            <div class="col-md-12">
               <h3 class="title alignleft">HOME DECORATION</h3>
               <p class="alignright">
               <div class="form-inline" style={{float: 'right'}}>
                  <label for="inputState" class=" col-md-4 titleSortBy">Sort By</label>
                  <select id="inputState" class="form-control col-md-7 selectCustom">
                     <option selected>New Arrivals</option>
                     <option>...</option>
                  </select>
               </div>
               </p>
            </div>
         </div>
         <div class="row">
            <div class="col-md-3">
               <div class="filter">
                  <br />
                  <div>
                     <input type="text" class="noborder" name=""/>
                     <a href="#" class="cleardata">
                     <img src="assets/images/clear.svg" alt="Clear" />
                     </a>
                  </div>
                  <div class="filterprice">
                     <div class="panel-group">
                        <div id="headingOne">
                           <h4 class="panel-title">
                              <label class="title searchTitle" data-toggle="collapse" data-target="#pricecol" aria-expanded="true" aria-controls="pricecol">Price</label>
                           </h4>
                        </div>
                     </div>
                     <div id="pricecol" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="">
                           <div class="row">
                              <div class="col-sm-6">
                                 <input type="text" name="" class="pull-left customInput" placeholder="500" />
                              </div>
                              <div class="col-sm-6">
                                 <input type="text" name="" class="customInput" placeholder="85000" />
                              </div>
                           </div>
                           <div class="spaceSlider">
                              <input id="ex2" type="text" class="span2" value="" data-slider-min="10" data-slider-max="1000" data-slider-step="5" data-slider-value="[250,450]"/>
                           </div>
                        </div><br />
                     </div>
                  </div>
                  
                  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                     <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                           <div class="filterbrand">
                              <h4 class="panel-title">
                                 <label  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" class="title searchTitle titleWidth changeStyle collapsed" >Brand 
                                 </label>
                              </h4>
                           </div>
                           <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                              <div class="panel-body">
                                 <input type="text" name="" class="customInput" placeholder="Search" />
                                 <ul class="list-unstyled">
                                    <li>
                                       <div class="checkbox brands">
                                          <input id="check1" type="checkbox" class="styled" checked/>
                                          <label for="check1">
                                          Other
                                          </label>
                                          <span class="pull-right toRight">(46)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="checkbox brands">
                                          <input id="check2" type="checkbox" class="styled" checked/>
                                          <label for="check2">
                                          Hallmark
                                          </label>
                                          <span class="pull-right toRight">(1)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="checkbox brands">
                                          <input id="check3" type="checkbox" class="styled" checked/>
                                          <label for="check3">
                                          New Lifestyle
                                          </label>
                                          <span class="pull-right toRight">(154)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="checkbox brands">
                                          <input id="check4" type="checkbox" class="styled" checked/>
                                          <label for="check4">
                                          Maya bedding
                                          </label>
                                          <span class="pull-right toRight">(55)</span>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                           <div class="filterbrand">
                              <h4 class="panel-title">
                                 <label role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseOne" class="title searchTitle titleWidth collapsed" >Types</label>
                              </h4>
                           </div>
                           <div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                              <div class="panel-body">
                                 <input type="text" name="" class="customInput" placeholder="Search" />
                                 <ul class="list-unstyled">
                                    <li>
                                       <div class="checkbox brands">
                                          <input id="check5" type="checkbox" class="styled" checked/>
                                          <label for="check5">
                                          Other
                                          </label>
                                          <span class="pull-right toRight">(46)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="checkbox brands">
                                          <input id="check6" type="checkbox" class="styled" checked/>
                                          <label for="check6">
                                          Hallmark
                                          </label>
                                          <span class="pull-right toRight">(1)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="checkbox brands">
                                          <input id="check7" type="checkbox" class="styled" checked/>
                                          <label for="check7">
                                          New Lifestyle
                                          </label>
                                          <span class="pull-right toRight">(154)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="checkbox brands">
                                          <input id="check8" type="checkbox" class="styled" checked/>
                                          <label for="check8">
                                          Maya bedding
                                          </label>
                                          <span class="pull-right toRight">(55)</span>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingFour">
                           <div class="filterbrand">
                              <h4 class="panel-title">
                                 <label role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour" class="title searchTitle titleWidth collapsed">Colors</label>
                              </h4>
                           </div>
                           <div id="collapseFour" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingFour">
                              <div class="panel-body">
                                 <div class="colorswatches">
                                    <div class="one"></div>
                                    <div class="two"></div>
                                    <div class="three"></div>
                                    <div class="four"></div>
                                    <div class="five"></div>
                                    <div class="six"></div>
                                    <div class="seven"></div>
                                    <div class="eight"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingZero">
                           <div class="filterbrand">
                              <h4 class="panel-title">
                                 <label role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseZero" aria-expanded="true" aria-controls="collapseZero" class="title searchTitle titleWidth collapsed">Discounts</label>
                              </h4>
                           </div>
                           <div id="collapseZero" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingZero">
                              <div class="panel-body">
                                 <ul class="list-unstyled brands">
                                    <li>
                                       <label for="check7">
                                       50% Off or More
                                       </label>
                                       <span class="pull-right toRight">(154)</span>
                                    </li>
                                    <li>
                                       <label for="check7">
                                       30% Off or More
                                       </label>
                                       <span class="pull-right toRight">(154)</span>
                                    </li>
                                    <li>
                                       <label for="check7">
                                       20% Off or More
                                       </label>
                                       <span class="pull-right toRight">(154)</span>
                                    </li>
                                    <li>
                                       <label for="check7">
                                       10% Off or More
                                       </label>
                                       <span class="pull-right toRight">(154)</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingThree">
                           <h4 class="panel-title">
                              <label role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree" class="title searchTitle titleWidth collapsed">Ratings</label>
                           </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                           <div class="panel-body">
                              <ul class="list-unstyled">
                                 <li>
                                    <fieldset class="rating">
                                       <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                       <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                       <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                       <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                       <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                                       <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                       <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                       <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                       <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                                       <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                    <span class="pull-right toRight brands">(55)</span>
                                 </li>
                                 <li>
                                    <fieldset class="rating">
                                       <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                       <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                       <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                       <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                       <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                                       <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                       <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                       <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                       <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                                       <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                    <span class="pull-right toRight brands">(55)</span>
                                 </li>
                                  <li>
                                    <fieldset class="rating">
                                       <input type="radio" id="star5" name="rating" value="5" />
                                       <label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                       <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                       <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                       <input type="radio" id="star4" name="rating" value="4" />
                                       <label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                       <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                       <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                       <input type="radio" id="star3" name="rating" value="3" />
                                       <label class = "full" for="star3" title="Meh - 3 stars"></label>
                                       <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                       <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                       <input type="radio" id="star2" name="rating" value="2" />
                                       <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                       <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                       <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                       <input type="radio" id="star1" name="rating" value="1" />
                                       <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                                       <input type="radio" id="starhalf" name="rating" value="half" />
                                       <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                    <span class="pull-right toRight brands">(55)</span>
                                 </li>
                                 <li>
                                    <fieldset class="rating">
                                       <input type="radio" id="star5" name="rating" value="5" />
                                       <label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                       <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                       <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                       <input type="radio" id="star4" name="rating" value="4" />
                                       <label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                       <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                       <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                       <input type="radio" id="star3" name="rating" value="3" />
                                       <label class = "full" for="star3" title="Meh - 3 stars"></label>
                                       <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                       <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                       <input type="radio" id="star2" name="rating" value="2" />
                                       <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                       <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                       <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                       <input type="radio" id="star1" name="rating" value="1" />
                                       <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                                       <input type="radio" id="starhalf" name="rating" value="half" />
                                       <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                    <span class="pull-right toRight brands">(55)</span>
                                 </li>
                                 <li>
                                    <fieldset class="rating">
                                       <input type="radio" id="star5" name="rating" value="5" />
                                       <label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                       <input type="radio" id="star4half" name="rating" value="4 and a half" /
                                       ><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                       <input type="radio" id="star4" name="rating" value="4" />
                                       <label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                       <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                       <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                       <input type="radio" id="star3" name="rating" value="3" />
                                       <label class = "full" for="star3" title="Meh - 3 stars"></label>
                                       <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                       <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                       <input type="radio" id="star2" name="rating" value="2" />
                                       <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                       <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                       <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                       <input type="radio" id="star1" name="rating" value="1" />
                                       <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                                       <input type="radio" id="starhalf" name="rating" value="half" />
                                       <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                    <span class="pull-right toRight brands">(55)</span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-9">
               <div class="listing">
                  <div class="listbundle">
                     <div class="productlist animated fadeInUp animation1">
                        <img src="assets/images/thumb2.jpg" alt="Thumb" />
                        <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
                        <div class="content">
                           <div class="listcat">CUSION</div>
                           <div class="listsubcat">blue start print with cusion </div>
                           <table class="producttable">
                              <tr>
                                 <td><span class="float-left price">Rs. 3,000.00</span></td>
                                 <td class="">
                                    <div class="favtoggle">
                                       <img src="assets/images/fav.png"/>
                                       <img src="assets/images/unfav.png" style={{display:'none'}}/>
                                    </div>
                                 </td>
                                 <td class="">
                                    <a href="#" title="Add to Cart">
                                    <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                                    </a>
                                 </td>
                              </tr>
                           </table>
                        </div>
                     </div>
                     <div class="productlist animated fadeInUp animation2">
                        <img src="assets/images/thumb1.jpg" alt="Thumb" />
                        <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
                        <div class="content">
                           <div class="listcat">CUSION</div>
                           <div class="listsubcat">blue start print with cusion </div>
                           <table class="producttable">
                              <tr>
                                 <td><span class="float-left price">Rs. 3,000.00</span></td>
                                 <td class="">
                                    <div class="favtoggle">
                                       <img src="assets/images/fav.png"/>
                                       <img src="assets/images/unfav.png" style={{display:'none'}}/>
                                    </div>
                                 </td>
                                 <td class="">
                                    <a href="#" title="Add to Cart">
                                    <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                                    </a>
                                 </td>
                              </tr>
                           </table>
                        </div>
                     </div>
                     <div class="productlist animated fadeInUp animation3">
                        <img src="assets/images/thumb3.jpg" alt="Thumb" />
                        <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
                        <div class="content">
                           <div class="listcat">CUSION</div>
                           <div class="listsubcat">blue start print with cusion </div>
                           <table class="producttable">
                              <tr>
                                 <td><span class="float-left price">Rs. 3,000.00</span></td>
                                 <td class="">
                                    <div class="favtoggle">
                                       <img src="assets/images/fav.png"/>
                                       <img src="assets/images/unfav.png" style={{display:'none'}}/>
                                    </div>
                                 </td>
                                 <td class="">
                                    <a href="#" title="Add to Cart">
                                    <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                                    </a>
                                 </td>
                              </tr>
                           </table>
                        </div>
                     </div>
                     <div class="productlist animated fadeInUp animation4">
                        <img src="assets/images/thumb4.jpg" alt="Thumb" />
                        <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
                        <div class="content">
                           <div class="listcat">CUSION</div>
                           <div class="listsubcat">blue start print with cusion </div>
                           <table class="producttable">
                              <tr>
                                 <td><span class="float-left price">Rs. 3,000.00</span></td>
                                 <td class="">
                                    <div class="favtoggle">
                                       <img src="assets/images/fav.png"/>
                                       <img src="assets/images/unfav.png" style={{display:'none'}}/>
                                    </div>
                                 </td>
                                 <td class="">
                                    <a href="#" title="Add to Cart">
                                    <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                                    </a>
                                 </td>
                              </tr>
                           </table>
                        </div>
                     </div>
                     <div class="productlist animated fadeInUp animation5">
                        <img src="assets/images/thumb5.jpg" alt="Thumb" />
                        <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
                        <div class="content">
                           <div class="listcat">CUSION</div>
                           <div class="listsubcat">blue start print with cusion </div>
                           <table class="producttable">
                              <tr>
                                 <td><span class="float-left price">Rs. 3,000.00</span></td>
                                 <td class="">
                                    <div class="favtoggle">
                                       <img src="assets/images/fav.png"/>
                                       <img src="assets/images/unfav.png" style={{display:'none'}}/>
                                    </div>
                                 </td>
                                 <td class="">
                                    <a href="#" title="Add to Cart">
                                    <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                                    </a>
                                 </td>
                              </tr>
                           </table>
                        </div>
                     </div>
                     <div class="productlist animated fadeInUp animation6">
                        <img src="assets/images/thumb6.jpg" alt="Thumb" />
                        <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
                        <div class="content">
                           <div class="listcat">CUSION</div>
                           <div class="listsubcat">blue start print with cusion </div>
                           <table class="producttable">
                              <tr>
                                 <td><span class="float-left price">Rs. 3,000.00</span></td>
                                 <td class="">
                                    <div class="favtoggle">
                                       <img src="assets/images/fav.png"/>
                                       <img src="assets/images/unfav.png" style={{display:'none'}}/>
                                    </div>
                                 </td>
                                 <td class="">
                                    <a href="#" title="Add to Cart">
                                    <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                                    </a>
                                 </td>
                              </tr>
                           </table>
                        </div>
                     </div>
                     <div class="productlist animated fadeInUp animation7">
                        <img src="assets/images/thumb7.jpg" alt="Thumb" />
                        <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
                        <div class="content">
                           <div class="listcat">CUSION</div>
                           <div class="listsubcat">blue start print with cusion </div>
                           <table class="producttable">
                              <tr>
                                 <td><span class="float-left price">Rs. 3,000.00</span></td>
                                 <td class="">
                                    <div class="favtoggle">
                                       <img src="assets/images/fav.png"/>
                                       <img src="assets/images/unfav.png" style={{display:'none'}}/>
                                    </div>
                                 </td>
                                 <td class="">
                                    <a href="#" title="Add to Cart">
                                    <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                                    </a>
                                 </td>
                              </tr>
                           </table>
                        </div>
                     </div>
                     <div class="productlist animated fadeInUp animation8">
                        <img src="assets/images/thumb8.jpg" alt="Thumb" />
                        <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
                        <div class="content">
                           <div class="listcat">CUSION</div>
                           <div class="listsubcat">blue start print with cusion </div>
                           <table class="producttable">
                              <tr>
                                 <td><span class="float-left price">Rs. 3,000.00</span></td>
                                 <td class="">
                                    <div class="favtoggle">
                                       <img src="assets/images/fav.png"/>
                                       <img src="assets/images/unfav.png" style={{display:'none'}}/>
                                    </div>
                                 </td>
                                 <td class="">
                                    <a href="#" title="Add to Cart">
                                    <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                                    </a>
                                 </td>
                              </tr>
                           </table>
                        </div>
                     </div>
                  </div>
                  <nav aria-label="Page navigation example">
                     <ul class="pagination">
                        <li class="page-item">
                           <a class="page-link pageLink" href="#" aria-label="Previous">
                           <span aria-hidden="true">&laquo;</span>
                           <span class="sr-only">Previous</span>
                           </a>
                        </li>
                        <li class="page-item"><a class="page-link pageLink" href="#">1</a></li>
                        <li class="page-item"><a class="page-link pageLink" href="#">2</a></li>
                        <li class="page-item"><a class="page-link pageLink" href="#">3</a></li>
                        <li class="page-item">
                           <a class="page-link pageLink" href="#" aria-label="Next">
                           <span aria-hidden="true">&raquo;</span>
                           <span class="sr-only">Next</span>
                           </a>
                        </li>
                     </ul>
                  </nav>
                  <p class="detailsPara">
                     Decorate your home in a way that reflects your personality with art and accent pieces from the maya.com art gallery by home decor . Choose from a broad selection of print and canvas art with a more traditional appeal, or from abstract pieces that can provoke thought or promote conversation with guests. If your home has a contemporary decor, choose a piece from the collections of metal or wood wall art. These three-dimensional pieces are similar to sculptures, but they do not require placement on a table or shelf, making them ideal for rooms with limited surface space. Browse a selection of vinyl wall art decals featuring inspirational quotes for your family room or popular cartoon characters for your child's bedroom.
                  </p>
               </div>
            </div>
         </div>
      </main>
      <section class="container">
         <h2>Most popular in this category</h2>
         <div class="listbundle">
            <div class="productlist animated fadeInUp animation1">
               <img src="assets/images/thumb2.jpg" alt="Thumb" />
               <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
               <div class="content">
                  <div class="listcat">CUSION</div>
                  <div class="listsubcat">blue start print with cusion </div>
                  <table class="producttable">
                     <tr>
                        <td><span class="float-left price">Rs. 3,000.00</span></td>
                        <td class="">
                           <div class="favtoggle">
                              <img src="assets/images/fav.png"/>
                              <img src="assets/images/unfav.png" style={{display:'none'}}/>
                           </div>
                        </td>
                        <td class="">
                           <a href="#" title="Add to Cart">
                           <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                           </a>
                        </td>
                     </tr>
                  </table>
               </div>
            </div>
            <div class="productlist animated fadeInUp animation2">
               <img src="assets/images/thumb1.jpg" alt="Thumb" />
               <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
               <div class="content">
                  <div class="listcat">CUSION</div>
                  <div class="listsubcat">blue start print with cusion </div>
                  <table class="producttable">
                     <tr>
                        <td><span class="float-left price">Rs. 3,000.00</span></td>
                        <td class="">
                           <div class="favtoggle">
                              <img src="assets/images/fav.png"/>
                              <img src="assets/images/unfav.png" style={{display:'none'}}/>
                           </div>
                        </td>
                        <td class="">
                           <a href="#" title="Add to Cart">
                           <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                           </a>
                        </td>
                     </tr>
                  </table>
               </div>
            </div>
            <div class="productlist animated fadeInUp animation3">
               <img src="assets/images/thumb3.jpg" alt="Thumb" />
               <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
               <div class="content">
                  <div class="listcat">CUSION</div>
                  <div class="listsubcat">blue start print with cusion </div>
                  <table class="producttable">
                     <tr>
                        <td><span class="float-left price">Rs. 3,000.00</span></td>
                        <td class="">
                           <div class="favtoggle">
                              <img src="assets/images/fav.png"/>
                              <img src="assets/images/unfav.png" style={{display:'none'}}/>
                           </div>
                        </td>
                        <td class="">
                           <a href="#" title="Add to Cart">
                           <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                           </a>
                        </td>
                     </tr>
                  </table>
               </div>
            </div>
            <div class="productlist animated fadeInUp animation4">
               <img src="assets/images/thumb4.jpg" alt="Thumb" />
               <a href="#" title="Quick View" class="quickview" data-toggle="modal" data-target="#quickview">QUICK VIEW</a>
               <div class="content">
                  <div class="listcat">CUSION</div>
                  <div class="listsubcat">blue start print with cusion </div>
                  <table class="producttable">
                     <tr>
                        <td><span class="float-left price">Rs. 3,000.00</span></td>
                        <td class="">
                           <div class="favtoggle">
                              <img src="assets/images/fav.png"/>
                              <img src="assets/images/unfav.png" style={{display:'none'}}/>
                           </div>
                        </td>
                        <td class="">
                           <a href="#" title="Add to Cart">
                           <img src="assets/images/cart.svg" class="addtocart" alt="cart" />
                           </a>
                        </td>
                     </tr>
                  </table>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
