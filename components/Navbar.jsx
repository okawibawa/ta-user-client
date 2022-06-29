import React from 'react';

// chakra
import { Container, Box, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Container maxW="container.lg">
      <nav>
        <Box display="flex" alignItems="center" justifyContent="space-between" py="4">
          <Heading as="h1" fontSize="1.25rem" fontWeight="bold">
            Sanatras
          </Heading>

          <Box>
            <UnorderedList display="flex">
              <ListItem listStyleType="none">
                <a href="#">Panca Yadnya</a>
              </ListItem>
              <ListItem listStyleType="none" mx="8">
                <a href="#">Properti</a>
              </ListItem>
              <ListItem listStyleType="none">
                <a href="#">Tentang Kami</a>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </nav>
    </Container>
  );
};

export default Navbar;
