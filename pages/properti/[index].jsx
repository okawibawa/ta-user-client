import React from 'react';
import { getYadnyaDetailData } from '../../apis/apis';

// comps
import Layout from '../../components/Layout';
import HeadSeo from '../../components/Head';

// chakra
import { Box, Heading, Text, AspectRatio } from '@chakra-ui/react';

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
    </Layout>
  );
};

export default Properti;
