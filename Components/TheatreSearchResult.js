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

export default function TheaterSearchResult() {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { theaterInformation } = state;

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const response = await fetch(
          'https://6489c418-3ec0-4946-9354-a0d615341201.mock.pstmn.io/specific_movie_theater?theater_name=ABC movies&d_date=2020-04-04'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        ctxDispatch({ type: 'THEATER_INFORMATION', payload: data.data });
      } catch (err) {
        console.log(err);
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
            mb="20px"
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
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Search Result
            </Heading>
          </Container>
          <Box display="flex" justifyContent="center">
            <Grid
              templateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                xl: 'repeat(3, 1fr)',
              }}
              gap={{ base: 2 }}
              mt={{ base: '-10px' }}
            >
              {Array.isArray(theaterInformation) &&
                theaterInformation.map((movie) => (
                  <GridItem key={movie.Movie_ID}>
                    <Link href={`/theatrepagemovie/${movie.Movie_ID}`}>
                      <Card
                        bgGradient="linear(to-b, #333333, #000000)"
                        bgImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${movie.Poster})`}
                        // width={{ base: '370px', lg: '480px' }}
                        // height={{ base: '400px', lg: '560px' }}
                        width={{ base: '380px', xl: '400px' }}
                        height={{ base: '400px', xl: '560px' }}
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
                            mb="-15px"
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
        </Stack>
      </Container>
    </Box>
  );
}
