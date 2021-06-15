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
  let emailData={
    receiverMail:"",
    subject:"",
    message:""
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
    if(e.target.name=='receiverMail'){
      emailData.receiverMail=e.target.value;
    }
    if(e.target.name=='subject'){
      emailData.subject=e.target.value;
    }
    if(e.target.name=='message'){
      emailData.message=e.target.value;
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
    props.func(emailData);
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
         Send Email</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}></ModalHeader>
          <div>
            <h3>Email Template</h3>
          </div>
          <ModalBody>
          <div style={{ display: "block" }}>
                                        <span class="input-group-text"> Receiver Mail ID </span>
                                
                                        <span >
                                            <textarea  name="receiverMail" id="text"  onChange={onChange} placeholder="email" class="form-control" required/>
                                        </span>
                                        <span class="input-group-text"> Email Subject</span>
                                
                                        <span >
                                            <input  name="subject" id="text"  onChange={onChange} placeholder="subject" class="form-control" required/>
                                        </span>
                                        <span class="input-group-text">Email Body</span>
                                        <span>
                                          {/* <input name="message" id="textarea" onChange={onChange} class="form-control"></input> */}
                                          <textarea name="message" onChange={onChange} rows="10" class="form-control" required></textarea>
                                          
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