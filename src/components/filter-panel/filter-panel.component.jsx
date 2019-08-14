import React from 'react'

import FilterDrawers from '../ui/filter-drawers/filter-drawers.component'

import clear from '../../assets/images/clear.svg'

import './filter-panel.styles.scss'

export default function filterSidepanel() {
  return (
    <div className="filter">
                  <br />
                  <div>
                     <input type="text" className="noborder" name=""/>
                     <a href="#" className="cleardata">
                        <img src={clear} alt="Clear" />
                     </a>
                  </div>

                  <FilterDrawers/>

                  
                  
                  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                     <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                           <div className="filterbrand">
                              <h4 className="panel-title">
                                 <label  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="title searchTitle titleWidth changeStyle collapsed" >
                                    Brand 
                                 </label>
                              </h4>
                           </div>
                           <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                              <div className="panel-body">
                                 <input type="text" name="" className="customInput" placeholder="Search" />
                                 <ul className="list-unstyled">
                                    <li>
                                       <div className="checkbox brands">
                                          <input id="check1" type="checkbox" className="styled" checked/>
                                          <label for="check1">
                                          Other
                                          </label>
                                          <span className="pull-right toRight">(46)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="checkbox brands">
                                          <input id="check2" type="checkbox" className="styled" checked/>
                                          <label for="check2">
                                          Hallmark
                                          </label>
                                          <span className="pull-right toRight">(1)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="checkbox brands">
                                          <input id="check3" type="checkbox" className="styled" checked/>
                                          <label for="check3">
                                          New Lifestyle
                                          </label>
                                          <span className="pull-right toRight">(154)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="checkbox brands">
                                          <input id="check4" type="checkbox" className="styled" checked/>
                                          <label for="check4">
                                          Maya bedding
                                          </label>
                                          <span className="pull-right toRight">(55)</span>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                           <div className="filterbrand">
                              <h4 className="panel-title">
                                 <label role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseOne" className="title searchTitle titleWidth collapsed" >Types</label>
                              </h4>
                           </div>
                           <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                              <div className="panel-body">
                                 <input type="text" name="" className="customInput" placeholder="Search" />
                                 <ul className="list-unstyled">
                                    <li>
                                       <div className="checkbox brands">
                                          <input id="check5" type="checkbox" className="styled" checked/>
                                          <label for="check5">
                                          Other
                                          </label>
                                          <span className="pull-right toRight">(46)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="checkbox brands">
                                          <input id="check6" type="checkbox" className="styled" checked/>
                                          <label for="check6">
                                          Hallmark
                                          </label>
                                          <span className="pull-right toRight">(1)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="checkbox brands">
                                          <input id="check7" type="checkbox" className="styled" checked/>
                                          <label for="check7">
                                          New Lifestyle
                                          </label>
                                          <span className="pull-right toRight">(154)</span>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="checkbox brands">
                                          <input id="check8" type="checkbox" className="styled" checked/>
                                          <label for="check8">
                                          Maya bedding
                                          </label>
                                          <span className="pull-right toRight">(55)</span>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingFour">
                           <div className="filterbrand">
                              <h4 className="panel-title">
                                 <label role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour" className="title searchTitle titleWidth collapsed">Colors</label>
                              </h4>
                           </div>
                           <div id="collapseFour" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingFour">
                              <div className="panel-body">
                                 <div className="colorswatches">
                                    <div className="one"></div>
                                    <div className="two"></div>
                                    <div className="three"></div>
                                    <div className="four"></div>
                                    <div className="five"></div>
                                    <div className="six"></div>
                                    <div className="seven"></div>
                                    <div className="eight"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingZero">
                           <div className="filterbrand">
                              <h4 className="panel-title">
                                 <label role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseZero" aria-expanded="true" aria-controls="collapseZero" className="title searchTitle titleWidth collapsed">Discounts</label>
                              </h4>
                           </div>
                           <div id="collapseZero" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingZero">
                              <div className="panel-body">
                                 <ul className="list-unstyled brands">
                                    <li>
                                       <label for="check7">
                                       50% Off or More
                                       </label>
                                       <span className="pull-right toRight">(154)</span>
                                    </li>
                                    <li>
                                       <label for="check7">
                                       30% Off or More
                                       </label>
                                       <span className="pull-right toRight">(154)</span>
                                    </li>
                                    <li>
                                       <label for="check7">
                                       20% Off or More
                                       </label>
                                       <span className="pull-right toRight">(154)</span>
                                    </li>
                                    <li>
                                       <label for="check7">
                                       10% Off or More
                                       </label>
                                       <span className="pull-right toRight">(154)</span>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingThree">
                           <h4 className="panel-title">
                              <label role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree" className="title searchTitle titleWidth collapsed">Ratings</label>
                           </h4>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                           <div className="panel-body">
                              <ul className="list-unstyled">
                                 <li>
                                    <fieldset className="rating">
                                       <input type="radio" id="star5" name="rating" value="5" />
                                       <label className = "full" for="star5" title="Awesome - 5 stars"></label>
                                       <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                       <label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                       <input type="radio" id="star4" name="rating" value="4" />
                                       <label className = "full" for="star4" title="Pretty good - 4 stars"></label>
                                       <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                       <label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                                       <input type="radio" id="star3" name="rating" value="3" />
                                       <label className = "full" for="star3" title="Meh - 3 stars"></label>
                                       <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                       <label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                       <input type="radio" id="star2" name="rating" value="2" />
                                       <label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                       <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                       <label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                                       <input type="radio" id="star1" name="rating" value="1" />
                                       <label className = "full" for="star1" title="Sucks big time - 1 star"></label>
                                       <input type="radio" id="starhalf" name="rating" value="half" />
                                       <label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                    <span className="pull-right toRight brands">(55)</span>
                                 </li>
                                 <li>
                                    <fieldset className="rating">
                                       <input type="radio" id="star5" name="rating" value="5" />
                                       <label className = "full" for="star5" title="Awesome - 5 stars"></label>
                                       <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                       <label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                       <input type="radio" id="star4" name="rating" value="4" />
                                       <label className = "full" for="star4" title="Pretty good - 4 stars"></label>
                                       <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                       <label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                                       <input type="radio" id="star3" name="rating" value="3" />
                                       <label className = "full" for="star3" title="Meh - 3 stars"></label>
                                       <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                       <label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                       <input type="radio" id="star2" name="rating" value="2" />
                                       <label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                       <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                       <label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                                       <input type="radio" id="star1" name="rating" value="1" />
                                       <label className = "full" for="star1" title="Sucks big time - 1 star"></label>
                                       <input type="radio" id="starhalf" name="rating" value="half" />
                                       <label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                    <span className="pull-right toRight brands">(55)</span>
                                 </li>
                                  <li>
                                    <fieldset className="rating">
                                       <input type="radio" id="star5" name="rating" value="5" />
                                       <label className = "full" for="star5" title="Awesome - 5 stars"></label>
                                       <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                       <label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                       <input type="radio" id="star4" name="rating" value="4" />
                                       <label className = "full" for="star4" title="Pretty good - 4 stars"></label>
                                       <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                       <label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                                       <input type="radio" id="star3" name="rating" value="3" />
                                       <label className = "full" for="star3" title="Meh - 3 stars"></label>
                                       <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                       <label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                       <input type="radio" id="star2" name="rating" value="2" />
                                       <label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                       <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                       <label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                                       <input type="radio" id="star1" name="rating" value="1" />
                                       <label className = "full" for="star1" title="Sucks big time - 1 star"></label>
                                       <input type="radio" id="starhalf" name="rating" value="half" />
                                       <label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                    <span className="pull-right toRight brands">(55)</span>
                                 </li>
                                 <li>
                                    <fieldset className="rating">
                                       <input type="radio" id="star5" name="rating" value="5" />
                                       <label className = "full" for="star5" title="Awesome - 5 stars"></label>
                                       <input type="radio" id="star4half" name="rating" value="4 and a half" />
                                       <label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                       <input type="radio" id="star4" name="rating" value="4" />
                                       <label className = "full" for="star4" title="Pretty good - 4 stars"></label>
                                       <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                       <label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                                       <input type="radio" id="star3" name="rating" value="3" />
                                       <label className = "full" for="star3" title="Meh - 3 stars"></label>
                                       <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                       <label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                       <input type="radio" id="star2" name="rating" value="2" />
                                       <label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                       <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                       <label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                                       <input type="radio" id="star1" name="rating" value="1" />
                                       <label className = "full" for="star1" title="Sucks big time - 1 star"></label>
                                       <input type="radio" id="starhalf" name="rating" value="half" />
                                       <label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                    <span className="pull-right toRight brands">(55)</span>
                                 </li>
                                 <li>
                                    <fieldset className="rating">
                                       <input type="radio" id="star5" name="rating" value="5" />
                                       <label className = "full" for="star5" title="Awesome - 5 stars"></label>
                                       <input type="radio" id="star4half" name="rating" value="4 and a half" /
                                       ><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                       <input type="radio" id="star4" name="rating" value="4" />
                                       <label className = "full" for="star4" title="Pretty good - 4 stars"></label>
                                       <input type="radio" id="star3half" name="rating" value="3 and a half" />
                                       <label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                                       <input type="radio" id="star3" name="rating" value="3" />
                                       <label className = "full" for="star3" title="Meh - 3 stars"></label>
                                       <input type="radio" id="star2half" name="rating" value="2 and a half" />
                                       <label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                       <input type="radio" id="star2" name="rating" value="2" />
                                       <label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                       <input type="radio" id="star1half" name="rating" value="1 and a half" />
                                       <label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                                       <input type="radio" id="star1" name="rating" value="1" />
                                       <label className = "full" for="star1" title="Sucks big time - 1 star"></label>
                                       <input type="radio" id="starhalf" name="rating" value="half" />
                                       <label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                    <span className="pull-right toRight brands">(55)</span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            
  )
}
