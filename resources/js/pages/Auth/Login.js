import { Component, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "../Form.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Box,
  // Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';
export default function Signin (props) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signInData, setsignInData] = useState({
        password: "",
        email: ""
  })
 const [msg, setMsg] = useState('');
 const [confirmMsg, setConfirmMsg] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const [Login, setLogin] = useState("Log In");
 
const onHandleChange = (e) => {
    setsignInData({...signInData, [e.target.name]: e.target.value})
   }
  const onSubmit = (data) => {
      console.log(signInData);
    setIsLoading(true);
    setLogin("");
    setTimeout(() => {
    axios
      .post("/api/user-signin", signInData)
       .then((response) => {
         setLogin("Log In")
          setIsLoading(false)
        
        if (response.data.status === 200) {
          setMsg(response.data.message)
          setsignInData({
            email: "",
            password: "",
          })
          setTimeout(() => {
            setMsg("")
          }, 2000);
          navigate('/home',{ state: { data:signInData } })
          setLogin("Log in")
          setIsLoading(false)
         
        }

        if (response.data.status === "failed") {
          setMsg(response.data.message)
          setTimeout(() => {
            setMsg("")
          }, 4000);
        setLogin("Log In")
        setIsLoading(false)
        }
      });
    }, 2000);
  };

    return (
      <div className="signin-page align-items-center">
       < Box sx={{ mb:1 }} >
          <Link 
            to="/Dashboard"
            className="d-flex align-items-center mb-4"
            color="interit"
          >
            <SvgIcon sx={{hegiht:15}}>
              <ArrowLeftIcon   color='black' variant="small"/>
            </SvgIcon>
            <Typography color='black' className="linkback ms-2 "  variant="body1" >
              Dashboard
            </Typography>
          </Link>
        </Box>


        <Card elevation={16} sx={{borderRadius: 5 }} className="card  px-4 pt-4 pb-3">
          <CardHeader   className=" smalltitle mt-2" varient="h6"  title="Log In"
            subheader={(
              <Typography
                color="text.secondary"
                sx={{mt:1}}
                variant="body2"
              >
                Don`t` have an account?
                &nbsp;
                <Link
                  
                  to="/"
                  underline="hover"
                  variant="subtitle2"
                >
                 Register
                </Link>
              </Typography>
            )}
          
          />
          <CardContent >
            <Form  onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={0} sx={{pb:0}}>
            
              <TextField className="title-inter"
                
                name="email"
                variant="outlined"
               
                 label="Enter Email"
                 sx={{
                  '& .MuiFormLabel-root': {
                    fontSize: '0.8rem',
                    mt:'0.1rem',
                  },
                }}
                 {...register("email",{ required: true,  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                 onChange={onHandleChange}
                />
                 <Box sx={{mb:3}}>
                  {errors.email && errors.email.type === "required" && (
                    <span className="error-message">This is required field</span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="error-message">Enter a valid email</span>
                  )}
                </Box>                                
                <TextField className="title-inter"
                  name="password"
                  type="password"
                  variant="outlined"
                  label="Enter password"
                  sx={{
                    '& .MuiFormLabel-root': {
                      fontSize: '0.8rem',
                      mt:'0.1rem',
                    },
                  }}
                 
                 {...register("password", {
                            required: true,
                           minLength:6
                        })}
                  onChange={onHandleChange} 
                   value={signInData.password}
                />
                 <Box  sx={{mb:3}}>
                    {errors.password && errors.password.type === "required" && (
                      <span className="error-message">This is required field</span> 
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                      <span className="error-message">
                        Password is not good.Please type more than 6 letters
                      </span>
                    )}
                  </Box>        
                
                 
              </Stack>
           
                <Typography color="red" className="d-flex justify-content-center mb-3">{msg}</Typography>
              <Button
                className="text-center mb-3 w-100 hover-shadow d-flex align-items-center justify-content-center rounded-6"
                color="primary"
                style={{ maxHeight: '48px', minWidth: '100px', minHeight: '48px'}}

                // onClick={onSubmitHandler}
              >
               <span className="ml-2"> {Login } </span>
                {isLoading ? (
                 
                 <CircularProgress color="inherit" size="2rem" />
                ) : (
                  <span></span>
                )}
              </Button>

              <Link 
            to="/ForgetPassword"
            className="d-flex justify-content-center"
            color="text.black"
            underline="hover"
          >Forget Password?</Link>
            </Form>
        </CardContent>
        </Card>
      </div>
    );
  }