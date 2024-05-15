import { Box, Center, Heading, Spinner, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const fetchMovieDetails = async (id) => {
  try {
    const res = await fetch(
      'https://6489c418-3ec0-4946-9354-a0d615341201.mock.pstmn.io/new_movies/?r_date=2020-01-01'
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch movie details: ${res.statusText}`);
    }
    const data = await res.json();
    console.log(data);
    const movie = data.data.find((movie) => movie.Movie_ID.toString() === id);
    if (!movie) {
      throw new Error('Movie not found');
    }
    return movie;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function getStaticPaths() {
  try {
    const res = await fetch(
      'https://6489c418-3ec0-4946-9354-a0d615341201.mock.pstmn.io/new_movies/?r_date=2020-01-01'
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch movie list: ${res.statusText}`);
    }
    const movies = await res.json();

    const paths = movies.map((movie) => ({
      params: { id: movie.Movie_ID.toString() },
    }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {
  const movie = await fetchMovieDetails(params.id);
  if (!movie) {
    return {
      notFound: true,
    };
  }
  return { props: { movie } };
}

export default function MovieDetails({ movie }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <Heading>{movie.Title}</Heading>
      <Text>Genre: {movie.Genre}</Text>
      <Text>Duration: {movie.Duration}</Text>
      <Text>Views: {movie.Views}</Text>
      <Text>Description: {movie.Description}</Text>
    </Box>
  );
}
