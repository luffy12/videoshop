import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Modal,Card} from 'react-bootstrap';
import DescriptionIcon from '@material-ui/icons/Description';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StoreIcon from '@material-ui/icons/Store';
import MoneyIcon from '@material-ui/icons/Money';

import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Stepper, Step, StepLabel, Avatar, TextField } from '@material-ui/core';

function App() {
  const [show, setShow] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const handleSubPay=()=>{
setActiveStep(2)
  }
  const handlePayment=()=>{
    setActiveStep(3)
  }
  const handleClose = () => {
    setShow(false);
    setActiveStep(0)
  };
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
      </Button>

        <Modal show={show} onHide={handleClose} style={{ float: "right" }}>
          <Modal.Header closeButton>
            <Avatar className="avatar">N</Avatar>
            <Modal.Title>studio z</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ padding: "0px" }}>

            <div className="modalfirstsection">
              <div className="modalfont">
                <div style={{ padding: "10px" }}>
                  <DescriptionIcon />
                  <p className="modalpara">product</p>

                </div>
                <div style={{ padding: "10px" }}>
                  <PermIdentityIcon />
                  <p className="modalpara">product </p>

                </div>
                <div style={{ padding: "10px" }}>
                  <PermIdentityIcon />
                  <p className="modalpara">product </p>

                </div>
              </div>
              <div className="progressbar">
                <Stepper activeStep={activeStep} alternativeLabel style={{ backgroundColor: "#D3D3D3", padding: "0px" }} className="stepper">
                  {['1', '2', '3'].map((label) => (
                    <Step key={label}>
                      <StepLabel>{""}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>

            </div>
            {activeStep=='2'?<div >
              <div style={{margin:40}}>
                <h6>Payment Method</h6>
               
                <Card style={{display:"flex",justifyContent:"space-evenly",flexDirection:"row",padding:10,marginTop:10}}>
                  
                  <div><input type="radio" id="other" name="gender" value="other"/></div>
                  <MoneyIcon />
                   <div>Cash On Delivery</div>
               </Card>
               <Card style={{display:"flex",justifyContent:"space-evenly",flexDirection:"row",padding:10,marginTop:10}}>
                  
                  <div><input type="radio" id="other" name="gender" value="other"/></div>
                  <CreditCardIcon />
                   <div>Online Banking</div>
               </Card> 
               <Card style={{display:"flex",justifyContent:"space-evenly",flexDirection:"row",padding:10,marginTop:10}}>
                  
                  <div><input type="radio" id="other" name="gender" value="other"/></div>
                  <StoreIcon />
                   <div>Pick up from store </div>
               </Card>
              

              </div>
              <Card style={{margin:20,padding:10}}>
                <h6 style={{borderBottom:"1px solid black",paddingBottom:10}}>ORDER SUMMARY</h6>
                <div style={{display:"flex",justifyContent:"space-between",paddingBottom:10}}>
                  <div>
                    Discount
                  </div>
                  <div>
                    69933.00
                  </div>

                </div>
                <div style={{display:"flex",justifyContent:"space-between",paddingBottom:10}}>
                  <div>
                    Tax Amount
                  </div>
                  <div>
                    69933.00
                  </div>

                </div>
                <div style={{display:"flex",justifyContent:"space-between",paddingBottom:10}}>
                  <div>
                    GST
                  </div>
                  <div>
                    69933.00
                  </div>

                </div>

              </Card>
            </div>:""}

            {activeStep=='0'? <div style={{margin:"20px"}}>
              <div style={{ paddingTop: 10 }}>
                <TextField label="Name" id="standard-size-small" defaultValue="luffy" size="medium" fullWidth />
                <TextField label="Email Id" id="standard-size-small" defaultValue="abc@gmail.com" size="medium" fullWidth />
                <TextField label="Phone" id="standard-size-small" defaultValue="1234567890" size="medium" fullWidth />
                <TextField label="Adhar-id" id="standard-size-small" defaultValue="AD1234980" size="medium" fullWidth />
              </div>
              <h4>
                Address Details
          </h4>
              <div style={{ paddingTop: 10 }}>
                <TextField label="Address" id="standard-size-small" defaultValue="House No# 102" size="medium" fullWidth />
                <TextField label="City" id="standard-size-small" defaultValue="Hyderabad" size="medium" fullWidth />
                <TextField label="Pin" id="standard-size-small" defaultValue="123456" size="medium" fullWidth />
              </div>

            </div> :""}
            <br />
         lorem epusmum to create space in the div gucci prada 
         {activeStep=='3'?
         <div>
           



         </div>:""}
          </Modal.Body>
          <Modal.Footer>
            
          {
            activeStep=='0'?<Button variant="primary" onClick={handleSubPay}>
            Submit and Go to Payment
         </Button>:<Button variant="primary" onClick={handlePayment}>
             Payment
         </Button>
          }
          </Modal.Footer>
        </Modal>
      </header>

    </div>
  );
}

export default App;
