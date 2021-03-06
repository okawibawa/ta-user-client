import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter';
import theme from '../styles/theme';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress height={4} color="red" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
