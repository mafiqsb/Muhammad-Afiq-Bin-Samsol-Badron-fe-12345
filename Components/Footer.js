import {
  Container,
  Grid,
  GridItem,
  Stack,
  Text,
  Link,
  Input,
  Button,
  Flex,
  Heading,
  Box,
  HStack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa6';
import { TbBrandGoogleMaps } from 'react-icons/tb';
import { MdOutlineMail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const productLinks = ['Movie', 'TV Show', 'Videos'];
  const sitemapLinks = ['About', 'Career', 'Press'];
  const mediaGroup = ['Nice Studio', 'Nice News', 'Nice TV'];
  return (
    <Grid
      bg="black"
      templateColumns={{
        base: '1fr',
        // lg: 'repeat(6, 1fr)',
        xl: 'repeat(10, 1fr)',
      }}
    >
      <GridItem
        bg="rgba(61, 61, 61, 1)"
        color="white"
        p={8}
        colSpan={{ base: 'auto', lg: 2, xl: 4 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={{ base: 'center', xl: 'flex-start' }}
      >
        <Box
          width={{ base: '300px', lg: '400px' }}
          height="368px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          ml={{ base: 0, lg: 0, xl: 44 }}
        >
          <Heading
            size="md"
            mb={10}
            fontSize={{ base: '30px', xl: '64px' }}
            textAlign="left"
          >
            PcariMovie
          </Heading>
          <Text mb={10} textAlign="left" fontSize="16px">
            Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </Text>
          <Stack spacing={4} textAlign="left">
            <Text fontWeight="bold" mb="4">
              Join Newsletters
            </Text>

            <HStack justifyContent="left">
              <InputGroup alignItems="center">
                <Input
                  placeholder="Insert your mail here"
                  height="3.5rem"
                  width="18rem"
                  borderColor="transparent"
                  bg="rgba(82, 82, 82, 1)"
                  _hover={{ borderColor: 'transparent' }}
                />
                <InputRightElement
                  width={{ base: '6rem', lg: '18rem' }}
                  mt="0.5rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button bg="#FED530" h="100%">
                    <FaArrowRight />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </HStack>
          </Stack>
        </Box>
      </GridItem>

      <GridItem
        bg="rgba(46, 46, 46, 1)"
        color="white"
        p={8}
        colSpan={{
          base: 'auto',
          // lg: 4,
          xl: 6,
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={{ base: 'center', xl: 'flex-start' }}
      >
        <Box pl={{ xl: 6 }}>
          <Box
            w={{ base: 'w-full', xl: '600px' }}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            mt={0}
            textAlign={{ base: 'center', xl: 'left' }}
          >
            <Stack spacing={8}>
              <Text fontSize="xl" fontWeight="bold">
                Product
              </Text>
              {productLinks.map((link, index) => (
                <Link key={index} color="white">
                  {link}
                </Link>
              ))}
            </Stack>
            <Stack spacing={8}>
              <Text fontSize="xl" fontWeight="bold">
                Media Group
              </Text>
              {mediaGroup.map((media, index) => (
                <Link key={index} color="white">
                  {media}
                </Link>
              ))}
            </Stack>
            <Stack spacing={8}>
              <Text fontSize="xl" fontWeight="bold">
                Sitemap
              </Text>
              {sitemapLinks.map((link, index) => (
                <Link key={index} color="white">
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            mt={20}
          >
            <Flex alignItems="flex-start">
              <Flex align="center" mr={{ base: 2, md: 4 }}>
                <TbBrandGoogleMaps />

                <Text ml={2} fontSize={{ base: 'x-small', md: 'medium' }}>
                  8819 Ohio St. South Gate, California 90280
                </Text>
              </Flex>
              <Flex align="center" mr={{ base: 2, md: 4 }}>
                <MdOutlineMail />
                <Text ml={2} fontSize={{ base: 'x-small', md: 'medium' }}>
                  ourstudio@hello.com
                </Text>
              </Flex>
              <Flex align="center" mr={{ base: 2, md: 4 }}>
                <FaPhoneAlt />
                <Text ml={2} fontSize={{ base: 'x-small', md: 'medium' }}>
                  +271 386-647-3637
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Footer;
