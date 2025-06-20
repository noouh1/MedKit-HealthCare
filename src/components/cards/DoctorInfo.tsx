import { Avatar, Typography, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import type { CardData } from '../../types/FindDoctor';
function DoctorInfo({ image,name,specialty }: CardData) {
  return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            p: { xs: 2, md: 3 },
            width: '100%',
            mb: { xs: 2, md: 4 },
            background: { xs: '#fff', sm: 'transparent' },
            borderRadius: { xs: 3, sm: 0 },
            boxShadow: { xs: '0 2px 16px rgba(30,108,114,0.06)', sm: 'none' },
          }}
        >
          <Avatar
            src={image}
            alt="Mary Weather, MD"
            sx={{ width: 100, height: 100, mr: { sm: 3, xs: 0 }, mb: { xs: 2, sm: 0 } }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e6c72' }}>
              {name}
            </Typography>
            <Typography sx={{ color: '#5a7d7d' }}>{specialty}</Typography>
            <Typography sx={{ color: '#222', mt: 2, fontSize: 15 }}>
              Mon–Fri, 8:00 – 5:00PM
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: { xs: 2, sm: 0 } }}>
                <Box className="icons" sx={{ display: 'flex', gap: 1, mt: 2 }}>
                        {[LocalPhoneOutlinedIcon, EmailOutlinedIcon, LocationOnOutlinedIcon].map((Icon, i) => (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  borderRadius: '50%', width: 40, height: 40,background: 'white',boxShadow: '0 4px 16px rgba(30, 108, 114, 0.10)' }}>
                            <Icon sx={{ color: '#1e6c72', fontSize: 17 }} />
                          </Box>
                      ))}
              </Box>
          </Stack>
        </Box>
  )
}

export default DoctorInfo
