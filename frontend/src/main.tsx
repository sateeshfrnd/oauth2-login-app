import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { AuthProvider } from './auth/AuthContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
       <AuthProvider>
         <App />
       </AuthProvider>
     </ThemeProvider>
  </StrictMode>,
)
