// import { Component, useState } from "react";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import axios from "axios";
// import "../Form.css";
// import { useNavigate } from 'react-router-dom';
// import {ReactComponent as ReactCheck} from "../../Assets/SVG/check-20.svg";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   Avatar,
//   Typography,
 
// } from '@mui/material';
// export default function Trial (props) {
// const [click,setclick] = useState("start trial");
// const [curtrial, setTrial] = useState({
//     trial:"",
//     email:"",
//     });
// const curEmail = JSON.parse(localStorage.getItem('Email')); 
// const navigate = useNavigate();
// const  onFreeClicked =(e) =>{
//     setclick("Start Free Trial");
    
  
//   }
//   const  onStandardClicked =(e) =>{
    
//   }

//     return (
//       <div className="trial-page">
//          <Typography   color="primary" variant="h4" sx={{pb:2,m:1, fontWeight:'bold',textAlign: 'center'}}>
//           LOGO
//              </Typography>
//         <div className="row">
//           <div className="col-md-6 col-12 pr-2">
//             <Card className=" shadow-lg" elevation={2}  sx={{p:2 ,borderRadius: 5}}  >
//             <CardHeader variant="h6"avatar={<Avatar alt="Apple" src="../../Assets/SVG/logo.svg" />}sx={{ pb:0 ,  fontWeight:'bold',textAlign: 'center'}}  className="w-100"
//               >
//             </CardHeader>
            
//             <CardContent className="d-flex">
//                 <div className=" w-100" >
//                 <Typography  variant="h5" sx={{pb:0 ,  fontWeight:'bold',textAlign: 'left'}} >
//                        $0
//                 </Typography>
//                 <Typography  variant="h6" sx={{pb:0, fontWeight:'bold',textAlign: 'left'}}>
//                     Free trial
//                 </Typography>
//                 <Typography  color="text.secondary"  sx={{pb:1 ,   fontWeight:'regular',textAlign: 'left'}}>
//                 To familiarize yourself with our tools
//                 </Typography>
//                 <hr></hr>
//                 <div className="col">  
//                     <div className="d-flex justify-content-start justify-items-center">
//                         <ReactCheck className="me-2"/>
//                         <p className="mb-2 pb-2">Access the Influencer Analyzer(Limited)</p>
//                     </div>

//                     <div className="d-flex justify-content-start  justify-items-center">
//                     <ReactCheck  className="me-2"/>
//                         <p className="mb-2 pb-2">Access the Influencer Finder(Limited)</p>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck  className="me-2"/>
//                         <Typography className="mb-2 pb-2">Messaging System(Limited)</Typography>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck  className="me-2"/>
//                         <Typography className="mb-2 pb-2">Job Board</Typography>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck  className="me-2"/>
//                         <Typography className="mb-2 pb-2">Location</Typography>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck  className="me-2"/>
//                         <Typography className="mb-2 pb-2">Total Reach Count</Typography>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck className="me-2" />
//                         <Typography className="mb-2 pb-2">Engagement Rate</Typography>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck className="me-2"/>
//                         <Typography className="mb-2 pb-2">Compensation Method</Typography>
//                     </div>

                    
//                     <div className= "d-flex justify-content-center mt-3">
//                         <Button
//                             className="text-center m-2 w-100 btn btn-outline-primary"
//                             color="inherit"
//                             sx={{ pb:2,  fontWeight:'bold'}}
//                             onClick = {onFreeClicked}
//                         >Start Free trial
            
                        
//                         </Button>
//                     </div>
//                 </div>
//                 </div>
            
//             </CardContent>
//             </Card>
//             </div>
//             <div className="col-md-6 col-12 pl-2">
//             <Card className=" shadow-lg" elevation={16}  sx={{p:2,borderRadius: 6}}  >
//             <CardHeader variant="h6"avatar={<Avatar alt="Apple" src="../public/logo192.png" />}sx={{ pb:0 ,  fontWeight:'bold',textAlign: 'center'}}  className="w-100"
//               >
//             </CardHeader>
            
//             <CardContent className="d-flex">
//                 <div className=" w-100" >
//                 <Typography  variant="h5" sx={{pb:0 ,  fontWeight:'bold',textAlign: 'left'}} >
//                        $99
//                 </Typography>
//                 <Typography  variant="h6" sx={{pb:0, fontWeight:'bold',textAlign: 'left'}}>
//                     Standard trial
//                 </Typography>
//                 <Typography  color="text.secondary"  sx={{pb:1 ,   fontWeight:'regular',textAlign: 'left'}}>
//                 To familiarize yourself with our tools
//                 </Typography>
//                 <hr></hr>
//                 <div className="col">  
//                 <div className="d-flex justify-content-start justify-items-center">
//                     <ReactCheck className="me-2"/>
//                         <p className="mb-2 pb-2">Access the Influencer Analyzer(Full)</p>
//                     </div>

//                     <div className="d-flex justify-content-start  justify-items-center">
//                     <ReactCheck  className="me-2"/>
//                         <p className="mb-2 pb-2">Access the Influencer Finder(Full)</p>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck  className="me-2"/>
//                         <Typography className="mb-2 pb-2">Messaging System(Full)</Typography>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck  className="me-2"/>
//                         <Typography className="mb-2 pb-2">Job Board</Typography>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck  className="me-2"/>
//                         <Typography className="mb-2 pb-2">Compaign Management</Typography>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck  className="me-2"/>
//                         <Typography className="mb-2 pb-2">Perfermance Tracking</Typography>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck className="me-2" />
//                         <Typography className="mb-2 pb-2">Reporting</Typography>
//                     </div>

//                     <div className="d-flex justify-content-start">
//                     <ReactCheck className="me-2" />
//                         <Typography className="mb-2 pb-2" >Etc...</Typography>
//                     </div>
                    
//                     <div className= "d-flex justify-content-center mt-3">
//                         <Button
//                             className="text-center m-2 w-100 btn btn-outline-primary"
//                             color="inherit"
//                             sx={{ pb:2,  fontWeight:'bold'}}
//                             onClick = {onStandardClicked}
//                         >
//                    Start Standard Trial
                        
//                         </Button>
//                     </div>
//                 </div>
//                 </div>
            
//             </CardContent>
//             </Card>
//             </div>
//         </div>
//       </div>
//     );
//   }