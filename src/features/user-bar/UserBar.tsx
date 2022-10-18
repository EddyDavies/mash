import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export function UserBar() {
  return (
      <Box sx={{ width: '100%', maxWidth: 300, padding: '0 40px' }}>
        <Typography variant="h1" gutterBottom>
          Users
        </Typography>
        <Stack spacing={2} direction="column">
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
      </Box>
  );
}
