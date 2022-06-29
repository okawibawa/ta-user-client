import React from 'react';

// chakra
import { Box, Heading, Text } from '@chakra-ui/react';

// comps
import Layout from '../components/Layout';

const Properties = () => {
  return (
    <Layout>
      <Box w="100%" h="60vh" mb="8" mt="16">
        <Heading as="h2">Properti Upacara</Heading>
        <Text as="p">
          Properti upacara lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus perferendis error
          natus incidunt dolorum.
        </Text>
      </Box>
    </Layout>
  );
};

export default Properties;
