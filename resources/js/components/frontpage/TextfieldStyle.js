import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      overflow: 'hidden',
      borderRadius: 10,
      backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#1A2027',
      border: '2px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
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
        boxShadow: `${alpha(theme.palette.primary.main, 0.5)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-error .MuiInputBase-input":{
        border: "3px solid",
        borderRadius: 7,
        borderColor: theme.palette.error.main,
        // backgroundColor: theme.palette.error.secondary,
        }
    },
  }));

  export default RedditTextField;