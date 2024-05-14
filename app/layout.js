'use client';
import { Inter } from 'next/font/google';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SetModal from '@/Components/SetModal';
import { StoreProvider } from './Store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNavbarButtonClick = () => {
    onOpen();
  };

  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ChakraProvider>
            <Navbar handleNavbarButtonClick={handleNavbarButtonClick} />
            <SetModal isOpen={isOpen} onClose={onClose} />
            {children}
            <Footer />
          </ChakraProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
