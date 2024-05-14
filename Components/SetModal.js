import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function SetModal({ isOpen, onClose }) {
  const router = useRouter();

  const handleTheatreClick = () => {
    router.push('/theatre');
  };

  const handleTimeslotClick = () => {
    router.push('/timeslot');
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Something?</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button
              bgColor="#FED530"
              color="#333333"
              mr={3}
              onClick={() => {
                handleTheatreClick();
                onClose();
              }}
            >
              Theatre
            </Button>
            <Button
              bgColor="#333333"
              color="#FED530"
              onClose={onClose}
              onClick={() => {
                handleTimeslotClick(), onClose();
              }}
            >
              Timeslot
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
