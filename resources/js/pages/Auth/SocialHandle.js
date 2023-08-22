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
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';

export default function SocialHandle (props) {
    
const { register, handleSubmit, formState: { errors } } = useForm();
const [msg, setMsg] = useState('');
const email = JSON.parse(localStorage.getItem('Email'));
const [nowLoading, setIsLoading] = useState(false);
const [click, setClick] = useState("Save Changes and NEXT")
const [socialhandle, setSocialHandle] = useState({
      
        istogram:"",   
        tiktok:"",
        youtube:"",   
        facebook:"", 
        twitter:"",  
        pinterest:"",   
        linkedin:"", 
        blogurl:"",  
        email:""
  })
socialhandle.email = email;

const navigate = useNavigate();
const  onHandleChange =(e) =>
    {
         setSocialHandle({...socialhandle, [e.target.name]: e.target.value})
    }
const  onCancel =(e) =>
    {
        navigate('/sign-in');
    }

  
const onSubmit = (data) =>
    {       
    setIsLoading(true)
    setClick("")
    axios
    .post("api/social-Info", socialhandle)
    .then((response) => 
    {
        if (response.data.status === 200) 
        {
            setMsg(response.data.message)
            setSocialHandle({
                istogram:"",   
                tiktok:"",
                youtube:"",   
                facebook:"", 
                twitter:"",  
                pinterest:"",   
                linkedin:"", 
                blogurl:"",   
            })
            setTimeout(() => {
            setMsg("")
            setIsLoading(false)
            setClick("Save Changes and NEXT")
            navigate('/trial')
            }, 2000);
           
        }

        if (response.data.status === "failed") 
            {
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

    <div className="social-page">
        <Typography   color="primary" variant="h4" sx={{pb:1 , fontWeight:'bold',textAlign: 'center'}}>
             LOGO
        </Typography>

        <Card elevation={2}  sx={{p:6,pt:5,mt:3 ,borderRadius: 5}} >

            <CardHeader variant="h6" sx={{ p:0 ,  fontWeight:'bold',textAlign: 'center'}} className="w-100"></CardHeader>
            
            <CardContent className="container p-0" >

                <Form  onSubmit={handleSubmit(onSubmit)} >
                    <Typography className="row title largesize" sx={{pb:3,textAlign: 'center'}} >
                            Social Media Handles
                    </Typography>
                    <Typography className="row" color="grey" sx={{pb:3, pt:0, fontWeight:'reqular',textAlign: 'left'}} >
                            Show case your brand and social media presence to interested influencers who may want to work with you.
                    </Typography>
                    <Stack spacing={0} sx={{pb:0}}>
                        <div className="row ">
                            <div className="col-md-6 col-12">
                            <TextField 
                                   className = "title-inter w-100 w-100"
                                    sx={{
                                        '& .MuiFormLabel-root': {
                                          fontSize: '0.8rem',
                                          mt:'0.1rem',
                                        },
                                      }}
                                    name="istogram"
                                    variant="outlined"
                                    label="Your Istogram handle"
                                    {...register("istogram",{required: true})}
                                    onChange={onHandleChange} 
                                />
                            <Box sx={{mb:2}}>
                                {errors.istogram && <span className="error-message">Please check the Handle</span>}
                            </Box>
                            </div>
                            <div className="col-md-6 col-12">
                            <TextField 
                                        className = "title-inter w-100"
                                        sx={{
                                            '& .MuiFormLabel-root': {
                                              fontSize: '0.8rem',
                                              mt:'0.1rem',
                                            },
                                          }}
                                        name="tiktok"
                                        variant="outlined"
                                        label="Your Tiktok Handle"
                                        {...register("tiktok",{required: true})}
                                        onChange={onHandleChange} 
                                    />
                                <Box sx={{mb:2}}>
                                    {errors.tiktok && <span className="error-message">Please check the Handle</span>}
                                </Box>
                            </div>
                        </div>
                    </Stack>
                    <Stack spacing={0} sx={{pb:0}} >
                        <div className="row ">
                            <div className="col-md-6 col-12">
                                <TextField 
                                        className = "title-inter w-100"
                                        sx={{
                                            '& .MuiFormLabel-root': {
                                              fontSize: '0.8rem',
                                              mt:'0.1rem',
                                            },
                                          }}
                                        name="youtube"
                                        variant="outlined"
                                        label="Your Youtube Handle"
                                        {...register("youtube",{required: true})}
                                        onChange={onHandleChange} 
                                    />
                                <Box sx={{mb:2}}>
                                    {errors.youtube && <span className="error-message">Please check the Handle</span>}
                                </Box>
                            </div>
                            <div className="col-md-6 col-12">
                                <TextField 
                                            className = "title-inter w-100"
                                            sx={{
                                                '& .MuiFormLabel-root': {
                                                  fontSize: '0.8rem',
                                                  mt:'0.1rem',
                                                },
                                              }}
                                            name="facebook"
                                            variant="outlined"
                                            label="Your Facebook Handle"
                                            {...register("facebook",{required: true})}
                                            onChange={onHandleChange} 
                                        />
                                <Box sx={{mb:2}}>
                                    {errors.facebook && <span className="error-message">Please check the Handle</span>}
                                </Box>
                            </div>
                        </div>
                        </Stack>
                        <Stack spacing={0} sx={{pb:0}}>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <TextField 
                                           className = "title-inter w-100"
                                            sx={{
                                                '& .MuiFormLabel-root': {
                                                  fontSize: '0.8rem',
                                                  mt:'0.1rem',
                                                },
                                              }}
                                            name="twitter"
                                            variant="outlined"
                                            label="Your Twitter Handle"
                                            {...register("twitter",{required: true})}
                                            onChange={onHandleChange} 
                                        />
                                    <Box sx={{mb:2}}>
                                        {errors.twitter && <span className="error-message">Please check the Handle</span>}
                                    </Box>
                                </div>
                                <div className="col-md-6 col-12">
                                        <TextField 
                                               className = "title-inter w-100"
                                                sx={{
                                                    '& .MuiFormLabel-root': {
                                                      fontSize: '0.8rem',
                                                      mt:'0.1rem',
                                                    },
                                                  }}
                                                name="pinterest"
                                                variant="outlined"
                                                label="Your Pinterest Handle"
                                                {...register("pinterest",{required: true})}
                                                onChange={onHandleChange} 
                                            />
                                        <Box sx={{mb:2}}>
                                            {errors.pinterest && <span className="error-message">Please check the Handle</span>}
                                        </Box>
                                </div>
                            </div>
                        </Stack>
                        
                        <Stack spacing={0} sx={{pb:0}} >
                            <div className="row">
                                <div className="col-md-6 col-12">
                                        <TextField 
                                               className = "title-inter w-100"
                                                sx={{
                                                    '& .MuiFormLabel-root': {
                                                      fontSize: '0.8rem',
                                                      mt:'0.1rem',
                                                    },
                                                  }}
                                                name="linkedin"
                                                variant="outlined"
                                                label="Your LinkedIn Handle"
                                                {...register("linkedin",{required: true})}
                                                onChange={onHandleChange} 
                                            />
                                        <Box sx={{mb:2}}>
                                            {errors.linkedin && <span className="error-message">Please check the Handle</span>}
                                        </Box>
                                    </div>
                            
                            
                               <div className="col-md-6 col-12">
                                    <TextField 
                                               className = "title-inter w-100"
                                                sx={{
                                                    '& .MuiFormLabel-root': {
                                                      fontSize: '0.8rem',
                                                      mt:'0.1rem',
                                                    },
                                                  }}
                                                name="blogurl"
                                                variant="outlined"
                                                label="Your Blog Url"
                                                {...register("blogurl",{required: true})}
                                                onChange={onHandleChange} 
                                            />
                                    <Box sx={{mb:2}}>
                                        {errors.blogurl && <span className="error-message">Please check the Handle</span>}
                                    </Box>
                                 </div>
                            </div>
                        </Stack>
                      
                        <Typography color="red" className="d-flex justify-content-center">{msg}</Typography>
                <div className= "row d-flex justify-content-end pt-2">
                
                <Button  className="text-center m-2 w-25  btn btn-outline-primary"
                    color="white"
                    onClick={onCancel}
                >
                Cancel
                </Button>
                
                <Button
                    className="text-center m-2 w-50  mx-3 title-inter w-100"
                    color="primary"
                    style={{maxWidth: '260px', maxHeight: '48px', minWidth: '100px', minHeight: '48px'}}
                    sx={{ pb:2,width:200 ,fontsize:20,  fontWeight:'bold'}}
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