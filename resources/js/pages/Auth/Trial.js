import { Component, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "../Form.css";
import { useNavigate } from 'react-router-dom';
import  ReactCheck from "../../Assets/SVG/check-21.svg";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
 
} from '@mui/material';


export default function Trial (props) {
const [click,setclick] = useState("start trial");
const [curtrial, setTrial] = useState({
    trial:"",
    email:"",
    });
const curEmail = JSON.parse(localStorage.getItem('Email')); 
const navigate = useNavigate();
const  onFreeClicked =(e) =>{
    setclick("Start Free Trial");
    
  
  }
  const  onStandardClicked =(e) =>{
    
  }

    return (
      <div className="trial-page">
         <Typography   color="primary" variant="h4" sx={{pb:2,m:1, fontWeight:'bold',textAlign: 'center'}}>
          LOGO
             </Typography>
        <div className="row">
          <div className="col-md-6 col-12 pr-2">
            <Card className="mainCard" sx={{p:2 ,borderRadius: 5}}  >
            <CardHeader variant="h6"avatar={<Avatar alt="Apple" src="../../Assets/png/avatar.png" />}sx={{ pb:0 ,  fontWeight:'bold',textAlign: 'center'}}  className="w-100"
              >
            </CardHeader>
            
            <CardContent className="d-flex">
                <div className=" w-100" >
                <Typography  variant="h5" className="title" sx={{pb:0 ,  fontWeight:'bold',textAlign: 'left'}} >
                       $0
                </Typography>
                <Typography  variant="h6"className="title" sx={{pb:0, fontWeight:'bold',textAlign: 'left'}}>
                    Free trial
                </Typography>
                <Typography  color="text.secondary"className="title"  sx={{pb:1 ,   fontWeight:'regular',textAlign: 'left'}}>
                To familiarize yourself with our tools
                </Typography>
                <hr></hr>
                <div className="col">  
                    <div className="d-flex justify-content-start justify-items-center">
                       <img src={ReactCheck} className="me-2  mb-2 pb-2" />
                        <Typography className="mb-2 pb-2 title-inter tinysize">Access the Influencer Analyzer(Limited)</Typography>
                    </div>

                    <div className="d-flex justify-content-start  justify-items-center">
                    <img src={ReactCheck}  className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Access the Influencer Finder(Limited)</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                    <img src={ReactCheck}  className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Messaging System(Limited)</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck}  className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Job Board</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck}  className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Location</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck}  className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Total Reach Count</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck} className="me-2 mb-2 pb-2" />
                        <Typography className="mb-2 pb-2 title-inter tinysize">Engagement Rate</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck} className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Compensation Method</Typography>
                    </div>

                    
                    <div className= "d-flex justify-content-center mt-3">
                        <Button
                            className="text-center m-2 w-100 btn btn-outline-primary title-inter smallsize mainButton"
                            style={{maxWidth: '260px', maxHeight: '48px', minWidth: '100px', minHeight: '48px'}}
                            color="inherit"
                            sx={{ pb:2,  fontWeight:'bold'}}
                            onClick = {onFreeClicked}
                        >Start Free trial
            
                        
                        </Button>
                    </div>
                </div>
                </div>
            
            </CardContent>
            </Card>
            </div>
            <div className="col-md-6 col-12 pl-2">
            <Card className="mainCard"  sx={{p:2,borderRadius: 6}}  >
            <CardHeader variant="h6"avatar={<Avatar alt="Apple" src="../public/logo192.png" />}sx={{ pb:0 ,  fontWeight:'bold',textAlign: 'center'}}  className="w-100"
              >
            </CardHeader>
            
            <CardContent className="d-flex">
                <div className=" w-100" >
                <Typography className="title" variant="h5" sx={{pb:0 ,  fontWeight:'bold',textAlign: 'left'}} >
                       $99
                </Typography>
                <Typography className="title" variant="h6" sx={{pb:0, fontWeight:'bold',textAlign: 'left'}}>
                    Standard trial
                </Typography>
                <Typography  className="title" color="text.secondary"  sx={{pb:1 ,   fontWeight:'regular',textAlign: 'left'}}>
                To familiarize yourself with our tools
                </Typography>
                <hr></hr>
                <div className="col">  
                <div className="d-flex justify-content-start justify-items-center">
                   <img src={ReactCheck} className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Access the Influencer Analyzer(Full)</Typography>
                    </div>

                    <div className="d-flex justify-content-start  justify-items-center">
                   <img src={ReactCheck}  className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Access the Influencer Finder(Full)</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck}  className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Messaging System(Full)</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck}  className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Job Board</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck}  className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2 title-inter tinysize">Compaign Management</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck}  className="me-2 mb-2 pb-2"/>
                        <Typography className="mb-2 pb-2">Perfermance Tracking</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck} className="me-2 mb-2 pb-2" />
                        <Typography className="mb-2 pb-2 title-inter tinysize">Reporting</Typography>
                    </div>

                    <div className="d-flex justify-content-start">
                   <img src={ReactCheck} className="me-2 mb-2 pb-2" />
                        <Typography className="mb-2 pb-2 title-inter tinysize" >Etc...</Typography>
                    </div>
                    
                    <div className= "d-flex justify-content-center mt-3">
                        <Button
                            className="text-center m-2 w-100 btn btn-outline-primary title-inter smallsize mainButton"
                           style={{maxWidth: '260px', maxHeight: '48px', minWidth: '100px', minHeight: '48px'}}
                           
                            color="inherit"
                            sx={{ pb:2,  fontWeight:'bold'}}
                            onClick = {onStandardClicked}
                        >
                   Start Standard Trial
                        
                        </Button>
                    </div>
                </div>
                </div>
            
            </CardContent>
            </Card>
            </div>
        </div>
      </div>
    );
  }