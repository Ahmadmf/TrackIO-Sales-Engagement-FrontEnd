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
                            }}/> New Template</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}></ModalHeader>
          <div>
            <h3>Edit template</h3>
          </div>
          <ModalBody>
          <div style={{ display: "block" }}>
                                        <span class="input-group-text"> Template Name </span>
                                
                                        <span >
                                            <input  name="templateName" id="text"  onChange={onChange} placeholder="" class="form-control" required/>
                                        </span>
                                        <span class="input-group-text"> Email Subject</span>
                                
                                        <span >
                                            <input  name="emailSubject" id="text"  onChange={onChange} placeholder="" class="form-control" required/>
                                        </span>
                                        <span class="input-group-text"> Email Body </span>
                                
                                        <span >
                                            <textarea name="emailBody" onChange={onChange} rows="10" class="form-control" required></textarea>
                                        </span>
          </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {submitNewCampaign();toggle();}}>SAVE AND CLOSE</Button>
          </ModalFooter>

        </Modal>

      </form>
    </div>
  )

}
export default ModalExample;