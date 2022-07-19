import React from 'react';

// chakra
import { Box, Container, Text, Heading, UnorderedList, ListItem } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box backgroundColor="#eee" w="100%" py="8">
      <Container maxW="container.lg">
        <Box
          display="flex"
          flexDirection={['column', 'row']}
          alignItems="flex-start"
          justifyContent="space-between"
          mb="4"
        >
          <Heading as="h4">Sanatras</Heading>

          <UnorderedList
            display="flex"
            flexDirection={['column', 'row']}
            alignItems={['flex-start', 'center']}
            my={[6, 0]}
            ml={[0]}
          >
            <ListItem listStyleType="none" mb={[4, 0]}>
              <a href="#">Syarat & Ketentuan</a>
            </ListItem>
            <ListItem listStyleType="none" ml={[0, 4]}>
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
