"use client";
import { EmotionCache } from '@emotion/react';
import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import * as React from 'react';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';
import ButtonAppBar from './navigation';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ButtonAppBar />
        <Container maxWidth="xl">
          <Box mt={4}>
          {children}
          </Box>
        </Container>
      </ThemeProvider>
      </body>
    </html>
    
  );
}
