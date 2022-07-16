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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react';

// apis
import { getYadnyaDetailData, getAllTags, getStepsSubDetails } from '../../apis/apis';

export const getServerSideProps = async (context) => {
  const {
    query: { index },
  } = context;

  const result = await getYadnyaDetailData(index[2]);
  const tags = await getAllTags();
  const subProperties = await getStepsSubDetails(index[1], index[2]);

  return {
    props: { index, post: result.data, tags: tags.data, subProperties: subProperties.data },
  };
};

const Properti = ({ index, post, tags, subProperties }) => {
  const uniqueIds = [];

  const unique = subProperties.data
    .filter((subStep) => subStep.attributes.tag.data !== null && subStep.attributes.tag.data.id !== 3)
    .filter((subStep) => {
      const isDuplicate = uniqueIds.includes(subStep.attributes.post.data.id);

      if (!isDuplicate) {
        uniqueIds.push(subStep.attributes.post.data.id);

        return true;
      }

      return false;
    });

  return (
    <Layout>
      <HeadSeo />

      <Breadcrumb mt="8">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Text as="p">{index[0].charAt(0).toUpperCase() + index[0].slice(1)}</Text>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Text as="p" color="gray">
            {post.data.attributes.name}
          </Text>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box w="100%" mb="8" mt="8">
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
          Detail Prosesi
        </Heading>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text as="p">Tahapan</Text>
                </Box>

                <Text as="p" mr="4" fontSize=".825rem">
                  {
                    subProperties.data
                      .filter((property) => property.attributes.tag.data !== null)
                      .filter((property) => property.attributes.tag.data.id == 3).length
                  }{' '}
                  Tahapan
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <OrderedList>
                {subProperties.data
                  .filter((property) => property.attributes.tag.data !== null)
                  .filter((property) => property.attributes.tag.data.id == 3)
                  .map((property) => (
                    <ListItem key={property.id} mb="2">
                      <Link href={`/properti-sub-detail/${index[1]}/${index[2]}/${property.attributes.post.data.id}`}>
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
        </Accordion>
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
                        unique
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
                    {unique
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
