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
} from '@chakra-ui/react';

import { useContext, useEffect } from 'react';

import { IoMdTime } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { Store } from '@/app/Store';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TimeSlotSearchResult() {
  const router = useRouter();
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { timeslotInformation } = state;

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const response = await fetch(
          'https://6489c418-3ec0-4946-9354-a0d615341201.mock.pstmn.io/timeslot?theater_name=ABC movies&time_start=2020-04-04 00:00:00&time_end=2020-04-05 00:00:00'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        ctxDispatch({ type: 'TIMESLOT_INFORMATION', payload: data.data });
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovieList();
  }, []);

  // const handleCardClick = (movieId) => {
  //   router.push(`/movie/${movieId}`);
  // };

  return (
    <Box bgGradient="linear(to-r,  #000000,  #333333)">
      <Container py={12} maxW={{ base: '100%', xl: '1500px' }}>
        <Stack spacing={4} mt="50px">
          <Container
            display="flex"
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
              {Array.isArray(timeslotInformation) &&
                timeslotInformation.map((movie) => (
                  <GridItem key={movie.Movie_ID}>
                    <Link
                      href="/timeslotpagemovie/[id]"
                      as={`/timeslotpagemovie/${movie.Movie_ID}`}
                      passHref
                    >
                      <Card
                        bgGradient="linear(to-b, #333333, #000000)"
                        bgImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)), url(${movie.Poster})`}
                        // width={{ base: '370px', lg: '480px' }}
                        // height={{ base: '400px', lg: '560px' }}
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
                        width={{ base: '380px', xl: '400px' }}
                        height={{ base: '400px', xl: '560px' }}
                        // onClick={() => handleCardClick(movie.Movie_ID)}
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
                            mb="-15px"
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
