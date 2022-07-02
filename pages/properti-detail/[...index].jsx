import React from 'react';
import Link from 'next/link';

// comps
import Layout from '../../components/Layout';
import HeadSeo from '../../components/Head';

// chakra
import {
  Box,
  Heading,
  Text,
  AspectRatio,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  OrderedList,
  ListItem,
} from '@chakra-ui/react';

// apis
import { getYadnyaDetailData, getAllTags, getStepsSubDetails } from '../../apis/apis';

export const getServerSideProps = async (context) => {
  const {
    query: { index },
  } = context;

  const result = await getYadnyaDetailData(index[1]);
  const tags = await getAllTags();
  const subProperties = await getStepsSubDetails(index[0], index[1]);

  return {
    props: { post: result.data, tags: tags.data, subProperties: subProperties.data },
  };
};

const Properti = ({ post, tags, subProperties }) => {
  console.log({ subProperties });

  return (
    <Layout>
      <HeadSeo />

      <Box w="100%" mb="8" mt="16">
        <Heading as="h2" mb="2">
          {post.data.attributes.name}
        </Heading>

        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box w={['100%', '48%']}>
            <Text as="p" dangerouslySetInnerHTML={{ __html: post.data.attributes.description }}></Text>
          </Box>

          <Box w={['100%', '48%']}>
            <Box mb="4">
              {post.data.attributes.video_url ? (
                <AspectRatio maxW="560px" ratio={16 / 9}>
                  <iframe
                    title="naruto"
                    src={`${
                      post.data.attributes.video_url.includes('https://www.youtube.com/embed/')
                        ? post.data.attributes.video_url
                        : `https://www.youtube.com/embed/${post.data.attributes.video_url}`
                    }`}
                    allowFullScreen
                  />
                </AspectRatio>
              ) : (
                <Text as="p">Tidak terdapat media video.</Text>
              )}
            </Box>

            <Box>
              {post.data.attributes.audio_url ? (
                <AspectRatio maxW="560px" ratio={16 / 9}>
                  <iframe
                    title="audio"
                    width="100%"
                    height="100"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=${post.data.attributes.audio_url}`}
                  ></iframe>
                </AspectRatio>
              ) : (
                <Text as="p">Tidak terdapat media audio.</Text>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mb="8">
        <Heading as="h3" mb="2">
          Properti
        </Heading>

        <Accordion allowToggle>
          {tags.data.map((tag) => (
            <AccordionItem key={tag.id}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {tag.attributes.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList>
                  {subProperties.data
                    .filter((property) => property.attributes.tag.data !== null)
                    .filter((property) => property.attributes.tag.data.id == tag.id)
                    .map((property) => (
                      <ListItem key={property.id}>
                        <Link href={`/properti/${property.attributes.post.data.id}`}>
                          <a>
                            <Text as="p" textDecoration="underline" display="inline">
                              {property.attributes.post.data.attributes.name}
                            </Text>
                          </a>
                        </Link>
                      </ListItem>
                    ))}
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Layout>
  );
};

export default Properti;
