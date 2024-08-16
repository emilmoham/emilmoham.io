import { Box, Container, Paper, Typography } from "@mui/material";

import Image from 'next/image';

export default function Home() {
  return (
    <Container>
      <Paper
          component="img"
          src='/images/skyline.jpg'
          sx={{
            width: '100%',
            backgroundColor: 'white'
          }}
      />
    </Container>
  );
}
