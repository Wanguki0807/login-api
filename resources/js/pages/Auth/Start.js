import { Component, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "../Form.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormHelperText,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';
import { borders } from '@mui/system';
export default function Start (props) {
    
  const [nowLoading, setIsLoading] = useState(false);
  const [click, setClick] = useState("Get Started")
  const navigate = useNavigate();


  const  onStartClicked =(e) =>{
    setIsLoading(true)
    setClick("")
    setTimeout(() => 
      {
        navigate('/firstInfo')
        setIsLoading(false)
        setClick("Get Started")
      }, 2000);
  
  }
  const  onLaterClicked = (e)=>{
    navigate('/sign-in')
  }
    return (
      <div className="start-page">
         <Typography   color="primary" variant="h3" sx={{pb:2, fontWeight:'bold',textAlign: 'center'}}>
          LOGO
             </Typography>
        <Card elevation={16}  sx={{p:7, pt:5,mt:3 ,borderRadius: 5}} >
          <CardHeader variant="h5"
            sx={{ pb:0 ,  fontWeight:'bold',textAlign: 'center'}}
            className="w-100"
          
           ></CardHeader>
          
          <CardContent className="d-flex">
            <div >
             <Typography  className="title largesize" sx={{pb:1 ,textAlign: 'left'}} >
                    Greate News!
             </Typography>
             <Typography  className="title largesize" sx={{pb:3,textAlign: 'left'}}>
                 Your Brand has registered
             </Typography>
             <Typography  color="text.secondary" className="title-inter smallsize"  sx={{pb:3 ,   fontWeight:'regular',textAlign: 'left'}}>
            Lets complete you profile and start connecting with potential influencers
             </Typography>
             <div className= "d-flex ">
              <Button
                className="text-center m-2 w-50 "
                color="primary"
                style={{maxWidth: '260px', maxHeight: '48px', minWidth: '100px', minHeight: '48px'}}
                sx={{ pb:2,width:200 ,fontsize:20,  fontWeight:'bold'}}
                onClick = {onStartClicked}
              >
              <span className="ml-2"> {click } </span>
                {nowLoading ? (
                 
                 <CircularProgress color="inherit" size="2.0rem"/>
                ) : (
                  <span></span>
                )}
              
              </Button>
              <Button  className="text-center m-2 w-25 btn btn-outline-primary "
                size="medium"
                color="white"
              
                onClick = {onLaterClicked}
              >
               Do it later

              </Button>
              

              </div>

            </div>
            <div className="left-img">
            </div>
        </CardContent>
        </Card>
      </div>
    );
  }