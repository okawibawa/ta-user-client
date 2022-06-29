import Head from 'next/head';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';

// chakra
import { Box, Heading, Text, Button } from '@chakra-ui/react';

// comps
import Layout from '../components/Layout';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
  });

  return (
    <Layout>
      <Box display="flex" w="100%" h="60vh" justifyContent="space-between" alignItems="center" mb="8">
        <Box w="48%">
          <Heading as="h2">Sanatras</Heading>
          <Text as="p" mx="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque delectus perferendis error natus incidunt
            dolorum.
          </Text>
        </Box>

        <Box w="48%">
          <Image width={512} height={312} src="/hero.png" alt="Hero" />
        </Box>
      </Box>

      <Box w="100%" textAlign="center" py="6" backgroundColor="#FAF3E3" borderRadius="4" mb="8">
        <Heading as="h3" fontSize="1.5rem" mb="2">
          Tentang Sanatras
        </Heading>
        <Text as="p" maxW="576px" mx="auto">
          Sanatras merupakan sebuah sistem informasi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cum
          reprehenderit atque rerum numquam vel?
        </Text>
      </Box>

      <Box textAlign="center" mb="8">
        <Heading as="h3" fontSize="1.5rem" mb="2">
          Panca Yadnya
        </Heading>

        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Box p="8" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" backgroundColor="white">
              <Heading as="h4" fontSize="1.25rem">
                Manusa Yadnya
              </Heading>
              <Text as="p" mt="2" mb="8">
                Manusa Yadnya merupakan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque cumque
                tempora, repellendus numquam veniam.
              </Text>
              <Button>Lihat Yadnya</Button>
            </Box>
          </div>
          <div className="keen-slider__slide number-slide1">
            <Box p="8" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" backgroundColor="white">
              <Heading as="h4" fontSize="1.25rem">
                Rsi Yadnya
              </Heading>
              <Text as="p" mt="2" mb="8">
                Rsi Yadnya merupakan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque cumque
                tempora, repellendus numquam veniam.
              </Text>
              <Button>Lihat Yadnya</Button>
            </Box>
          </div>
          <div className="keen-slider__slide number-slide1">
            <Box p="8" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" backgroundColor="white">
              <Heading as="h4" fontSize="1.25rem">
                Dewa Yadnya
              </Heading>
              <Text as="p" mt="2" mb="8">
                Dewa Yadnya merupakan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque cumque
                tempora, repellendus numquam veniam.
              </Text>
              <Button>Lihat Yadnya</Button>
            </Box>
          </div>
          <div className="keen-slider__slide number-slide1">
            <Box p="8" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" backgroundColor="white">
              <Heading as="h4" fontSize="1.25rem">
                Bhuta Yadnya
              </Heading>
              <Text as="p" mt="2" mb="8">
                Bhuta Yadnya merupakan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque cumque
                tempora, repellendus numquam veniam.
              </Text>
              <Button>Lihat Yadnya</Button>
            </Box>
          </div>
          <div className="keen-slider__slide number-slide1">
            <Box p="8" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" backgroundColor="white">
              <Heading as="h4" fontSize="1.25rem">
                Pitra Yadnya
              </Heading>
              <Text as="p" mt="2" mb="8">
                Pitra Yadnya merupakan Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque itaque cumque
                tempora, repellendus numquam veniam.
              </Text>
              <Button>Lihat Yadnya</Button>
            </Box>
          </div>
        </div>
      </Box>
    </Layout>
  );
}
