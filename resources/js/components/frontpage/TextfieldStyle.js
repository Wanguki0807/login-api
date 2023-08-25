import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      fontWeight: 'regular',
      color:'black',
      overflow: 'hidden',
      borderRadius: 10,
      backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#1A2027',
      border: '3px solid',
      borderColor: theme.palette.mode === 'light' ? '#FaFaFa' : '#2D3843',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        // boxShadow: `${alpha(theme.palette.primary.main, 0.5)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
      // '&.Mui-focused': {
      //   borderColor: theme.palette.error.main,
      // },

      "&.Mui-error":{
        border: "3px solid",
        borderRadius: 7,
        borderColor: theme.palette.error.main
        }
    },
  }));

  export default RedditTextField;