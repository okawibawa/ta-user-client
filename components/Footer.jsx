import React from 'react';

// chakra
import { Box, Container, Text, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box backgroundColor="#eee" w="100%" py="8">
      <Container maxW="container.lg">
        <Box display="flex" alignItems="flex-start" justifyContent="space-between" mb="4">
          <Heading as="h4">Sanatras</Heading>

          <UnorderedList display="flex" alignItems="center">
            <ListItem listStyleType="none">
              <a href="#">Syarat & Ketentuan</a>
            </ListItem>
            <ListItem listStyleType="none" ml="4">
              <a href="#">Kebijakan</a>
            </ListItem>
          </UnorderedList>
        </Box>

        <Text as="p">©{new Date().getFullYear()} Hak Cipta Sanatras</Text>
      </Container>
    </Box>
  );
};

export default Footer;
