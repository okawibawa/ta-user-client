import { Container } from '@chakra-ui/react';

// comps
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg" minH="100vh">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
