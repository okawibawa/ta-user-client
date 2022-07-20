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
    breakpoints: {
      '(min-width: 600px)': {
        slides: { perView: 2, spacing: 15 },
      },
    },
    slides: {
      perView: 1,
    },
  });

  console.log('Hello there, hi.');

  return (
    <Layout>
      <HeadSeo />
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        w="100%"
        h="60vh"
        justifyContent="space-between"
        alignItems="center"
        mb="8"
      >
        <Box w={['100%', '48%']}>
          <Heading as="h2">Sanatras</Heading>
          <Text as="p">
            Sanatras merupakan sebuah wikipedia yang berisikan informasi mengenai Upacara Yadnya di Bali beserta tahapan
            prosesi dan juga properti yang di gunakan.
          </Text>
        </Box>

        <Box w={['100%', '48%']}>
          <Image width={512} height={312} src="/hero.png" alt="Hero" />
        </Box>
      </Box>

      <Box w="100%" textAlign="center" py="6" backgroundColor="#FAF3E3" borderRadius="4" mb="16">
        <Heading as="h3" fontSize="1.5rem" mb="2">
          Tentang Sanatras
        </Heading>
        <Text as="p" maxW="576px" mx="auto">
          Sanatras menyediakan informasi lengkap mengenai Upacara Yadnya yang terdapat di Bali. Bagaimana tahapan yang
          terdapat di dalam Upacara Yadnya tersebut, dan juga properti seperti mantram, kidung, gamelan, tari, tabuh,
          ataupun properti lainnya yang digunakan di upacara tersebut.
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
          Hubungi kami apabila Anda memiliki pertanyaan, informasi, atau diskusi lainnya.
        </Text>

        <Button backgroundColor="#FAF3E3" _hover={{ backgroundColor: '#FAF3E3' }}>
          <a href="mailto:okaa.wibawa@gmail.com">sanatras@info.com</a>
        </Button>
      </Box>
    </Layout>
  );
}
