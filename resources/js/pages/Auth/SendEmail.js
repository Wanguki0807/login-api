import { Component, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../Form.css";
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CircularProgress
} from '@mui/material';


export default function EmailVerify (props) {

const navigate = useNavigate();   
const [start, setStart] = useState("Resend verification link");
const [isLoading, setIsLoading] = useState(false);
const email = JSON.parse(localStorage.getItem('Email'));

const onSubmitHandler = async(e) => {
    setIsLoading(true)
    setStart("")
    setTimeout(() => 
      {
      try {
         axios.post('/api/recend-email');
        console.log('Verification email sent');
      } catch (error) {
        console.error('Error sending verification email', error);
      }

      setIsLoading(false)
      setStart("Resend Verification link")
      }, 1000);

    }
    return (
      <div className="sendEmail-page">
         <Card elevation={0} sx={{p:3, pb:0 ,borderRadius: 5}} className="transparent">
          <CardHeader
            sx={{ pb:2 ,  fontWeight:'bold  ',textAlign: 'center'}}
            className="w-100"
            variant="h3"
            title="LOGO"
          />
          <CardContent   >
            <Form >
             <Typography  className="title bigsize mb-3 text-center">
                    Confirm your email address
             </Typography>
             <Typography  color="text.secondary" className="title-inter smallsize"  sx={{pt:2 ,textAlign: 'center'}}>
                 please verify your email address by clicking the link sent to
             </Typography>
             <Typography  sx={{pb:4,textAlign: 'center'}}  className="title smallsize" >
                {email}
             </Typography>
            <div  className="d-flex justify-content-center" >
             <Button
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                color="primary"
                variant="contained"
                className="title-inter w-75 smallsize mainButton "
                onClick={onSubmitHandler}
              >
               <span className="ml-2"> {start } </span>
                {isLoading ? (
                 
                 <CircularProgress color="inherit" size="1.4rem" />
                ) : (
                  <span></span>
                )}
              </Button>
              </div>
              
            </Form>
        </CardContent>
        </Card>
      </div>
    );
}