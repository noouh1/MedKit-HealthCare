import { Box, TextField, Typography, IconButton, Button, Divider  } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type { LoginSectionProps } from '../../types/Login.tsx';
import { GoogleIcon } from '../../types/Login.tsx';
import { FacebookIcon } from '../../types/Login.tsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function SignUpSection({ onSwitch }: LoginSectionProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirm = () => setShowConfirm((show) => !show);


  return (
      <Box>
        <Box>
          {/* text */}
          <Box>
            <Typography variant='h3' sx={{ my: 2,display:'flex',justifyContent:{xs:'center'},color:'#1e6c72',fontWeight:'bold' }}>Create Account</Typography>
            <Typography variant='body1' sx={{ my:{xs:3,md:2} ,display:'flex',justifyContent:{xs:'center'},color:'#1e6c72',fontWeight:'bold'  }}>Sign up to get started</Typography>
          </Box>
          {/* form */}
          <Box component="form" autoComplete="off">
            <Box >
              {/* First and Last Name */}
                <Box sx={{ display: 'flex', gap: 2,my: 2 }}>
                <Box >
                <TextField
                  required
                  label="First Name"
                  placeholder="Enter your first name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused svg': { color: '#1e6c72' },
                      '& svg': { color: '#757575' },
                      '&.Mui-focused fieldset': { borderColor: '#1e6c72' },
                    },
                    '& label.Mui-focused': { color: '#1e6c72' },
                  }}
                />
              </Box>
              <Box >
                <TextField
                  required
                  label="Last Name"
                  placeholder="Enter your last name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused svg': { color: '#1e6c72' },
                      '& svg': { color: '#757575' },
                      '&.Mui-focused fieldset': { borderColor: '#1e6c72' },
                    },
                    '& label.Mui-focused': { color: '#1e6c72' },
                  }}
                />
              </Box>
                </Box>
              {/* Email and Phone */}
              <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
                <Box >
                <TextField
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused svg': { color: '#1e6c72' },
                      '& svg': { color: '#757575' },
                      '&.Mui-focused fieldset': { borderColor: '#1e6c72' },
                    },
                    '& label.Mui-focused': { color: '#1e6c72' },
                  }}
                />
              </Box>
              <Box >
                <TextField
                  fullWidth
                  required
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneAndroidIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused svg': { color: '#1e6c72' },
                      '& svg': { color: '#757575' },
                      '&.Mui-focused fieldset': { borderColor: '#1e6c72' },
                    },
                    '& label.Mui-focused': { color: '#1e6c72' },
                  }}
                />
              </Box>
              </Box>
              {/* Age and City */}
              <Box sx={{ display:'flex', gap: 2, my: 2 }}>
                <Box >
                <TextField
                  required
                  label="Age"
                  type="number"
                  placeholder="Enter your age"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarTodayIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused svg': { color: '#1e6c72' },
                      '& svg': { color: '#757575' },
                      '&.Mui-focused fieldset': { borderColor: '#1e6c72' },
                    },
                    '& label.Mui-focused': { color: '#1e6c72' },
                  }}
                />
              </Box>
              <Box >
                <TextField
                  required
                  label="City"
                  placeholder="Enter your city"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused svg': { color: '#1e6c72' },
                      '& svg': { color: '#757575' },
                      '&.Mui-focused fieldset': { borderColor: '#1e6c72' },
                    },
                    '& label.Mui-focused': { color: '#1e6c72' },
                  }}
                />
              </Box>
              </Box>
              {/* Password */}
              <Box sx={{ my: 2 }}>
                <TextField
                  fullWidth
                  required
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlineIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused svg': { color: '#1e6c72' },
                      '& svg': { color: '#757575' },
                      '&.Mui-focused fieldset': { borderColor: '#1e6c72' },
                    },
                    '& label.Mui-focused': { color: '#1e6c72' },
                  }}
                />
              </Box>
              {/* Confirm Password */}
              <Box sx={{ my: 2 }}>
                <TextField
                  fullWidth
                  required
                  label="Confirm Password"
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlineIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={handleClickShowConfirm}
                          edge="end"
                        >
                          {showConfirm ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused svg': { color: '#1e6c72' },
                      '& svg': { color: '#757575' },
                      '&.Mui-focused fieldset': { borderColor: '#1e6c72' },
                    },
                    '& label.Mui-focused': { color: '#1e6c72' },
                  }}
                />
              </Box>
            </Box>
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
              Sign Up
            </Button>
            <Divider sx={{ width: '80%', mx: 'auto', fontWeight: 'bold', fontSize: 14, color: '#1e6c72' }}>OR</Divider>
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
            <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              Already have an account?
              <Box
                component="span"
                onClick={onSwitch}
                sx={{
                  fontWeight: 'bold',
                  color: '#1e6c72',
                  fontSize: 14,
                  cursor: 'pointer',
                }}
              >
                Sign In
              </Box>
            </Typography>
          </Box>
          {/* end form */}
          <Box sx={{ textAlign: 'center', my: 3 }}>
          <Typography variant='body2' color='textSecondary'>
            By signing in, you agree to our <Link to="/terms" style={{color:'#1e6c72'}}>Terms of Service</Link> and <Link to="/privacy" style={{color:'#1e6c72'}}>Privacy Policy</Link>.
        </Typography>
          </Box>
        </Box>
      </Box>
  );
}

export default SignUpSection;
