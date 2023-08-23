import { useRef, useState } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import  RedditTextfield from '../../components/frontpage/TextfieldStyle';
import ReCAPTCHA from 'react-google-recaptcha';

import "../Form.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormHelperText,
  Link,
  Stack,
  SvgIcon,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';
import { RouterLink } from '../../components/frontpage/router-link';
import { Seo } from '../../components/frontpage/seo';
// import { paths } from 'src/paths';





const Page = () => {

  
const validationSchema = Yup.object({
  email: Yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  name: Yup
    .string()
    .max(255)
    .required('Name is required'),
  password: Yup
    .string()
    .min(7)
    .max(255)
    .required('Password is required'),
  confirmpassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  policy: Yup
    .boolean()
    .oneOf([true], 'This field must be checked')
});

const handleRecaptchaChanged = (value) =>{
  setRecaptchaValue(value);
}

const sendEmailVerification = async () => {
  try {
    await axios.post('api/verify-email');
    console.log('Verification email sent');
  } catch (error) {
    console.error('Error sending verification email', error);
  }
};

const verifyRecaptcha = () => {
   
  if (recaptchaValue){
    axios.post('/api/verify-recaptcha',{recaptcha:recaptchaValue})
    .then(response =>{
      return  true;
      // console.log(response.data.message)
    })
    .catch(error =>{
      console.error('Error verifying reCAPTCHA',error);
      return false;
    })
  }
  else{
    // alert("Please complete the reCAPTCHA");
    return false;
  }
}

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [Register, setRegister] = useState("Register");
  const [recaptchaValue, setRecaptchaValue]= useState('');
  const captchaRef = useRef(null);
  const [initialValues, setInitialValues] = useState({
    email: 'DanDoe @ gmail.com',
    name: '',
    password: '111111',
    confirmpassword:'',
    policy: false,
  });
  const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit: values => { 

      localStorage.setItem("Email",JSON.stringify(values.email));
      if( verifyRecaptcha() == false) {
        alert("Please complete the reCAPTCHA");
        captchaRef.current.reset();
        return;
      }
        setIsLoading(true);
        setRegister("");
        // console.log(values)
        
        setTimeout(() => {
        axios
          .post("/api/user-signup", values)
           .then((response) => {
             if (response.data.status === 200) {
                captchaRef.current.reset();
               sendEmailVerification()
              setInitialValues({
                email: '',
                name: '',
                password: '',
                confirmpassword:'',
                policy: false,
              })
              navigate('/SendEmail')
              setRegister("Register")
              setIsLoading(false)
            }
    
            if (response.data.status === "failed") {
            setRegister("Register")
            setIsLoading(false)
            console.log(false)

            }
          });
        }, 500);
    }
  });

  return (
    <>
      <Seo title="Register" />
      <div className="signup-page">
        <Box sx={{ mb: 2 }}>
          <Link
            color="text.primary"
            component={RouterLink}
            to ="/Dashboard"
            sx={{
              alignItems: 'center',
              display: 'inline-flex'
            }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon />
            </SvgIcon>
            <Typography variant="subtitle2">
              Back
            </Typography>
          </Link>
        </Box>
        <Typography color='black' 
           className="title largesize my-4"
            variant="h4" >
             Brand Account Creation
          </Typography>
        <Card elevation={16} sx={{borderRadius: 5 }}className="card  px-4 pt-4 pb-3" >
          <CardHeader
            subheader={(
              <Typography
                color="text.secondary"
                variant="body2"
                className="title-inter"
              >
                Already have an account?
                &nbsp;
                <Link
                  href ="/Sign-in"
                  underline="hover"
                  variant="subtitle2"
                  className="title-inter"
                >
                  Log in
                </Link>
              </Typography>
            )}
            sx={{ pb: 0 }}
            className=" smalltitle mt-2"
            title="Register"
          />
          <CardContent>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
              <RedditTextfield
                  label="Name"
                  className="title-inter mt-3"
                  name="name"
                  variant="filled"
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <RedditTextfield
                  variant="filled"
                  className="title-inter mt-3"
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <RedditTextfield
                  variant="filled"
                  className="title-inter mt-3"
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
                <RedditTextfield
                  variant="filled"  
                  className="title-inter mt-3"
                  style={{ marginTop: 11 }}
                  error={!!(formik.touched.confirmpassword && formik.errors.confirmpassword)}
                  fullWidth
                  helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
                  label="confirmPassword"
                  name="confirmpassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.confirmpassword}
                />

              </Stack>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: 1,
                  mt: 1
                }}
              >
                <Checkbox
                  checked={formik.values.policy}
                  name="policy"
                  onChange={formik.handleChange}
                />
                <Typography
                  color="text.secondary"
                  variant="body2"
                  className="title-inter"
                >
                  I have read the
                  {' '}
                  <Link
                    component="a"
                    href="#"
                    className="title-inter"
                  >
                    Terms and Conditions
                  </Link>
                </Typography>
              </Box>
              {!!(formik.touched.policy && formik.errors.policy) && (
                <FormHelperText error>
                  {formik.errors.policy}
                </FormHelperText>
              )}
               <div className='formGroup  px-2 '>
               <ReCAPTCHA sitekey={"6Le9z7knAAAAANZgZ6Z1uahHF22pBxmtVVZlFdEx"}   ref={captchaRef} onChange={handleRecaptchaChanged}/>
                </div>

              <Button
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                type="submit"
                variant="contained"
                className="title-inter"
              >
                 <span className="ml-2"> { Register } </span>
                {isLoading ? (
                 <CircularProgress color="inherit" size="2rem" />
                ) : (
                  <span></span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Page;
