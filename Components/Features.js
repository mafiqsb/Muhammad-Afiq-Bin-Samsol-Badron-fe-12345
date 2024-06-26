'use client';

import {
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  Card,
  CardHeader,
  CardBody,
  Grid,
  Badge,
  GridItem,
  Hide,
} from '@chakra-ui/react';

import { useContext, useEffect } from 'react';

import { IoMdTime } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { Store } from '@/app/Store';
import Link from 'next/link';

export default function Features() {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { movieInformation } = state;

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const response = await fetch(
          'https://6489c418-3ec0-4946-9354-a0d615341201.mock.pstmn.io/new_movies/?r_date=2020-01-01'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        ctxDispatch({ type: 'MOVIE_INFORMATION', payload: data.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };

    fetchMovieList();
  }, []);

  return (
    <Box bgGradient="linear(to-r,  #000000,  #333333)">
      <Container py={12} maxW={{ base: '100%', xl: '1500px' }}>
        <Stack spacing={4} mt="50px">
          <Container
            display="flex"
            alignItems="center"
            mb={{ base: '20px', xl: '40px' }}
            p={0}
            maxW={{ base: '100%', md: '80%', xl: '1250px' }}
            width="100%"
          >
            <Heading
              textTransform="uppercase"
              color="white"
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl' }}
              rounded="md"
              width="100%"
              textAlign={{ base: 'left', md: 'left' }}
            >
              New Releases
            </Heading>

            <Text
              color={'#FED530'}
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              w="100px"
            >
              View More
            </Text>
          </Container>
          <Box
            display={{ base: 'none', xl: 'flex' }}
            justifyContent="center"
            alignItems="center"
            p={0}
            flexWrap="wrap"
          >
            {Array.isArray(movieInformation) &&
              movieInformation.slice(0, 1).map((movie) => (
                <Link
                  href="/featurespagemovie/[id]"
                  as={`/featurespagemovie/${movie.Movie_ID}`}
                  passHref
                >
                  <Card
                    bgGradient="linear(to-b, #333333, #000000)"
                    bgImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${movie.Poster})`}
                    objectFit="cover"
                    bgSize="120% auto"
                    bgPos="center 35%"
                    bgRepeat="no-repeat"
                    key={movie.Movie_ID}
                    width={{ base: '380px', xl: '813px' }}
                    height={{ base: '400px', xl: '560px' }}
                    fontSize="lg"
                    position="relative"
                    mr={{ base: '0', xl: '20px' }}
                    _hover={{
                      transition: 'transform 0.3s ease-in-out',
                      transform: 'scale(1.05)',
                      cursor: 'pointer',
                    }}
                  >
                    <Badge
                      position="absolute"
                      top="12px"
                      left="12px"
                      variant="solid"
                      bgColor="#FED530"
                      color="black"
                      borderRadius="full"
                      px="2"
                      py="1"
                    >
                      {movie.Genre}
                    </Badge>

                    <Stack>
                      <Flex
                        position="absolute"
                        bottom="100px"
                        left="12px"
                        color="white"
                      >
                        <div>
                          <Text
                            fontSize="sm"
                            display="flex"
                            alignItems="center"
                            mr="10px"
                          >
                            <IoMdTime
                              style={{
                                marginRight: '5px',
                                fontSize: '1.8em',
                              }}
                            />
                            <span>{movie.Duration}</span>
                          </Text>
                        </div>
                        <div>
                          <Text
                            fontSize="sm"
                            display="flex"
                            alignItems="center"
                          >
                            <FaEye
                              style={{
                                marginRight: '5px',
                                fontSize: '1.8em',
                              }}
                            />
                            <span>{movie.Views} Views</span>
                          </Text>
                        </div>
                      </Flex>
                    </Stack>
                    <CardHeader
                      position="absolute"
                      bottom="40px"
                      left="50%"
                      pl="12px"
                      transform="translateX(-50%)"
                      textAlign="left"
                      color="white"
                      mb="-15px"
                      width="100%"
                    >
                      <Heading size={{ base: 'lg', xl: '2xl' }}>
                        {movie.Title}
                      </Heading>
                    </CardHeader>
                  </Card>
                </Link>
              ))}

            {Array.isArray(movieInformation) &&
              movieInformation.slice(1, 2).map((movie) => (
                <Link
                  href="/featurespagemovie/[id]"
                  as={`/featurespagemovie/${movie.Movie_ID}`}
                  passHref
                >
                  <Card
                    bgGradient="linear(to-b, #333333, #000000)"
                    bgImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${movie.Poster})`}
                    key={movie.Movie_ID}
                    width={{ base: '380px', xl: '395px' }}
                    height={{ base: '400px', xl: '560px' }}
                    // m={{ base: '0', xl: '3px' }}
                    fontSize="lg"
                    mt={{ base: '6px', xl: '0' }}
                    bgSize="cover"
                    bgPos="center"
                    position="relative"
                    bgRepeat="no-repeat"
                    _hover={{
                      transition: 'transform 0.3s ease-in-out',
                      transform: 'scale(1.05)',
                      cursor: 'pointer',
                    }}
                  >
                    <Badge
                      position="absolute"
                      top="12px"
                      left="12px"
                      variant="solid"
                      bgColor="#FED530"
                      color="black"
                      borderRadius="full"
                      px="2"
                      py="1"
                    >
                      {movie.Genre}
                    </Badge>

                    <Stack>
                      <Flex
                        position="absolute"
                        bottom="100px"
                        left="12px"
                        color="white"
                      >
                        <div>
                          <Text
                            fontSize="sm"
                            display="flex"
                            alignItems="center"
                            mr="10px"
                          >
                            <IoMdTime
                              style={{
                                marginRight: '5px',
                                fontSize: '1.8em',
                              }}
                            />
                            <span>{movie.Duration}</span>
                          </Text>
                        </div>
                        <div>
                          <Text
                            fontSize="sm"
                            display="flex"
                            alignItems="center"
                          >
                            <FaEye
                              style={{
                                marginRight: '5px',
                                fontSize: '1.8em',
                              }}
                            />
                            <span>{movie.Views} Views</span>
                          </Text>
                        </div>
                      </Flex>
                    </Stack>
                    <CardHeader
                      position="absolute"
                      bottom="40px"
                      left="50%"
                      pl="12px"
                      transform="translateX(-50%)"
                      textAlign="left"
                      color="white"
                      width="100%"
                      mb="-15px"
                    >
                      <Heading size={{ base: 'lg', xl: '2xl' }}>
                        {movie.Title}
                      </Heading>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
          </Box>
          <Box display="flex" justifyContent="center">
            {' '}
            <Grid
              templateColumns={{ base: '1fr', xl: 'repeat(3, 1fr)' }}
              gap={{ base: 2, xl: 5 }}
              mt={{ base: '-10px', xl: '0' }}
              display={{ base: 'none', xl: 'flex' }}
            >
              {Array.isArray(movieInformation) &&
                movieInformation.slice(2).map((movie) => (
                  <div key={movie.Movie_ID}>
                    <Link
                      href="/featurespagemovie/[id]"
                      as={`/featurespagemovie/${movie.Movie_ID}`}
                      passHref
                    >
                      <Card
                        bgGradient="linear(to-b, #333333, #000000)"
                        bgImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${movie.Poster})`}
                        width={{ base: '380px', xl: '395px' }}
                        height={{ base: '400px', xl: '560px' }}
                        m={{ base: '0', xl: '1px' }}
                        fontSize="lg"
                        mt={{ base: '6px', xl: '0' }}
                        bgSize="cover"
                        bgPos="center"
                        position="relative"
                        bgRepeat="no-repeat"
                        _hover={{
                          transition: 'transform 0.3s ease-in-out',
                          transform: 'scale(1.05)',
                          cursor: 'pointer',
                        }}
                      >
                        <Badge
                          position="absolute"
                          top="12px"
                          left="12px"
                          variant="solid"
                          bgColor="#FED530"
                          color="black"
                          borderRadius="full"
                          px="2"
                          py="1"
                        >
                          {movie.Genre}
                        </Badge>

                        <Stack>
                          <Flex
                            position="absolute"
                            bottom="100px"
                            left="12px"
                            color="white"
                          >
                            <div>
                              <Text
                                fontSize="sm"
                                display="flex"
                                alignItems="center"
                                mr="10px"
                              >
                                <IoMdTime
                                  style={{
                                    marginRight: '5px',
                                    fontSize: '1.8em',
                                  }}
                                />
                                <span>{movie.Duration}</span>
                              </Text>
                            </div>
                            <div>
                              <Text
                                fontSize="sm"
                                display="flex"
                                alignItems="center"
                              >
                                <FaEye
                                  style={{
                                    marginRight: '5px',
                                    fontSize: '1.8em',
                                  }}
                                />
                                <span>{movie.Views} Views</span>
                              </Text>
                            </div>
                          </Flex>
                        </Stack>
                        <CardHeader
                          position="absolute"
                          bottom="40px"
                          left="50%"
                          pl="12px"
                          transform="translateX(-50%)"
                          textAlign="left"
                          color="white"
                          width="100%"
                          mb="-15px"
                        >
                          <Heading size={{ base: 'lg', xl: '2xl' }}>
                            {movie.Title}
                          </Heading>
                        </CardHeader>
                      </Card>
                    </Link>
                  </div>
                ))}
            </Grid>
          </Box>

          <Hide above="xl">
            <Box display="flex" justifyContent="center">
              <Grid
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                gap={{ base: 2 }}
                mt={{ base: '-10px' }}
              >
                {Array.isArray(movieInformation) &&
                  movieInformation.map((movie) => (
                    <GridItem key={movie.Movie_ID}>
                      <Link
                        href="/featurespagemovie/[id]"
                        as={`/featurespagemovie/${movie.Movie_ID}`}
                        passHref
                      >
                        <Card
                          bgGradient="linear(to-b, #333333, #000000)"
                          bgImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${movie.Poster})`}
                          width={{ base: '370px', lg: '480px' }}
                          height={{ base: '400px', lg: '560px' }}
                          m={{ base: '0', xl: '6px' }}
                          fontSize="lg"
                          mt={{ base: '6px', xl: '0' }}
                          bgSize="cover"
                          bgPos="center"
                          position="relative"
                          bgRepeat="no-repeat"
                          _hover={{
                            transition: 'transform 0.3s ease-in-out',
                            transform: 'scale(1.05)',
                            cursor: 'pointer',
                          }}
                        >
                          <Badge
                            position="absolute"
                            top="12px"
                            left="12px"
                            variant="solid"
                            bgColor="#FED530"
                            color="black"
                            borderRadius="full"
                            px="2"
                            py="1"
                          >
                            {movie.Genre}
                          </Badge>

                          <CardBody display="flex" flexDirection="column">
                            <Stack>
                              <Flex
                                position="absolute"
                                bottom="100px"
                                left="12px"
                                color="white"
                              >
                                <div>
                                  <Text
                                    fontSize="sm"
                                    display="flex"
                                    alignItems="center"
                                    mr="10px"
                                  >
                                    <IoMdTime
                                      style={{
                                        marginRight: '5px',
                                        fontSize: '1.8em',
                                      }}
                                    />
                                    <span>{movie.Duration}</span>
                                  </Text>
                                </div>
                                <div>
                                  <Text
                                    fontSize="sm"
                                    display="flex"
                                    alignItems="center"
                                  >
                                    <FaEye
                                      style={{
                                        marginRight: '5px',
                                        fontSize: '1.8em',
                                      }}
                                    />
                                    <span>{movie.Views} Views</span>
                                  </Text>
                                </div>
                              </Flex>
                            </Stack>

                            <CardHeader
                              position="absolute"
                              bottom="40px"
                              left="50%"
                              pl="12px"
                              transform="translateX(-50%)"
                              textAlign="left"
                              color="white"
                              width="100%"
                            >
                              <Heading size={{ base: 'lg', xl: '2xl' }}>
                                {movie.Title}
                              </Heading>
                            </CardHeader>
                          </CardBody>
                        </Card>
                      </Link>
                    </GridItem>
                  ))}
              </Grid>
            </Box>
          </Hide>
        </Stack>
      </Container>
    </Box>
  );
}
