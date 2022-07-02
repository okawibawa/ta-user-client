import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// chakra
import { Box, Heading, Text } from '@chakra-ui/react';

// comps
import Layout from '../../components/Layout';
import HeadSeo from '../../components/Head';

// apis
import { getCeremonies } from '../../apis/apis';

// constants
import { ceremonies } from '../../constants/ceremonies';

const Yadnya = ({ index, response }) => {
  console.log(response);

  return (
    <Layout>
      <HeadSeo />

      {ceremonies
        .filter((ceremony) => ceremony.id == index)
        .map((ceremony) => (
          <Box key={ceremony.id} my="8">
            <Heading as="h2" mb="4">
              {ceremony.name}
            </Heading>
            <Text as="p">{ceremony.description}</Text>
          </Box>
        ))}

      <Box>
        <Heading as="h2" mb="4">
          Upacara-upacara
        </Heading>
        {response.data.length > 0 ? (
          <Box display="grid" gridTemplateColumns={['1fr', 'repeat(3, 1fr)', 'repeat(5, 1fr)']}>
            {response.data.map((ceremony) => (
              <Link key={ceremony.id} href={`/detail-yadnya/${ceremony.id}`}>
                <a>
                  <Box
                    cursor="pointer"
                    textAlign="center"
                    _hover={{ transform: 'scale(1.015)' }}
                    transition="all .300s ease-in-out"
                    p="4"
                    borderRadius="8"
                    boxShadow="0 12px 24px rgba(0, 0, 0, .1)"
                  >
                    <Image
                      src={
                        ceremony.attributes.pictures.data
                          ? ceremony.attributes.pictures.data[0].attributes.url
                          : '/default.png'
                      }
                      alt="Profile"
                      width={300}
                      height={300}
                    />
                    <Heading as="h3" fontSize="1rem" mt="2" mb="4">
                      {ceremony.attributes.name}
                    </Heading>
                    {/* <Text
                  as="p"
                  fontSize="1rem"
                  dangerouslySetInnerHTML={{ __html: ceremony.attributes.description }}
                ></Text> */}
                  </Box>
                </a>
              </Link>
            ))}
          </Box>
        ) : (
          <Heading as="h3">Data upacara kosong!</Heading>
        )}
      </Box>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const {
    query: { index },
  } = context;

  const response = await getCeremonies(index);

  return {
    props: {
      index,
      response: response.data,
    },
  };
};

export default Yadnya;
