import { useRef, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "../Form.css";
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';

export default function Signup (props) {

const captchaRef = useRef(null);
const navigate = useNavigate();
const { register, handleSubmit, formState: { errors } } = useForm();
const [signupData, setSignupData] = useState({
      name: "",
      email: "",
      confirmpassword: "",
      password: "",
      isLoading: "",
      condition: false,
      isRobot : false,
})
 const [msg, setMsg] = useState('');
 const [confirmMsg, setConfirmMsg] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const [Register, setRegister] = useState("Register");
 const [message, setMessage] = useState("");
const [error,setError] = useState("");

const onHandleChange = (e) => 
  {
      setSignupData({...signupData, [e.target.name]: e.target.value})
   }



const verifyRecaptcha = async ( token ) => {
    try{
      console.log(token);

    let response = await axios.post(`/api/verify-token`,{
        secret:process.env.REACT_APP_SECRET_KEY,
        token:token
    });
    return true;
    }catch(error){
    console.log("error ",error);
    return false;
    }
}
const sendEmailVerification = async () => {
  try {
    await axios.post('/api/verify-email');
    console.log('Verification email sent');
  } catch (error) {
    console.error('Error sending verification email', error);
  }
};

const onSubmit = (data) => {

  localStorage.setItem("Email",JSON.stringify(signupData.email));
  
  if(data.password != data.confirmpassword )
    {
        setConfirmMsg("Confirm Password Error");
        return;
    }
    setConfirmMsg("");
    setIsLoading(true);
    setRegister("");
    const token = captchaRef.current.getValue();
    
    const notRobot = verifyRecaptcha(token); 
    setTimeout(() => {
    axios
      .post("/api/user-signup", signupData)
       .then((response) => {
         if (response.data.status === 200) {
          captchaRef.current.reset();
          sendEmailVerification()
          setMsg(response.data.message)
          setSignupData({
            name: "",
            email: "",
            password: "",
            confirmpassword:"",
            condition: false,
            isRobot : false,
          })
          setTimeout(() => {
            setMsg("")
          }, 1000);
          navigate('/SendEmail')
          setRegister("Register")
          setIsLoading(false)
         
        }

        if (response.data.status === "failed") {
          setMsg(response.data.message)
          setTimeout(() => {
            setMsg("")
          }, 1000);
        setRegister("Register")
        setIsLoading(false)
        }
      });
    }, 500);
  };

    return (
      <div className="signup-page align-items-center">
       < Box sx={{ mb:1 }} >
          <Link 
            to="/sign-in"
            className="d-flex"
            color="inherit"
          >
            <SvgIcon sx={{ height:20}}>
              <ArrowLeftIcon   color='black'variant="small"/>
            </SvgIcon>
            <Typography  color='black' className="linkback"  variant="small"> 
              Back
            </Typography>
          </Link>
        </Box>

       <Typography color='black' 
           className="title largesize my-4"
            variant="h4" >
             Brand Account Creation
          </Typography>
        <Card elevation={16} sx={{borderRadius: 5 }} className="card  px-4 pt-4 pb-3">
          <CardHeader    className=" smalltitle mt-2" varient="h6"  title="Register"
            subheader={(
              <Typography
                color="text.secondary"
                sx={{mt:0}}
                varient="body2"
              >
                Already have an account?
                &nbsp;
                <Link
                  
                  to="/sign-in"
                  variant="body2"
                >
                  Log in
                </Link>
              </Typography>
            )}
        
           
          />
          <CardContent >
            <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={0} sx={{pb:0}}>
            
                <TextField
                     size="Medium*"
                     name="name"
                     variant="outlined"
                     label="Enter User Name"
                     inputProps={{
                      autoComplete: "off",
                    }}
                     sx={{
                      '& .MuiFormLabel-root': {
                        fontSize: '0.8rem',
                        mt:'0.1rem',
                      },
                    }}
                     {...register("name",{required: true})}
                     onChange={onHandleChange} 
                />
            <Box sx={{mb:2,fontsize:5}}>
                {errors.name && <span className="error-message">Please check the User Name</span>}
                </Box>
              <TextField className="txtfield"
                size = "medium"
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
                 <Box sx={{mb:2}}>
                  {errors.email && errors.email.type === "required" && (
                    <span className="error-message">This is required field</span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="error-message">Enter a valid email</span>
                  )}
                </Box>                                
                <TextField
                   size = "medium"
                  // label="Password"
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
                   value={signupData.password}
                />
                 <Box sx={{mb:2}}>
                    {errors.password && errors.password.type === "required" && (
                      <span className="error-message">This is required field</span> 
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                      <span className="error-message">
                        Password is not good.Please type more than 6 letters
                      </span>
                    )}
                  </Box>        
                
                 <TextField
                  size = "medium"
                   type="password"
                  label="Confirm Password"
                  name="confirmpassword"
                  variant="outlined"
                  // placeholder="Confirm password"
                  sx={{
                    '& .MuiFormLabel-root': {
                      fontSize: '0.8rem',
                      mt:'0.1rem',
                    },
                  }}
                {...register("confirmpassword", {
                    required: true,
                    minLength : 6
                })}
                onChange={onHandleChange}  
                value={signupData.confirmpassword}
                />
                <Box sx={{mb:2}}>
                    {errors.confirmpassword && errors.confirmpassword.type === "required" && (
                      <span className="error-message">This is required field</span>
                    )}
                    

                      <span className="error-message">
                            {confirmMsg}
                      </span>
                 
                     {errors.confirmpassword && errors.confirmpassword.type === "minLength" && (
                      <span className="error-message">
                        Password is not good.Please type more than 6 letters
                      </span>
                    )}
                  </Box>   
              </Stack>
              <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              pl: 1.5,
              py: 1,
            }}
          >
            <Checkbox
             onChange={(onHandleChange)}
              name="condition"
            />
            <Typography
              color="text.secondary"
              variant="body2"
            >
              I have read the
              {' '}
              <Link
                component="a"
                href="#"
              >
                Terms and Conditions
              </Link>
            </Typography>
          </Box>
          <div className='formGroup  px-2 '>
               <ReCAPTCHA sitekey={"6Le9z7knAAAAANZgZ6Z1uahHF22pBxmtVVZlFdEx"} ref={captchaRef} />{message}
          </div>


          <Typography color="red" className="d-flex justify-content-center my-2">{msg}</Typography>
          <Box>
              {/* <p className="text-blue">{msg}</p> */}
              </Box>
              <Button
                className="text-center my-1 w-100 hover-shadow d-flex align-items-center justify-content-center  rounded-6"
                color="primary"
                    style={{ maxHeight: '48px', minWidth: '100px', minHeight: '48px'}}
                    // onClick={onSubmitHandler}
                
              >
               <span className="ml-2"> {Register } </span>
                {isLoading ? (
                 
                 
                 <CircularProgress color="inherit" size="2rem" />
                ) : (
                  <span></span>
                )}
              </Button>
            </Form>
        </CardContent>
        </Card>
      </div>
    );
  }