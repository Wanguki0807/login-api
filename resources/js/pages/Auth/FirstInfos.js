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
  // Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormHelperText,
  // Link,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';
import { borders } from '@mui/system';
export default function FirstInfo (props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msg, setMsg] = useState('');

    const [nowLoading, setIsLoading] = useState(false);
    const [click, setClick] = useState("Save Changes and NEXT")
    const email = JSON.parse(localStorage.getItem('Email'));
    const [firstInfoData, setfirstInfoData] = useState({
       firstname: "",
        lastname: "",
        phonenumber: "",
        companyname: "",
        companywebsite: "",
        companylocation: "",
        email:""
  })
  firstInfoData.email = email;
const navigate = useNavigate();
const  onHandleChange =(e) =>{
   setfirstInfoData({...firstInfoData, [e.target.name]: e.target.value})
  }
const onCancel = (e) =>{
    navigate("/sign-in")
}
const onSubmit = (data) =>{
    setIsLoading(true)
    setClick("")
    setTimeout(() =>{
    axios
    .post("api/first-Info", firstInfoData)
     .then((response) => {
      if (response.data.status === 200) {
        setMsg(response.data.message)
        setfirstInfoData({
            firstname: "",
            lastname: "",
            phonenumber: "",
            companyname: "",
            companywebsite: "",
            companylocation: "",
        })
        setTimeout(() => {
          setMsg("")          
        }, 2000);
        navigate('/secondInfo')
        setIsLoading(false)
         setClick("Save Changes and NEXT")
      }

      if (response.data.status === "failed") {
        setMsg(response.data.message)
        setTimeout(() => {
          setMsg("");
        }, 2000);
        setIsLoading(false)
        setClick("Save Changes and NEXT")
      }
    }, 2000);
    });

}
    return (
      <div className="firstInfo-page">
         <Typography   color="primary" variant="h4" sx={{pb:1, fontWeight:'bold',textAlign: 'center'}}>
          LOGO
             </Typography>
        <Card elevation={2}  sx={{p:6,pt:5,mt:3 ,borderRadius: 5}} >
          <CardHeader variant="h6"
            sx={{ p:0 ,  fontWeight:'bold',textAlign: 'center'}}
            className="w-100"
          
           ></CardHeader>
          
          <CardContent className="container p-0" >
          <Form  onSubmit={handleSubmit(onSubmit)}>
             <Typography className="row title largesize" sx={{ pb:3,textAlign: 'center'}} >
                    General Business Infomation
             </Typography>
            <div className="row pt-2">
            <Stack spacing={0} sx={{pb:0}} className="col-md-6 col-12">

                <TextField
                     
                     className = "title-inter"
                        sx={{
                            '& .MuiFormLabel-root': {
                              fontSize: '0.8rem',
                              mt:'0.1rem',
                            },
                          }}
                        name="firstname"
                        variant="outlined"
                        label="Your First Name"
                        {...register("firstname",{required: true})}
                        onChange={onHandleChange} 
                    />
                <Box sx={{mb:2}}>
                    {errors.firstname && <span className="error-message">Please fill the blank</span>}
                </Box>
                <TextField
                         className = "title-inter"
                         type="number"
                        sx={{
                            '& .MuiFormLabel-root': {
                              fontSize: '0.8rem',
                              mt:'0.1rem',
                            },
                          }}
                        // label="Phone Number" 
                        name="phonenumber"
                        variant="outlined"
                        label="Your Phone Name"
                        {...register("phonenumber",{required: true})}
                        onChange={onHandleChange} 
                    />
                <Box sx={{mb:2}}>
                    {errors.phonenumber && <span className="error-message">Please fill the blank</span>}
                </Box>
                <TextField
                         className = "title-inter"
                        sx={{
                            '& .MuiFormLabel-root': {
                              fontSize: '0.8rem',
                              mt:'0.1rem',
                            },
                          }} // label="Company Website" 
                        name="companywebsite"
                        variant="outlined"
                        label="Your Company Website"
                        {...register("companywebsite",{required: true})}
                        onChange={onHandleChange} 
                    />
                <Box sx={{mb:2}}>
                    {errors.companywebsite && <span className="error-message">Please fill the blank</span>}
                </Box>

            </Stack>

            <Stack spacing={0} sx={{pb:0}} className="col-md-6 col-12">

               
                <TextField
                         className = "title-inter"
                        sx={{
                            '& .MuiFormLabel-root': {
                              fontSize: '0.8rem',
                              mt:'0.1rem',
                            },
                          }}
                        // label="Last Name" 
                        name="lastname"
                        variant="outlined"
                        label="Your Last Name"
                        {...register("lastname",{required: true})}
                        onChange={onHandleChange} 
                    />
                <Box sx={{mb:2}}>
                    {errors.lastname && <span className="error-message">Please fill the blank</span>}
                </Box>
                <TextField
                         className = "title-inter"
                        sx={{
                            '& .MuiFormLabel-root': {
                              fontSize: '0.8rem',
                              mt:'0.1rem',
                            },
                          }}
                        // label="Company Name" 
                        name="companyname"
                        variant="outlined"
                        label="Your Company Name"
                        {...register("companyname",{required: true})}
                        onChange={onHandleChange} 
                    />
                <Box sx={{mb:2}}>
                    {errors.companyname && <span className="error-message">Please fill the blank</span>}
                </Box>
                <TextField
                      className = "title-inter"
                        name="companylocation"
                        variant="outlined"
                        label="Your Company location"
                        sx={{
                            '& .MuiFormLabel-root': {
                              fontSize: '0.8rem',
                              mt:'0.1rem',
                            },
                          }}
                        {...register("companylocation",{required: true})}
                        onChange={onHandleChange} 
                    />
                <Box sx={{mb:2}}>
                    {errors.companylocation && <span className="error-message">Please fill the blank</span>}
                </Box>
                

                </Stack>
                
          </div>
          <Typography color="red" className="d-flex justify-content-center">{msg}</Typography>
             <div className= "row d-flex justify-content-end pt-2 title-inter">
             
              <Button  className="text-center m-2 w-25  btn btn-outline-primary "
                color="white"
                onClick={onCancel}
              >
              Cancel
              </Button>
             
              <Button
                className="text-center mx-3 m-2 w-50 title-inter"
                color="primary"
                style={{maxWidth: '260px', maxHeight: '48px', minWidth: '100px', minHeight: '48px'}}
              
                sx={{ pb:0,width:200 ,fontsize:20,  fontWeight:'bold'}}
                type="submit">
                <span className="ml-2"> {click } </span>
                    {nowLoading ? (
                    
                    <CircularProgress color="inherit" size="2rem"/>
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