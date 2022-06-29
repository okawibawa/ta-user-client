import React from 'react';
import Link from 'next/link';

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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Container maxW="container.lg">
      <nav>
        <Box display="flex" alignItems="center" justifyContent="space-between" py="4">
          <Heading as="h1" fontSize="1.25rem" fontWeight="bold">
            <Link href="/">
              <a>Sanatras</a>
            </Link>
          </Heading>

          <Box>
            <UnorderedList display="flex">
              <ListItem listStyleType="none">
                <Menu>
                  <MenuButton>
                    Panca Yadnya <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link href={`/yadnya/${1}`}>
                        <a>Dewa Yadnya</a>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href={`/yadnya/${3}`}>
                        <a>Manusa Yadnya</a>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href={`/yadnya/${4}`}>
                        <a>Rsi Yadnya</a>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href={`/yadnya/${5}`}>
                        <a>Bhuta Yadnya</a>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href={`/yadnya/${2}`}>
                        <a>Pitra Yadnya</a>
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </ListItem>
              <ListItem listStyleType="none" mx="8">
                <Link href="/properties">
                  <a>Properti</a>
                </Link>
              </ListItem>
              <ListItem listStyleType="none">
                <Link href="#">
                  <a>Tentang Kami</a>
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
