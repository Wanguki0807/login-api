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
  Checkbox,
  FormHelperText,
  // Link,
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
 const [pass, setPasswrod] = useState("Reset");
 
const onHandleChange = (e) => {
    setsignInData({...pass, [e.target.name]: e.target.value})
   }
  const onSubmit = (data) => {
    if(pass.password != pass.confirm )
    {
        setConfirmMsg("Confirm Password Error");
        return;
    }
      console.log(password);
    setIsLoading(true);
    setRegister("");
    setTimeout(() => {
    axios
      .post("http://localhost:8000/api/user-signin", signInData)
       .then((response) => {
         setRegister("Log In")
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
          setRegister("Log in")
          setIsLoading(false)
         
        }

        if (response.data.status === "failed") {
          setMsg(response.data.message)
          setTimeout(() => {
            setMsg("")
          }, 4000);
        setRegister("Log In")
        setIsLoading(false)
        }
      });
    }, 2000);
  };

    return (
      <div className="signin-page">
       < Box sx={{ mb:1 }} >
          <Link 
            to="/sign-in"
            className="d-flex"
            color="text.black"
            sx={{ alignItems: 'center', }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon   color='black'/>
            </SvgIcon>
            <Typography color='black' className="mb-5"  variant="h6" >
              Dashboard
            </Typography>
          </Link>
        </Box>


        <Card elevation={2} sx={{p:3, pb:0,borderRadius: 6 }}>
          <CardHeader
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
            sx={{ pb:2 ,fontsize:20,  fontWeight:'bold'}}
            title="Log In"
          />
          <CardContent >
            <Form  onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={1} sx={{pb:2}}>
            
              <TextField
                size = "small"
                name="password"
                variant="outlined"
                 label="Password"
                 sx={{
                  '& .MuiFormLabel-root': {
                    fontSize: '0.8rem',
                    mt:'0.1rem',
                  },
                }}
                 {...register("password",{ required: true,  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                 onChange={onHandleChange}
                />
                  <Box>
                    {errors.confirm && errors.confirm.type === "required" && (
                      <span className="error-message">This is required field</span> 
                    )}
                    {errors.confirm && errors.confirm.type === "minLength" && (
                      <span className="error-message">
                        Password is not good.Please type more than 6 letters
                      </span>
                    )}
                  </Box>                                 
                <TextField
                   size = "confirm"
                  // label="Password"
                  name="confirm"
                  type="confirm"
                  variant="outlined"
                  label="Confirm password"
                  sx={{
                    '& .MuiFormLabel-root': {
                      fontSize: '0.8rem',
                      mt:'0.1rem',
                    },
                  }}
                 
                 {...register("confirm", {
                            required: true,
                           minLength:6
                        })}
                  onChange={onHandleChange} 
                   value={signInData.password}
                />
                 <Box>
                    {errors.confirm && errors.confirm.type === "required" && (
                      <span className="error-message">This is required field</span> 
                    )}
                    {errors.confirm && errors.confirm.type === "minLength" && (
                      <span className="error-message">
                        Password is not good.Please type more than 6 letters
                      </span>
                    )}
                  </Box>        
                
                 
              </Stack>
           
          <Typography color="red" className="d-flex justify-content-center mb-3">{msg}</Typography>
          <Box>
              {/* <p className="text-blue">{msg}</p> */}
              </Box>
              <Button
                className="text-center mb-3 w-100 hover-shadow d-flex align-items-center justify-content-center "
                color="primary"
                // onClick={onSubmitHandler}
              >
               <span className="ml-2"> {Register } </span>
                {isLoading ? (
                 
                 <CircularProgress color="inherit" size="1.4rem" />
                ) : (
                  <span></span>
                )}
              </Button>

              <Link 
            to="/sign-in"
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