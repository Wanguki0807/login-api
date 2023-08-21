import { Component, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "../Form.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {
  Box,
  // Button,
  Card,
  CardContent,
  CardHeader,
  FormHelperText,
  Stack,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';
export default function SecondInfo (props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [msg, setMsg] = useState('');
    const email = JSON.parse(localStorage.getItem('Email'));
    const [nowLoading, setIsLoading] = useState(false);
    const [click, setClick] = useState("Save Changes and NEXT")
    const [secondInfoData, setsecondInfoData] = useState({
      
        nicCategory:"",   
        budget:"",
        companysize:"",   
        companyfounded:"", 
        aboutbusiness:"",  
        email:""
  })
  console.log(email);
  secondInfoData.email = email;
 
const navigate = useNavigate();
const  onHandleChange =(e) =>{
   setsecondInfoData({...secondInfoData, [e.target.name]: e.target.value})
  }
const onCancel = (e) =>{
    navigate("/sign-in")
}
const onSubmit = (data) =>{
    setIsLoading(true)
    setClick("")
    axios
    .post("api/second-Info", secondInfoData)
     .then((response) => {
      if (response.data.status === 200) {
        setMsg(response.data.message)
        setsecondInfoData({
            nicCategory:"",   
            budget:"",
            companysize:"",   
            companyfounded:"", 
            aboutbusiness:"",  
        })
        setTimeout(() => {
          setMsg("")
        }, 2000);
        
        navigate('/socialHandle')
        setIsLoading(false)
        setClick("Save Changes and NEXT")
      }

      if (response.data.status === "failed") {
        setMsg(response.data.message)
        setTimeout(() => {
          setMsg("")
          setIsLoading(false)
        setClick("Save Changes and NEXT")
        }, 2000);
        
      }
    });

}
    return (
      <div className="secondInfo-page">
         <Typography   color="primary" variant="h4" sx={{pb:1,textAlign: 'center'}}>
          LOGO
             </Typography>
        <Card elevation={2}  sx={{p:6,mt:3 ,borderRadius: 5}} >
          <CardHeader variant="h5"
            sx={{ p:0 ,  fontWeight:'bold',textAlign: 'center'}}
            className="w-100"
          
           ></CardHeader>
          
          <CardContent className="container p-0" >
          <Form  onSubmit={handleSubmit(onSubmit)}>
             <Typography className="row title largesize"sx={{pb:3,textAlign: 'center'}} >
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
                        name="nicCategory"
                        variant="outlined"
                        label="Your Niche Category"
                        {...register("nicCategory",{required: true})}
                        onChange={onHandleChange} 
                    />
                <Box sx={{mb:2}}>
                    {errors.nicCategory && <span className="error-message">Please check the User Name</span>}
                </Box>
                <TextField
                            className = "title-inter"
                            sx={{
                                '& .MuiFormLabel-root': {
                                  fontSize: '0.8rem',
                                  mt:'0.1rem',
                                },
                              }}
                            name="companysize"
                            variant="outlined"
                            label="Your Company Size"
                            {...register("companysize",{required: true})}
                            onChange={onHandleChange} 
                        />
                    <Box sx={{mb:2}}>
                        {errors.companysize && <span className="error-message">Please check the User Name</span>}
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
                            name="budget"
                            variant="outlined"
                            label="Your budget"
                            {...register("budget",{required: true})}
                            onChange={onHandleChange} 
                        />
                    <Box sx={{mb:2}}>
                        {errors.budget && <span className="error-message">Please check the User Name</span>}
                    </Box>
                    
                    <TextField
                            className = "title-inter"
                            sx={{
                                '& .MuiFormLabel-root': {
                                  fontSize: '0.8rem',
                                  mt:'0.1rem',
                                },
                              }}
                            name="companyfounded"
                            variant="outlined"
                            label="Your Company founded"
                            {...register("companyfounded",{required: true})}
                            onChange={onHandleChange} 
                        />
                    <Box sx={{mb:2}}>
                        {errors.companyfounded && <span className="error-message">Please check the User Name</span>}
                    </Box>
             </Stack>
                
            </div>
            <TextField      
                        
                             id="outlined-multiline-flexible"
                            label="Multiline"
                             multiline
                             maxRows={4}
                    
                            sx={{
                                width: { sm: 220, md: 470 },
                                '& .MuiFormLabel-root': {
                                  fontSize: '0.8rem',
                                  mt:'0.1rem',
                                  
                                },
                              }}
                            className="row"
                            name="aboutbusiness"
                            variant="outlined"
                            // label="Write about your business"
                            {...register("aboutbusiness",{required: true})}
                            onChange={onHandleChange} 
                        />
                    <Box sx={{my:1}}>
                        {errors.aboutbusiness && <span className="error-message">Please check the User Name</span>}
                    </Box>
                   
                <Typography color="red" className="d-flex justify-content-center">{msg}</Typography>
                <div className= "row d-flex justify-content-end pt-2">
                
                <Button  className="text-center m-2 w-25"
                    color="white"
                    onClick={onCancel}
                >
                Cancel
                </Button>
                
                <Button
                    className="text-center m-2 w-50"
                    color="primary"
                    sx={{ pb:2,width:200 ,fontsize:20,  fontWeight:'bold'}}
                    type="submit">
                    <span className="ml-2"> {click } </span>
                        {nowLoading ? (
                        
                        <CircularProgress color="inherit" size="1.1rem"/>
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