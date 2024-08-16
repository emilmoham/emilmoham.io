import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Container, CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emil Mohammed",
  description: "My personal website",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let nav = <Navigation />

  return (
    <html>      
      <body className={inter.className} style={{"margin": 0}}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {nav}
          <Container maxWidth="xl" sx={{mt: 1}}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
