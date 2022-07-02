import React from 'react';
import { getYadnyaDetailData } from '../../apis/apis';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
} from '@chakra-ui/react';

export const getServerSideProps = async (context) => {
  const {
    query: { index },
  } = context;

  const result = await getYadnyaDetailData(index);

  return {
    props: { post: result.data },
  };
};

const Properti = ({ post }) => {
  console.log({ post });

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Layout>
  );
};

export default Properti;
