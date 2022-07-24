import React from 'react';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

// apis
import { getYadnyaDetailData, getAllTags, getSubDetailProperties, getSubStepsDetail } from '../../apis/apis';

export const getServerSideProps = async (context) => {
  const {
    query: { index },
  } = context;

  const result = await getSubStepsDetail(index[1], index[2], index[3]);
  const tags = await getAllTags();
  const subProperties = await getSubDetailProperties(index[1], index[2], index[4]);

  return {
    props: {
      index,
      post: result.data,
      tags: tags.data,
      subProperties: subProperties.data,
    },
  };
};

const Properti = ({ index, post, tags, subProperties }) => {
  return (
    <Layout>
      <HeadSeo />

      <Breadcrumb mt="8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Text as="p">{post.data[0].attributes.parent_post.data.attributes.parent_post.data.attributes.name}</Text>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Text as="p">{post.data[0].attributes.parent_post.data.attributes.post.data.attributes.name}</Text>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Text as="p" color="gray">
            {post.data[0].attributes.post.data.attributes.name}
          </Text>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box w="100%" mb="8" mt="16">
        <Heading as="h2" mb="2">
          {post.data[0].attributes.post.data.attributes.name}
        </Heading>

        <Box display="flex" flexDirection={['column', 'row']} alignItems="flex-start" justifyContent="space-between">
          <Box w={['100%', '48%']}>
            {/* {post.data[0].attributes.pictures.data && (
              <Box mb="4">
                <Carousel>
                  {post.data[0].attributes.data.map((picture) => (
                    <Box key={picture.id}>
                      <img src={picture.attributes.url} />
                    </Box>
                  ))}
                </Carousel>
              </Box>
            )} */}

            <Text
              as="p"
              dangerouslySetInnerHTML={{ __html: post.data[0].attributes.post.data.attributes.description }}
            ></Text>
          </Box>

          <Box w={['100%', '48%']}>
            <Box mb="4">
              {post.data[0].attributes.post.data.attributes.video_url ? (
                <AspectRatio maxW="560px" ratio={16 / 9}>
                  <iframe
                    title="naruto"
                    src={`${
                      post.data[0].attributes.post.data.attributes.video_url.includes('https://www.youtube.com/embed/')
                        ? post.data[0].attributes.post.data.attributes.video_url
                        : `https://www.youtube.com/embed/${post.data[0].attributes.post.data.attributes.video_url}`
                    }`}
                    allowFullScreen
                  />
                </AspectRatio>
              ) : (
                <Text as="p">Tidak terdapat media video.</Text>
              )}
            </Box>

            <Box>
              {post.data[0].attributes.post.data.attributes.audio_url ? (
                <AspectRatio maxW="560px" ratio={16 / 9}>
                  <iframe
                    title="audio"
                    width="100%"
                    height="100"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=${post.data[0].attributes.post.data.attributes.audio_url}`}
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
          {tags.data
            .filter((tag) => tag.id !== 3 && tag.id !== 7)
            .map((tag) => (
              <AccordionItem key={tag.id}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Text as="p">{tag.attributes.name}</Text>
                    </Box>

                    <Text as="p" mr="4" fontSize=".825rem">
                      {
                        subProperties.data
                          .filter((property) => property.attributes.tag.data !== null)
                          .filter((property) => property.attributes.tag.data.id == tag.id).length
                      }{' '}
                      Properti
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <OrderedList>
                    {subProperties.data
                      .filter((property) => property.attributes.tag.data !== null)
                      .filter((property) => property.attributes.tag.data.id == tag.id)
                      .map((property) => (
                        <ListItem key={property.id} mb="2">
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
