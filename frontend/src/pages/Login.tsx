import { Container, Paper, Typography, Box } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = async (credentialResponse: any) => {
    try {
      const res = await axios.post('http://localhost:8000/auth/google', {
        token: credentialResponse.credential,
      });

      login(res.data.access_token, res.data.user);

    //   window.location.href = '/dashboard';
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 30 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Paper elevation={4} sx={{ padding: 5, textAlign: 'center', borderRadius: 3 }}>
          <Typography variant="h6" gutterBottom>
            Sign up or Login with
          </Typography>

          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log('Login Failed')}
          />
        </Paper>
      </Box>
    </Container>
  );
}