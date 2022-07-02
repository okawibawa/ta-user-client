import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

// chakra
import { Box, Heading, Text, Button } from '@chakra-ui/react';

// comps
import Layout from '../components/Layout';
import HeadSeo from '../components/Head';

// constants
import { ceremonies } from '../constants/ceremonies';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
  });

  return (
    <Layout>
      <HeadSeo />
      <Box display="flex" w="100%" h="60vh" justifyContent="space-between" alignItems="center" mb="8">
        <Box w="48%">
          <Heading as="h2">Sanatras</Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus perferendis error natus incidunt
            dolorum.
          </Text>
        </Box>

        <Box w="48%">
          <Image width={512} height={312} src="/hero.png" alt="Hero" />
        </Box>
      </Box>

      <Box w="100%" textAlign="center" py="6" backgroundColor="#FAF3E3" borderRadius="4" mb="16">
        <Heading as="h3" fontSize="1.5rem" mb="2">
          Tentang Sanatras
        </Heading>
        <Text as="p" maxW="576px" mx="auto">
          Sanatras merupakan sebuah sistem informasi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cum
          reprehenderit atque rerum numquam vel?
        </Text>
      </Box>

      <Box textAlign="center" mb="16">
        <Heading as="h3" fontSize="1.5rem" mb="2">
          Panca Yadnya
        </Heading>

        <div ref={sliderRef} className="keen-slider">
          {ceremonies.map((ceremony) => (
            <div key={ceremony.id} className="keen-slider__slide number-slide1">
              <Box
                p="8"
                border="1px solid lightgrey"
                borderRadius="1rem"
                backgroundColor="white"
                display="flex"
                flexDirection="column"
                height="100%"
              >
                <Heading as="h4" fontSize="1.25rem">
                  {ceremony.name}
                </Heading>
                <Text as="p" mt="2" mb="8" flex="1" flexGrow="1">
                  {ceremony.description}
                </Text>
                <Link href={`/yadnya/${ceremony.id}`}>
                  <a>
                    <Button backgroundColor="#FAF3E3" _hover={{ backgroundColor: '#FAF3E3' }}>
                      Lihat Yadnya
                    </Button>
                  </a>
                </Link>
              </Box>
            </div>
          ))}
        </div>
      </Box>

      <Box textAlign="center" mb="16">
        <Heading as="h3" fontSize="1.25rem">
          Hubungi Kami
        </Heading>

        <Text as="p" mt="2" mb="8">
          Sanatras Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, praesentium!
        </Text>

        <Button backgroundColor="#FAF3E3" _hover={{ backgroundColor: '#FAF3E3' }}>
          <a href="mailto:okaa.wibawa@gmail.com">sanatras@info.com</a>
        </Button>
      </Box>
    </Layout>
  );
}
