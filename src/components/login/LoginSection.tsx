import { Box, TextField, Typography, IconButton, Button, Divider } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type { LoginSectionProps } from '../../types/Login.tsx';
import {GoogleIcon} from '../../types/Login.tsx';
import { FacebookIcon } from '../../types/Login.tsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function LoginSection({ onSwitch }: LoginSectionProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  return (
    <Box>
      <Box>
        {/* text */}
        <Box>
          <Typography variant='h3' sx={{my:2,color:'#1e6c72',fontWeight:'bold',display:'flex',justifyContent:{xs:'center',md:'flex-start'}}}>Welcome Back!</Typography>
          <Typography variant='body1' sx={{my:2,color:'#1e6c72',fontWeight:'bold',display:'flex',justifyContent:{xs:'center',md:'flex-start'}}}>Login to access your dashboard</Typography>
        </Box>
        {/* form */}
        <Box>
          <TextField
          fullWidth
          required
          label="Email"
          type="email"
          placeholder='Enter your email'
          sx={{
            mt: 4,
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused svg': {
                color: '#1e6c72', 
              },
              '& svg': {
                color: '#757575', 
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1e6c72',
              },
            },
            '& label.Mui-focused': {
              color: '#1e6c72',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
        />
          <TextField
          fullWidth
          required
          id="Name"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder='Enter your password'
          sx={{mt:4,
                        '& .MuiOutlinedInput-root': {
              '&.Mui-focused svg': {
                color: '#1e6c72', 
              },
              '& svg': {
                color: '#757575', 
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1e6c72',
              },
            },
            '& label.Mui-focused': {
              color: '#1e6c72',
            },
          }}
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlineIcon color="action" />
                
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography sx={{display: 'flex', justifyContent: 'flex-end', mt: 2}}>
          <Link to="/forgot-password" style={{ textDecoration: 'none', color: '#1e6c72', fontWeight: 'bold', fontSize: 14 }}>
            Forgot Password?
          </Link>
        </Typography>
        <Button
        variant="contained"
        fullWidth
        sx={{
          background: '#1e6c72',
          color: '#fff',
          fontWeight: 600,
          fontSize: 14,
          borderRadius: 1,
          py: 1.5,
          my: 2,
          boxShadow: 'none',
          transition: 'background 0.3s, transform 0.3s',
          '&:hover': {
            background: '#155055',
            transform: 'scale(1.03)',
          },
        }}
      >
        Sign In
      </Button>
      <Divider sx={{width:'80%',mx:'auto',fontWeight:'bold',fontSize:14,color:'#1e6c72'}}>OR</Divider>
        <Button
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{
          background: 'white',
          color: 'black',
          fontWeight: 600,
          fontSize: 14,
          borderRadius: 1,
          border: '1px solid #1e6c72',
          py: 1.5,
          my: 2,
          boxShadow: 'none',
          transition: 'background 0.3s, transform 0.3s',
            '&:hover': {
            transform: 'scale(1.03)',
          },
        }}
      >
        Continue with Google
      </Button>
        <Button
        fullWidth
        startIcon={<FacebookIcon />}
        sx={{
          background: 'white',
          color: 'black',
          fontWeight: 600,
          fontSize: 14,
          borderRadius: 1,
          border: '1px solid #1e6c72',
          py: 1.5,
          my: 2,
          boxShadow: 'none',
          transition: 'background 0.3s, transform 0.3s',
            '&:hover': {
            transform: 'scale(1.03)',
          },
        }}
      >
        Continue with Facebook
      </Button>
        <Box textAlign="center" mt={2}>
        Don’t have an account?
        <Box
          component="span"
          onClick={onSwitch}
          sx={{ ml: 1, cursor: 'pointer', color: '#1e6c72', fontWeight: 'bold' }}
        >
          Sign Up
        </Box>
        </Box>
        {/* end form */}
        <Box sx={{textAlign:'center',mt:4}}>
          <Typography variant='body2' color='textSecondary'>
            By signing in, you agree to our <Link to="/terms" style={{color:'#1e6c72'}}>Terms of Service</Link> and <Link to="/privacy" style={{color:'#1e6c72'}}>Privacy Policy</Link>.
        </Typography>
        </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default LoginSection


