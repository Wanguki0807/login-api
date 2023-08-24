import * as Yup from 'yup';
import { useRef, useState } from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import  RedditTextfield from '../../components/frontpage/TextfieldStyle';
import "../Form.css";

import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Link,
  Stack,
  SvgIcon,
  Typography,
  CircularProgress
} from '@mui/material';
import { RouterLink } from '../../components/frontpage/router-link';
import { Seo } from '../../components/frontpage/seo';
// import { paths } from 'src/paths';

const validationSchema = Yup.object({
  email: Yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: Yup
    .string()
    .max(255)
    .required('Password is required')
});

const Page = () => {

  

const navigate = useNavigate();
const [isLoading, setIsLoading] = useState(false);
const [letter, setLetter] = useState("Log In");

const [initialValues, setInitialValues] = useState({
  email: '',
  password: '',
  submit: null,
});
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values=> {
      setIsLoading(true);
      setLetter("");
      setTimeout(() => {
      axios
        .post("/api/user-signin", values)
         .then((response) => {
           
          
          if (response.data.status === 200) {
            setInitialValues({
              email: "",
              password: "",
              submit:null,
            });
            setLetter("Log In")
            setIsLoading(false)
            navigate('/home')
            setLetter("Log in")
            setIsLoading(false)
           
          }
  
          if (response.data.status === "failed") {
          setLetter("Log In")
          setIsLoading(false)
          alert(response.data.message);

          }
        });
      }, 2000);
     }
  });

  return (
    <>
      <Seo title="Login" />
      <div className="signin-page">
        <Box sx={{ mb: 2 }}>
          <Link
            color="text.primary"
            component={RouterLink}
            href="/Dashboard"
            sx={{
              alignItems: 'center',
              display: 'inline-flex'
            }}
            underline="hover"
          >
            <SvgIcon sx={{ mr: 1 }}>
              <ArrowLeftIcon />
            </SvgIcon>
            <Typography variant="body1">
              Dashboard
            </Typography>
          </Link>
        </Box>
        <Card  sx={{borderRadius: 5 }}className="mainCard card  px-4 pt-4 pb-3" >
       
          <CardHeader 
            subheader={(
              <Typography
              className="title-inter smallsize"
                color="text.secondary"
                // variant="body1"
               
              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  href="/"
                  underline="hover"
                  // variant="subtitle2"
                  className="title-inter smallsize"
                >
                  Register
                </Link>
              </Typography>
            )}
            sx={{ pb: 0 }}
            className="title  smalltitle"
            title="Log in"
          />
          <CardContent>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              

              <Stack spacing={3}>
                <RedditTextfield
                 className="title-inter mt-4"
                  variant="filled"
                  style={{ marginTop: 11 }}
                  autoFocus
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
                  className="title-inter mt-4"      
                  variant="filled"
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
              </Stack>
              <Button
                fullWidth
                size="large"
                sx={{ mt: 5 }}
                type="submit"
                color="primary"
                variant="contained"
                className="title-inter smallsize mainButton background-blue"
                
              >
                  <span className="ml-2"> { letter } </span>
                {isLoading ? (
                 <CircularProgress color="inherit" size="2rem" />
                ) : (
                  <span></span>
                )}
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 3
                }}
              >
                <Link
                  href="/ForgotPassword"
                  underline="hover"
                  variant="subtitle2"
                >
                  Forgot password?
                </Link>
              </Box>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Page;
