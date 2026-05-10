import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Box,
  Container
} from '@mui/material';

import { useAuth } from '../auth/AuthContext';

export default function Dashboard() {
  const { logout, user } = useAuth();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          <Box display="flex" alignItems="center" gap={2}>
            {/* <Typography>{user?.name}</Typography> */}

            {/* <Avatar src={user?.picture} alt={user?.name} /> */}
            <Avatar src={user?.picture} sx={{ width: 32, height: 32 }} />
            <Typography variant="body2">{user?.name}</Typography>

            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Box>

          {/* <Button color="inherit" onClick={logout}>
            Logout
          </Button> */}
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h5">
          Welcome {user?.name} 👋
        </Typography>
      </Container>
    </>
  );
}