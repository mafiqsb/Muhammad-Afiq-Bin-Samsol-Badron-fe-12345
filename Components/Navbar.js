'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  Text,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Container,
  Heading,
  MenuDivider,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import TheaterPage from '../app/theatre/page';
import TimeSlot from '@/app/timeslot/page';

import { usePathname, useRouter } from 'next/navigation';

const Links = [
  'Home',
  'Movies',
  'TV Show',
  'Video',
  'FAQ',
  'Pricing',
  'Contact Us',
];

const Navbar = ({ handleNavbarButtonClick }) => {
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const timeSlotPathname = router.pathname === '/timeslot';
  const theatrePathname = router.pathname === '/theatre';

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const handleClick = (link) => (event) => {
    event.preventDefault();
    router.push(link);
    setActiveLink(link);
  };

  return (
    <Box bgGradient="linear(to-r, #333333, #000000)">
      <Container maxW="8xl" mx="auto">
        <Flex p="4" height="104px" alignItems="center">
          <Heading fontSize="32px" fontWeight="bold" color="white" mr="50px">
            <Link _hover={{ textDecoration: 'none' }} href="/">
              PcariMovie
            </Link>
          </Heading>
          <HStack as={'nav'} gap="48px" display={{ base: 'none', lg: 'flex' }}>
            <List display="flex" fontSize={{ md: '10px', xl: '16px' }}>
              <ListItem>
                <Link
                  href="/"
                  color="white"
                  _hover={{ textDecoration: 'none' }}
                  textDecoration={activeLink === '/' ? 'none' : 'none'}
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: '2.5px',
                    backgroundColor:
                      activeLink === '/' ? '#FED530' : 'transparent',
                  }}
                  mr="40px"
                  onClick={handleClick('/')}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/movies"
                  color="white"
                  _hover={{ textDecoration: 'none' }}
                  textDecoration="none"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: '2.5px',
                    backgroundColor:
                      activeLink === '/movies' ? '#FED530' : 'transparent',
                  }}
                  mr="40px"
                  onClick={handleClick('/movies')}
                >
                  Movies
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/tvshow"
                  color="white"
                  _hover={{ textDecoration: 'none' }}
                  textDecoration="none"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: '2.5px',
                    backgroundColor:
                      activeLink === '/tvshow' ? '#FED530' : 'transparent',
                  }}
                  mr="40px"
                  onClick={handleClick('/tvshow')}
                >
                  TV Show
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="video"
                  color="white"
                  _hover={{ textDecoration: 'none' }}
                  textDecoration="none"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: '2.5px',
                    backgroundColor:
                      activeLink === '/video' ? '#FED530' : 'transparent',
                  }}
                  mr="40px"
                  onClick={handleClick('/video')}
                >
                  Video
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/faq"
                  color="white"
                  _hover={{ textDecoration: 'none' }}
                  textDecoration="none"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: '2.5px',
                    backgroundColor:
                      activeLink === '/faq' ? '#FED530' : 'transparent',
                  }}
                  mr="40px"
                  onClick={handleClick('/faq')}
                >
                  FAQ
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/pricing"
                  color="white"
                  _hover={{ textDecoration: 'none' }}
                  textDecoration="none"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: '2.5px',
                    backgroundColor:
                      activeLink === '/pricing' ? '#FED530' : 'transparent',
                  }}
                  mr="40px"
                  onClick={handleClick('/pricing')}
                >
                  Pricing
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="/contactus"
                  color="white"
                  _hover={{ textDecoration: 'none' }}
                  textDecoration="none"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: '2.5px',
                    backgroundColor:
                      activeLink === '/contactus' ? '#FED530' : 'transparent',
                  }}
                  mr="40px"
                  onClick={handleClick('/contactus')}
                >
                  Contact Us
                </Link>
              </ListItem>
            </List>
          </HStack>

          <Spacer />
          <Flex alignItems="center" display={{ base: 'flex', md: 'flex' }}>
            <Box mr={{ base: '4px', md: '30px' }}>
              <IconButton
                icon={<SearchIcon />}
                aria-label="Search"
                variant="ghost"
                color="white"
                onClick={handleNavbarButtonClick}
              />
            </Box>
            <Menu>
              <MenuButton mr={{ base: '4px', md: '10px' }}>
                <Avatar
                  size="sm"
                  name="User"
                  src="https://bit.ly/broken-link"
                />
              </MenuButton>

              <MenuList display={{ base: 'flex-col', lg: 'none' }}>
                <MenuItem>
                  <Text color="black">John Glich</Text>
                </MenuItem>
                <MenuDivider />
                {Links.map((link) => (
                  <MenuItem key={link}>
                    <Link>{link}</Link>
                  </MenuItem>
                ))}
              </MenuList>

              <Text color="white" display={{ base: 'none', md: 'flex' }}>
                John Glich
              </Text>
            </Menu>
          </Flex>
        </Flex>
      </Container>

      {timeSlotPathname && <TimeSlot />}
      {theatrePathname && <TheaterPage />}
    </Box>
  );
};

export default Navbar;
