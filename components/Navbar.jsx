/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// chakra
import {
  Container,
  Button,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputLeftElement,
  Input,
  keyframes,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

// icon
import { Menu as MenuIcon, Cancel, Search } from 'iconoir-react';

const queryList = [
  'Piodalan',
  'Tari Baris',
  'Atma Wedana',
  'Tari Jauk',
  'Panca Sembah',
  'Tri Sandya',
  'Gong Kebyar',
  'Tabuh Telu',
  'Gamelan Baris',
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState('Rejang Renteng');
  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();

  useEffect(() => {
    setInterval(() => {
      setQuery(queryList[Math.floor(Math.random() * queryList.length)]);
    }, 5000);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      router.push({
        pathname: '/search-result/[index]',
        query: {
          index: searchQuery,
        },
      });
    }
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container maxW="container.lg">
      <nav>
        <Box display="flex" alignItems="center" justifyContent="space-between" py="4" position="relative">
          <Heading as="h1" width={['22%', '10%']} fontSize={['.825rem', '1.25rem']} fontWeight="bold">
            <Link href="/">
              <a>Sanatras</a>
            </Link>
          </Heading>

          <Box width={['62%', '56%']}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<Search />} />
              <Input
                onKeyDown={handleSearch}
                onChange={handleSearchQuery}
                focusBorderColor="#FAF3E3"
                type="text"
                placeholder={`cth. ${query}`}
              />
            </InputGroup>
          </Box>

          <Box display={['none', 'block']} width={['6%', '30%']}>
            <UnorderedList display="flex">
              <ListItem listStyleType="none">
                <Menu>
                  <MenuButton>
                    Panca Yadnya <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <Link href={`/yadnya/${1}`}>
                      <a>
                        <MenuItem>Dewa Yadnya</MenuItem>
                      </a>
                    </Link>
                    <Link href={`/yadnya/${3}`}>
                      <a>
                        <MenuItem>Manusa Yadnya</MenuItem>
                      </a>
                    </Link>
                    <Link href={`/yadnya/${4}`}>
                      <a>
                        <MenuItem>Rsi Yadnya</MenuItem>
                      </a>
                    </Link>
                    <Link href={`/yadnya/${5}`}>
                      <a>
                        <MenuItem>Bhuta Yadnya</MenuItem>
                      </a>
                    </Link>
                    <Link href={`/yadnya/${2}`}>
                      <a>
                        <MenuItem>Pitra Yadnya</MenuItem>
                      </a>
                    </Link>
                  </MenuList>
                </Menu>
              </ListItem>
              <ListItem listStyleType="none" mx="8">
                <Link href="/properties">
                  <a>Properti</a>
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box display={['block', 'none']} width="3%">
            <Box
              visibility={`${mobileMenu === true ? 'hidden' : 'visible'}`}
              opacity={`${mobileMenu === true ? '0' : '1'}`}
              onClick={() => setMobileMenu(!mobileMenu)}
              position="absolute"
              right="0"
              top="50%"
              transform="translateY(-50%)"
              transition="all ease-in-out .200s"
            >
              <MenuIcon cursor="pointer" />
            </Box>

            <Box
              visibility={`${mobileMenu === false ? 'hidden' : 'visible'}`}
              opacity={`${mobileMenu === false ? '0' : '1'}`}
              onClick={() => setMobileMenu(!mobileMenu)}
              position="absolute"
              right="0"
              top="50%"
              transform="translateY(-50%)"
              transition="all ease-in-out .200s"
            >
              <Cancel cursor="pointer" />
            </Box>
          </Box>

          <Box
            display={['block', 'none']}
            visibility={`${mobileMenu === false ? 'hidden' : 'visible'}`}
            opacity={`${mobileMenu === false ? '0' : '1'}`}
            transition="all ease-in-out .200s"
            position="absolute"
            zIndex={4}
            top="20"
            width="100%"
            borderRadius={6}
            py={6}
            px={4}
            backgroundColor="gray.100"
          >
            <UnorderedList display="flex" flexDirection="column">
              <ListItem listStyleType="none">
                <Menu>
                  <MenuButton>
                    Panca Yadnya <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <Link href={`/yadnya/${1}`}>
                      <a>
                        <MenuItem>Dewa Yadnya</MenuItem>
                      </a>
                    </Link>
                    <Link href={`/yadnya/${3}`}>
                      <a>
                        <MenuItem>Manusa Yadnya</MenuItem>
                      </a>
                    </Link>
                    <Link href={`/yadnya/${4}`}>
                      <a>
                        <MenuItem>Rsi Yadnya</MenuItem>
                      </a>
                    </Link>
                    <Link href={`/yadnya/${5}`}>
                      <a>
                        <MenuItem>Bhuta Yadnya</MenuItem>
                      </a>
                    </Link>
                    <Link href={`/yadnya/${2}`}>
                      <a>
                        <MenuItem>Pitra Yadnya</MenuItem>
                      </a>
                    </Link>
                  </MenuList>
                </Menu>
              </ListItem>
              <ListItem listStyleType="none" my={8}>
                <Link href="/properties">
                  <a>Properti</a>
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </nav>
    </Container>
  );
};

export default Navbar;
