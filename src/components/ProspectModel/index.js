import React, {useState} from 'react';
import {Link } from "react-router-dom";
import { BsFillPlusSquareFill} from "react-icons/bs";
import {Button, Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import C from "../../resource/values";
import axios from "axios";
import "./index.css";



const ModalExample = (props) =>{
  const {
    className
  }=props;

  const [modal,setModal]=useState(false)
  const toggle = () => setModal(!modal);
  var details = "";
  let prospectData={
    status:"",
    email:"",
    firstName:"",
    lastName:"",
    company:"",
    title:"",
    phone:"",
    address:""
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
    if(e.target.name=='status'){
      prospectData.status=e.target.value;
    }
    else if(e.target.name=='email'){
      prospectData.email=e.target.value;
    }
    else if(e.target.name=='firstName'){
      prospectData.firstName=e.target.value;
    }
    else if(e.target.name=='lastName'){
      prospectData.lastName=e.target.value;
    }
    else if(e.target.name=='company'){
      prospectData.company=e.target.value;
    }
    else if(e.target.name=='title'){
      prospectData.title=e.target.value;
    }
    else if(e.target.name =='phone'){
      prospectData.phone=e.target.value;
    }
    else if(e.target.name=='address'){
      prospectData.address=e.target.value;
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
    props.func(prospectData);
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
                            }}/> Add Prospect</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}></ModalHeader>
          <div>
            <h3>Add Prospect</h3>
          </div>
          <ModalBody>
          <div style={{ display: "block" }}>
                                        <span class="input-group-text"> Status </span>
                                
                                        <span >
                                            <input  name="status" id="text"  onChange={onChange} placeholder="" class="form-control" required/>
                                        </span>
                                        <span class="input-group-text"> Email</span>
                                
                                        <span >
                                            <input  name="email" id="text"  onChange={onChange} placeholder="Email" class="form-control" required/>
                                        </span>
                                        <span class="input-group-text"> First Name </span>
                                
                                        <span >
                                            <input  name="firstName" id="text"  onChange={onChange} placeholder="First Name" class="form-control" required/>
                                        </span>

                                        <span class="input-group-text"> Last Name </span>
                                
                                        <span >
                                            <input  name="lastName" id="text"  onChange={onChange} placeholder="Last Name" class="form-control" required/>
                                        </span>
                                        <span class="input-group-text"> Company </span>
                                
                                        <span >
                                            <input  name="company" id="text"  onChange={onChange} placeholder="Company" class="form-control" required/>
                                        </span>
                                        <span class="input-group-text"> Title </span>
                                
                                        <span >
                                            <input  name="title" id="text"  onChange={onChange} placeholder="Title" class="form-control" required/>
                                        </span>
                                        <span class="input-group-text"> Phone </span>
                                
                                        <span >
                                            <input  name="phone" id="text"  onChange={onChange} placeholder="Phone" class="form-control" required/>
                                        </span>
                                        <span class="input-group-text"> Address </span>
                                
                                        <span >
                                            <input  name="address" id="text"  onChange={onChange} placeholder="Address" class="form-control" required/>
                                        </span>
                                        


          </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {submitNewCampaign();toggle();}}>SEND</Button>
          </ModalFooter>

        </Modal>

      </form>
    </div>
  )

}
export default ModalExample;