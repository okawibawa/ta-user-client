import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

// comps
import Layout from '../../components/Layout';

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
import { getPropertiesByMainPost, getYadnyaDetailData, getCeremonySteps, getAllTags } from '../../apis/apis';

export const getServerSideProps = async (context) => {
  const {
    query: { index },
  } = context;

  const result = await getYadnyaDetailData(index);
  const steps = await getCeremonySteps(result.data.data.id);
  const tags = await getAllTags();
  const properties = await getPropertiesByMainPost(result.data.data.id);

  return {
    props: { index, post: result.data, steps: steps.data, tags: tags.data, properties: properties.data },
  };
};

const Properti = ({ index, post, steps, tags, properties }) => {
  console.log({ properties: properties });

  return (
    <Layout>
      <Box w="100%" mb="8" mt="16">
        <Heading as="h2" mb="2">
          {post.data.attributes.name}
        </Heading>

        <Box display="flex" alignItems="flex-start" justifyContent="space-between">
          <Box w={['100%', '48%']}>
            {post.data.attributes.pictures.data && (
              <Box mb="4">
                <Carousel>
                  {post.data.attributes.pictures.data.map((picture) => (
                    <Box key={picture.id}>
                      <img src={picture.attributes.url} />
                    </Box>
                  ))}
                </Carousel>
              </Box>
            )}

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
          Prosesi
        </Heading>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Prosesi Awal
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <OrderedList>
                {steps.data.filter((step) => step.attributes.status.data.id == 1).length > 0 ? (
                  steps.data.map((step) => (
                    <ListItem key={step.id}>
                      <Link href={`/properti-detail/${index}/${step.attributes.post.data.id}`}>
                        <a>
                          <Text as="p" textDecoration="underline" display="inline">
                            {step.attributes.post.data.attributes.name}
                          </Text>
                        </a>
                      </Link>
                    </ListItem>
                  ))
                ) : (
                  <Text as="p">Tidak ada data.</Text>
                )}
              </OrderedList>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Prosesi Puncak
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {steps.data.filter((step) => step.attributes.status.data.id == 2).length > 0 ? (
                steps.data.map((step) => (
                  <ListItem key={step.id}>
                    <Link href={`/properti-detail/${index}/${step.attributes.post.data.id}`}>
                      <a>
                        <Text as="p" textDecoration="underline" display="inline">
                          {step.attributes.post.data.attributes.name}
                        </Text>
                      </a>
                    </Link>
                  </ListItem>
                ))
              ) : (
                <Text as="p">Tidak ada data.</Text>
              )}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Prosesi Akhir
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {steps.data.filter((step) => step.attributes.status.data.id == 3).length > 0 ? (
                steps.data.map((step) => (
                  <ListItem key={step.id}>
                    <Link href={`/properti-detail/${index}/${step.attributes.post.data.id}`}>
                      <a>
                        <Text as="p" textDecoration="underline" display="inline">
                          {step.attributes.post.data.attributes.name}
                        </Text>
                      </a>
                    </Link>
                  </ListItem>
                ))
              ) : (
                <Text as="p">Tidak ada data.</Text>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
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
                  {properties.data
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
