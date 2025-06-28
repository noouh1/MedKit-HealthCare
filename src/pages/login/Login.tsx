import { Box } from "@mui/material";
import { useState } from "react";
import Banner from "../../components/login/Banner";
import LoginSection from "../../components/login/LoginSection";
import SignUpSection from "../../components/login/SignUpSection";

function Login() {
  const [activeForm, setActiveForm] = useState("login"); 

  return (
    <Box sx={{ display: {md:'flex'}, minHeight: '94vh', overflow: 'hidden', position: 'relative' ,backgroundColor: '#f4f8fb'}}>
      <Banner />

      {/*container */}
      <Box
        sx={{
          width: { xs: '100%', md: '60%' },
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '200%',
            display: 'flex',
            transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
            transform: activeForm === 'login' ? 'translateX(0%)' : 'translateX(-50%)',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Login Section */}
          <Box
            sx={{
              width: '50%',
              minWidth: 0,
              transition: 'opacity 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <LoginSection onSwitch={() => setActiveForm("signup")} />
          </Box>
          {/* Sign Up Section */}
          <Box
            sx={{
              width: '50%',
              minWidth: 0,
              transition: 'opacity 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <SignUpSection onSwitch={() => setActiveForm("login")} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
