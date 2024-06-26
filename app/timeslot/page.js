'use client';

import React, { useState } from 'react';

import {
  Box,
  Heading,
  Container,
  Stack,
  Flex,
  Center,
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  Hide,
} from '@chakra-ui/react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import TimeSlotSearchResult from '@/Components/TimeSlotSearchResult';

export default function Timeslot() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <Box bgGradient="linear(to-r, #333333, #000000)">
        <Container
          maxW={{ base: '90vw', sm: '80vw', md: '70vw', lg: '100%', xl: '90%' }}
          height={{ base: 'auto', md: '500px', lg: '90vh', xl: '90vh' }}
        >
          <Center h="100%">
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'center' }}
              justify="center"
            >
              <Hide below="sm">
                <Box
                  mr={{ base: 0, md: '40px', lg: '100px', xl: '150px' }}
                  mb={{ base: '20px', lg: 0 }}
                >
                  {' '}
                  <svg
                    width="274"
                    height="274"
                    viewBox="0 0 274 274"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="137" cy="137" r="60.8889" fill="#FED530" />
                    <path
                      d="M125.583 155.778V118.221L153.744 137L125.583 155.778ZM129.389 125.334V148.666L146.894 137L129.389 125.334Z"
                      fill="black"
                    />
                    <path
                      d="M274 137C274 212.663 212.663 274 137 274C61.337 274 0 212.663 0 137C0 61.337 61.337 0 137 0C212.663 0 274 61.337 274 137ZM2.73999 137C2.73999 211.15 62.8502 271.26 137 271.26C211.15 271.26 271.26 211.15 271.26 137C271.26 62.8502 211.15 2.73999 137 2.73999C62.8502 2.73999 2.73999 62.8502 2.73999 137Z"
                      fill="#808080"
                    />
                    <path
                      d="M271.26 137C272.773 137 274.003 138.227 273.973 139.74C273.472 164.783 266.113 189.23 252.673 210.408C238.743 232.359 218.855 249.892 195.332 260.961C171.809 272.03 145.622 276.178 119.829 272.92C94.037 269.661 69.7042 259.132 49.6729 242.56C29.6416 225.989 14.7389 204.06 6.70526 179.335C-1.32835 154.61 -2.16116 128.11 4.30411 102.929C10.7694 77.7489 24.2658 54.9277 43.217 37.1313C61.502 19.9606 84.1365 8.15159 108.642 2.96698C110.123 2.65376 111.559 3.63166 111.842 5.11811C112.126 6.60457 111.15 8.03658 109.669 8.35104C86.185 13.34 64.4952 24.6672 46.9684 41.126C28.7752 58.2106 15.8186 80.119 9.61194 104.292C3.40528 128.466 4.20478 153.906 11.917 177.642C19.6293 201.378 33.936 222.429 53.166 238.338C72.396 254.246 95.7555 264.355 120.516 267.483C145.277 270.611 170.416 266.629 192.998 256.003C215.581 245.376 234.673 228.544 248.046 207.472C260.929 187.171 267.991 163.743 268.491 139.74C268.523 138.227 269.747 137 271.26 137Z"
                      fill="#FED530"
                    />
                  </svg>
                </Box>
              </Hide>

              <Stack
                as={Box}
                textAlign={{ base: 'center', md: 'left' }}
                align={{ base: 'center', md: 'flex-start' }}
                justify="center"
                width={{ md: '340px', lg: '400px', xl: '700px' }}
                mt={{ base: 8, md: '-25px', lg: '-20px' }}
              >
                <Heading
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', xl: '6xl' }}
                  color="white"
                  mb={{ xl: '5px' }}
                  padding={0}
                >
                  Search your movies here!
                </Heading>

                <InputGroup mb={{ xl: '10px' }}>
                  <InputLeftElement
                    pointerEvents="none"
                    ps={4}
                    mt="4px"
                    ml="5px"
                    w="fit-content"
                  >
                    <FaMagnifyingGlass size={20} />
                  </InputLeftElement>
                  <Input
                    placeholder="Theatre name..."
                    borderRadius="full"
                    bg="white"
                    size="lg"
                    ps={14}
                  />
                </InputGroup>
                <Flex direction={{ base: 'column', md: 'row' }}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          ps={4}
                          mt="4px"
                          ml="5px"
                          w="fit-content"
                        >
                          <SlCalender size={20} />
                        </InputLeftElement>
                        <Input
                          borderRadius="full"
                          bg="white"
                          size="lg"
                          ps={14}
                          mr={{ md: 4 }}
                          mb={{ base: 2, md: 0 }}
                          w={{ base: '100%', xl: '342px' }}
                          value={
                            startDate ? startDate.toLocaleDateString() : ''
                          }
                          onChange={() => {}}
                        />
                      </InputGroup>
                    }
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    customInput={
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          ps={4}
                          mt="4px"
                          ml="5px"
                        >
                          <SlCalender size={20} />
                        </InputLeftElement>
                        <Input
                          borderRadius="full"
                          bg="white"
                          size="lg"
                          ps={14}
                          w={{ base: '100%', xl: '342px' }}
                          value={endDate ? endDate.toLocaleDateString() : ''}
                          onChange={() => {}}
                        />
                      </InputGroup>
                    }
                  />
                </Flex>

                <Stack mt="5px">
                  <Button
                    borderRadius="full"
                    mb={{ base: 16, md: 0 }}
                    w="150px"
                    h="45px"
                    bg="#FED530"
                  >
                    Search
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </Center>
        </Container>
      </Box>
      <TimeSlotSearchResult />
    </div>
  );
}
