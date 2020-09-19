import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form,Button,FormControl} from 'react-bootstrap'
import { BiAbacus } from "react-icons/bi"
import { VscAccount } from "react-icons/vsc"
import { BsSearch ,BsDash,BsPlus,BsBellFill} from "react-icons/bs"
import { ImFileText2,ImCart } from "react-icons/im"
import { FcApproval,FcExpired,FcDisapprove } from "react-icons/fc"
import { ImCross,ImCircleDown } from "react-icons/im";

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inc:4
        }
    }
    // handleRemove=()=>{
    //     this.setState({inc: inc--})
    // }
    // handleAdd=()=>{
    //     this.setState({inc: inc++})
    // }
    render(){
        return(
            <div>
                <nav class="navbar navbar-light bg-light">
               <a  href="#"><BiAbacus style={{color:"grey",height:"30px",width:"25px"}}/></a>
               <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" style={{position:"absolute",left:"30%", width:"40%",borderRadius:"25px"}} />
    <BsSearch style={{borderRadius:"80px",backgroundColor:"yellow",height:"25px",width:"30px",position:"absolute",left:"67%"}}/>
    <VscAccount style={{marginLeft:"30px",position:"absolute",left:"80%"}}/>
    <ImFileText2 style={{marginRight:"10px",position:"absolute",left:"85%"}}/><ImCart style={{marginLeft:"0px",position:"absolute",left:"88%"}}/>
                </Form></nav> 
                <div >
                <h2>Recomended Products</h2>
                <div class="container py-3" style={{backgroundColor:"lightGrey"}}>
                    <div class ="row">
                        <div class="col-md-8">
                        <p style={{display:"inline"}}> Seleted Filters:</p> <Button variant="light" style={{borderRadius:"25px",borderColor:"black",marginBottom:"8px"}}><ImCross/> Continental</Button>
                        </div>
                        <div class="col-md-4">
                        <p style={{display:"inline",marginLeft:"170px"}}> Sort By</p> <Button variant="light" style={{borderRadius:"25px",borderColor:"black",marginBottom:"8px",float:"right"}}> <ImCircleDown/>Popularity</Button>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src="https://thumbs.dreamstime.com/z/bestseller-yellow-square-price-tag-bestseller-price-tag-117515497.jpg" style={{height:"32px",width:"80px"}}/>
                         <img src="https://www.canadianfreestuff.com/wp-content/uploads/2018/10/2019-12-15_continental_rebate_B.jpg" style={{height:"132px"}}/>
                                    </div>
                                    <div class="col-md-8">
                                  <h4 style={{textDecoration:"underline"}}>Continental -Contiecocontact 5 </h4>
                                  <div class="row">
                                      <div class="col-md-3">
                                      <img src="https://comps.canstockphoto.com/approved-stamp-icon-sign-illustration_csp53797322.jpg" style={{height:"50px"}}/>
                                      </div>
                                      <div class="col-md-3">
                                       <p>205/15R16H SUV</p>
                                      </div>
                                      <div class="col-md-3">
                                       <p>Stock <FcApproval/>Price 340</p>
                                       
                                      </div>
                                      <div class="col-md-3">
                                       <p>Total 1,360</p>
                                      </div>
                                  
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6" style={{backgroundColor:"white"}}>
                                        <BsDash style={{backgroundColor:"pink"}} /> {this.state.inc } <BsPlus style={{backgroundColor:"pink"}}/>
                                      </div>
                                      <div class="col-md-6">
                                      <Button variant="warning" style={{borderRadius:"25px"}}><ImCart/> Add to Cart</Button>
                                      </div>

                                  </div>
                                  </div>

                                </div>

                            </div>

                        </div>
                        <div class="col-md-6">
                        <div class="card">
                                <div class="row">
                                    <div class="col-md-4">
                                    <img src="https://thumbs.dreamstime.com/z/bestseller-yellow-square-price-tag-bestseller-price-tag-117515497.jpg" style={{height:"32px",width:"80px"}}/>
                         <img src="https://www.canadianfreestuff.com/wp-content/uploads/2018/10/2019-12-15_continental_rebate_B.jpg" style={{height:"132px"}}/>
                                    </div>
                                    <div class="col-md-8">
                                  <h4 style={{textDecoration:"underline"}}>Continental -Contiecocontact 5 </h4>
                                  <div class="row">
                                      <div class="col-md-3">
                                      <img src="https://comps.canstockphoto.com/approved-stamp-icon-sign-illustration_csp53797322.jpg" style={{height:"50px"}}/>
                                      </div>
                                      <div class="col-md-3">
                                       <p>205/15R16H SUV</p>
                                      </div>
                                      <div class="col-md-3">
                                       <p>Stock <FcApproval/>Price 340</p>
                                       
                                      </div>
                                      <div class="col-md-3">
                                       <p>Total 1,360</p>
                                      </div>
                                  
                                  </div>
                                  <div class="row">
                                      <div class="col-md-6" style={{backgroundColor:"white"}}>
                                        <BsDash style={{backgroundColor:"pink"}}/> {this.state.inc } <BsPlus style={{backgroundColor:"pink"}}/>
                                      </div>
                                      <div class="col-md-6">
                                      <Button variant="warning" style={{borderRadius:"25px"}}><ImCart/> Add to Cart</Button>
                                      </div>

                                  </div>
                                  </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div class="card" style={{marginTop:"10px"}}>
                    <div class="row">
                                       <div class="col-md-2">
                                       <p style={{textDecoration:"underline"}}>Continental Premium contract</p>
                                        </div>
                                      <div class="col-md-1">
                                      <img src="https://comps.canstockphoto.com/approved-stamp-icon-sign-illustration_csp53797322.jpg" style={{height:"50px"}}/>
                                      </div>
                                      <div class="col-md-1">
                                       <p>205/15R16H SUV</p>
                                      </div>
                                      <div class="col-md-2">
                                       <p>Stock <FcApproval/>    Price 340</p>
                                       
                                      </div>
                                      <div class="col-md-2">
                                     <BsDash style={{backgroundColor:"pink"}}/> {this.state.inc } <BsPlus style={{backgroundColor:"pink"}}/>
                                      </div>
                                      <div class="col-md-2">
                                       <p>Total 1,360</p>
                                      </div>
                                      <div class="col-md-2">
                                      <Button variant="warning" style={{borderRadius:"25px"}}><ImCart/> Add to Cart</Button>
                                      </div>
                                  
                                  </div>
                                  </div>
                                  <div class="card" style={{marginTop:"10px"}}>
                    <div class="row">
                                       <div class="col-md-2">
                                       <p style={{textDecoration:"underline"}}>Continental Premium contract</p>
                                        </div>
                                      <div class="col-md-1">
                                      <img src="https://comps.canstockphoto.com/approved-stamp-icon-sign-illustration_csp53797322.jpg" style={{height:"50px"}}/>
                                      </div>
                                      <div class="col-md-1">
                                       <p>205/15R16H SUV</p>
                                      </div>
                                      <div class="col-md-2">
                                       <p>Stock <FcExpired/>    Price 340</p>
                                       <p>8 Tires Left</p>
                                       
                                      </div>
                                      <div class="col-md-2">
                                     <BsDash style={{backgroundColor:"pink"}}/> {this.state.inc } <BsPlus style={{backgroundColor:"pink"}}/>
                                      </div>
                                      <div class="col-md-2">
                                       <p>Total 1,360</p>
                                      </div>
                                      <div class="col-md-2">
                                      <Button variant="warning" style={{borderRadius:"25px"}}><ImCart/> Add to Cart</Button>
                                      </div>
                                  
                                  </div>
                                  </div>
                                  <div class="card" style={{marginTop:"10px"}}>
                    <div class="row">
                                       <div class="col-md-2">
                                       <p style={{textDecoration:"underline"}}>Continental Premium contract</p>
                                        </div>
                                      <div class="col-md-1">
                                      <img src="https://comps.canstockphoto.com/approved-stamp-icon-sign-illustration_csp53797322.jpg" style={{height:"50px"}}/>
                                      </div>
                                      <div class="col-md-1">
                                       <p>205/15R16H SUV</p>
                                      </div>
                                      <div class="col-md-2">
                                       <p>Stock <FcDisapprove/>    Price 340</p><p>Back in 1 Week!</p>

                                       
                                      </div>
                                      <div class="col-md-2">
                                     <BsDash style={{backgroundColor:"pink"}}/> {this.state.inc } <BsPlus style={{backgroundColor:"pink"}}/>
                                      </div>
                                      <div class="col-md-2">
                                       <p>Total 1,360</p>
                                      </div>
                                      <div class="col-md-2">
                                      <Button variant="light" style={{borderRadius:"25px",borderColor:"black"}}><BsBellFill/> Notify Me</Button>
                                      </div>
                                      
                                  
                                  </div>
                                  <Button variant="light" style={{borderRadius:"25px",borderColor:"black",marginBottom:"8px",fontWeight:"bold"}}> Load More Results</Button>
                                  </div>

                </div>
                </div>
                
            </div>
        )
    }
}
export default Home
