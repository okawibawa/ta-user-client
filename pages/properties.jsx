import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

// chakra
import {
  Divider,
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react';

// comps
import Layout from '../components/Layout';
import HeadSeo from '../components/Head';

// apis
import { getAllTags, getPostByTag } from '../apis/apis';

const Properties = () => {
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPost, setIsLoadingPost] = useState(true);
  const [activeTag, setActiveTag] = useState(1);

  useEffect(() => {
    const getTag = async () => {
      const tag = await getAllTags();

      setTags(tag.data);
      setIsLoading(false);
    };

    getTag();
  }, []);

  useEffect(() => {
    setIsLoadingPost(true);

    const getPost = async () => {
      const post = await getPostByTag(activeTag);

      setPosts(post.data);
      setIsLoadingPost(false);
    };

    getPost();
  }, [activeTag]);

  return (
    <Layout>
      <HeadSeo />

      <Box w="100%" mb="8" mt="16">
        <Heading as="h2">Properti Upacara</Heading>
        <Text as="p">
          Properti merupakan nama lain yang kami berikan untuk sarana-prasana yang menjadi bagian atau menyertai dari
          sebuah Upacara Yadnya.
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection={['column', 'row']}
        alignItems="start"
        justifyContent={['center', 'space-between']}
      >
        <Box width={['100%', '24%']} mb={[4, 0]} border="1px solid lightgrey" borderRadius=".5rem" p={['1.5rem 1rem']}>
          <Heading as="h3" fontSize="1.25rem">
            Properti Upacara
          </Heading>

          <Divider my="4" />

          <Box display="flex" flexDirection="column">
            {isLoading ? (
              <Box>
                <Text as="p">Memuat data..</Text>
              </Box>
            ) : (
              tags.data
                .filter((tag) => tag.id !== 7)
                .map((tag) => (
                  <Box key={tag.id} mb="2">
                    <Text
                      as="p"
                      onClick={() => setActiveTag(tag.id)}
                      cursor="pointer"
                      textDecoration={`${activeTag === tag.id ? 'underline' : 'none'}`}
                    >
                      {tag.attributes.name}
                    </Text>
                  </Box>
                ))
            )}
          </Box>
        </Box>

        <Box width={['100%', '74%']} mb={[8]}>
          {isLoadingPost ? (
            <Box>
              <Text as="p">Memuat data..</Text>
            </Box>
          ) : (
            <Box>
              {!isLoading &&
                tags.data
                  .filter((tag) => tag.id === activeTag)
                  .map((tag) => (
                    <Heading key={tag.id} as="h2">
                      {tag.attributes.name}
                    </Heading>
                  ))}

              <Box>
                <TableContainer>
                  <Table variant="simple">
                    <TableCaption>Properti yang digunakan di Upacara Yadnya tertentu.</TableCaption>
                    <Thead>
                      <Tr>
                        <Th width="1rem">#</Th>
                        <Th>Name</Th>
                        <Th isNumeric>Detail</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {isLoadingPost ? (
                        <Tr>
                          <Td width="1rem">
                            <Skeleton />
                          </Td>
                          <Td>
                            <Skeleton />
                          </Td>
                          <Td isNumeric>
                            <Skeleton />
                          </Td>
                        </Tr>
                      ) : posts.data.length > 0 ? (
                        posts.data.map((post, index) => (
                          <Tr key={post.id}>
                            <Td width="1rem">{index + 1}.</Td>
                            <Td>{post.attributes.name}</Td>
                            <Td isNumeric>
                              <Link href={`/properti/${post.id}`}>
                                <a>
                                  <Button size="sm" backgroundColor="#FAF3E3" _hover={{ backgroundColor: '#FAF3E3' }}>
                                    Lihat
                                  </Button>
                                </a>
                              </Link>
                            </Td>
                          </Tr>
                        ))
                      ) : (
                        <Tr>
                          <Td width="1rem">-</Td>
                          <Td>-</Td>
                          <Td isNumeric>-</Td>
                        </Tr>
                      )}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default Properties;
