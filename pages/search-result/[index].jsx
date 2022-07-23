import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';

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
import Layout from '../../components/Layout';
import HeadSeo from '../../components/Head';

// apis
import { getAllTags, searchPost } from '../../apis/apis';

const Properties = () => {
  const [tags, setTags] = useState([]);
  const [result, setResult] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTag, setActiveTag] = useState(1);

  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);

    const getTag = async () => {
      const tag = await getAllTags();
      const res = await searchPost(router.query.index);

      setTags(tag.data);
      setResult(res.data);
      setIsLoading(false);
    };

    getTag();
  }, [router.query.index]);

  return (
    <Layout>
      <HeadSeo />

      <Box w="100%" mb="8" mt="16">
        <Heading as="h2" fontSize="1.625rem">
          Hasil pencarian: {router.query.index}
        </Heading>
      </Box>

      <Box
        display="flex"
        flexDirection={['column', 'row']}
        alignItems="start"
        justifyContent={['center', 'space-between']}
      >
        <Box width={['100%', '24%']} mb={[4, 0]} border="1px solid lightgrey" borderRadius=".5rem" p={['1.5rem 1rem']}>
          <Box display="flex" flexDirection="column">
            {isLoading ? (
              <Box>
                <Text as="p">Memuat data..</Text>
              </Box>
            ) : (
              tags.data.map((tag) => (
                <Box key={tag.id} mb="2" display="flex" alignItems="center" justifyContent="space-between">
                  <Text
                    as="p"
                    onClick={() => setActiveTag(tag.id)}
                    cursor="pointer"
                    textDecoration={`${activeTag === tag.id ? 'underline' : 'none'}`}
                  >
                    {tag.attributes.name}
                  </Text>

                  <Text as="p">{result.data.filter((result) => result.attributes.tag.data.id === tag.id).length}</Text>
                </Box>
              ))
            )}
          </Box>
        </Box>

        <Box width={['100%', '74%']} mb={[8]}>
          {isLoading ? (
            <Box>
              <Text as="p">Memuat data..</Text>
            </Box>
          ) : (
            <Box>
              {tags.data
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
                      {isLoading ? (
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
                      ) : result.data.length > 0 ? (
                        result.data
                          .filter((result) => result.attributes.tag.data.id === activeTag)
                          .map((result, index) => (
                            <Tr key={result.id}>
                              <Td width="1rem">{index + 1}.</Td>
                              <Td>{result.attributes.name}</Td>
                              <Td isNumeric>
                                <Link
                                  href={
                                    result.attributes.tag.data.id === 7
                                      ? `/detail-yadnya/${result.id}`
                                      : `/properti/${result.id}`
                                  }
                                >
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
