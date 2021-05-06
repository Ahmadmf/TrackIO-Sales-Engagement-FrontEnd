import React, {useState} from 'react';
import {Link } from "react-router-dom";
import { BsFillPlusSquareFill} from "react-icons/bs";
import {Button, Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import C from "../../resource/values";
import axios from "axios";
const ModalExample = (props) =>{
  const {
    className
  }=props;

  const [modal,setModal]=useState(false)
  const toggle = () => setModal(!modal);
  var details = "";
  let campaignData={
    campaignName:"",
    dailyProspectNumber:""
  }

  const onChange = (e) => {
    // if(e.target.name == 'name'){
    //     users.name = e.target.value
    // }
    // if(e.target.name=='phone'){
    //     users.phone = e.target.value
    // }
    // else{
    // details = e.target.value
    // }
    if(e.target.name=='campaignName'){
      campaignData.campaignName=e.target.value;
    }
    if(e.target.name=='dailyProspect'){
      campaignData.dailyProspectNumber=e.target.value;
    }
    details=e.target.value;
   // console.log(campaignN);
    //console.log(details);
  
} 
const submitNewCampaign = () => {
//console.log(props.detailsType);
//console.log(campaignN);
//  axios.post(C.SERVER_CALL+'/api/campaigns/addCampaign');                   
  if(details.length > 0){
    props.func(campaignData);
  }

} 
// submitNewCampaign(e){

  
// }
// submitNewCampaign =async (value,type) =>{
//   console.log("In Submit Campaign");
// }


  return(
    <div>
      <form>
        <Button color="primary" type="button" style={{float: "right"}} onClick={toggle}>
        <BsFillPlusSquareFill
                                style={{
                                fontSize: "20px",
                                marginLeft: "15px",
                                cursor: "pointer",
                            }}/> New Campaign</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}></ModalHeader>
          <div>
            <h3>Add New Campaign</h3>
          </div>
          <ModalBody>
          <div style={{ display: "block" }}>
                                        <span class="input-group-text"> Campaign Name </span>
                                
                                        <span >
                                            <input  name="campaignName" id="text"  onChange={onChange} placeholder="Sales Conference Followup" class="form-control" />
                                        </span>
                                        <span class="input-group-text">Daily Prospect Start</span>
                                        <span>
                                          <input name="dailyProspect" id="text" onChange={onChange} class="form-control"></input>
                                          
                                        </span>
                                        


          </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {submitNewCampaign();toggle();}}>SUBMIT</Button>
          </ModalFooter>

        </Modal>

      </form>
    </div>
  )

}
export default ModalExample;




// import React, { Component, useState } from 'react';
// import './test.css'
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { render } from '@testing-library/react';
// import axios from 'axios';
// import { Link } from "react-router-dom";

// const ModalExample = (props) => {
//     const {
//         buttonLabel,
//         className
//     } = props;

//     const [modal, setModal] = useState(false);
//     const toggle = () => setModal(!modal);
//     const[bankname,setBankname] = useState(props.oldDet.bankname)
//     const[Account,setAccount] = useState(props.oldDet.account)
//     const[iifsc,setiifsc] = useState(props.oldDet.iifsc)
//     var details = ""
//     // let users = {
//     //     name:props.oldDet.name,
//     //     phone:props.oldDet.phone
//     // }
//     let Bank = {
//         bankname:bankname,
//         accountnumber:Account,
//         iifsc:iifsc
//     }
//     const updateDetail = () => {
//         if(details.length > 0){
//         if (props.detailsType == "Username") {
//             props.func(details, "name")
//         }
//          else
//             if (props.detailsType == "GST Number") {
//                 props.func(details, "gstin")
//             }
//             else
//             if (props.detailsType == "BankDetails") {
//                 props.func(Bank, "bankdetails")
//             }  else
//                 props.func(details, "pincode")
//         }
//     }   
//     const onChange = (e) => {
//         // if(e.target.name == 'name'){
//         //     users.name = e.target.value
//         // }
//         // if(e.target.name=='phone'){
//         //     users.phone = e.target.value
//         // }
//         // else{
//         // details = e.target.value
//         // }
//         details=e.target.value
//     }   
//     const onchangeBank = (e)=>{
//         if(e.target.name == 'bankname'){
//             setBankname(e.target.value)
//         }
//         if(e.target.name == 'accountnumber'){
//             setAccount(e.target.value)
//         }
//         if(e.target.name == 'iifsc'){
//             setiifsc(e.target.value)
//         }
//     }
//     return (
//         <div>
//             <form>
//                 <Button color="primary" type="button" style={{ float: " right" }} onClick={toggle}>EDIT</Button>
//                 <Modal isOpen={modal} toggle={toggle} className={className}>
//                     <ModalHeader toggle={toggle}>{props.detailsType}</ModalHeader>
//                     <ModalBody>
//                         {(() => {
//                             if (props.detailsType == "Username") {
//                                 return (
//                                     <div style={{ display: "block" }}>
//                                         <span class="input-group-text">Name </span>
                                
//                                         <span >
//                                             <input  id="text" onChange={onChange} placeholder={props.oldDet} class="form-control" />
//                                         </span>
//                                         <span class="input-group-text">Phone Number </span>
                                        
//                                         <Link to={"/verifyNumber"} style={{ all: "unset" }}>
//                                                <div className="inner-div-dash">
//                                                    <Button color="primary"> Add New Number </Button> 
//                                                 </div>
//                                         </Link>

//                                     </div>
//                                 );
//                             } else if (props.detailsType == "GST Number") {
//                                 return (
//                                     <div style={{ display: "flex" }}>
//                                         <span class="input-group-text">GSTIN </span>
//                                     &nbsp;
//                                     &nbsp;
//                                         <span>
//                                             <input id="text" onChange={onChange} placeholder={props.oldDet} class="form-control" />
//                                         </span>
//                                     </div>
//                                 );    
//                             } else if (props.detailsType == "Address") {
//                                 return (
//                                     <div style={{ display: "flex" }}>
//                                         <span class="input-group-text">Address </span>
//                                     &nbsp;
//                                     &nbsp;
//                                         <span>
//                                             <input id="text" onChange={onChange} placeholder={props.oldDet} class="form-control" />
//                                         </span>
//                                     </div>
//                                 );
//                             }
//                             else if (props.detailsType == "BankDetails") {
//                                 return (
//                                     <div style={{ display: "block" }}>
//                                         <span class="input-group-text">Bank Name</span>
                                
//                                         <span >
//                                             <input name='bankname' id="text" onChange={onchangeBank} placeholder={props.oldDet.bankname} class="form-control" />
//                                         </span>
//                                         <span class="input-group-text">Account Number </span>
                                        
//                                             <input name='accountnumber' id="text" onChange={onchangeBank} placeholder={props.oldDet.account} class="form-control" />
//                                             <span class="input-group-text">IIFSC Number</span>
                                
//                                 <span >
//                                     <input name='iifsc' id="text" onChange={onchangeBank} placeholder={props.oldDet.iifsc} class="form-control" />
//                                 </span>
//                                     </div>
//                                 );
//                             }
//                         })()}
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button color="primary" onClick={() => { updateDetail(); toggle(); }}>SUBMIT</Button>{' '}
//                         {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
//                     </ModalFooter>
//                 </Modal>
//             </form>
//         </div>
//     );
// }


// export default ModalExample;
