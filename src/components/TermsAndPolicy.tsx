import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

const TermsAndPolicy = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("notFirstVisit"))) {
      onOpen();
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("notFirstVisit", JSON.stringify(true));
    onClose();
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        size={"xl"}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader color={colorMode === "light" ? "blue.700" : "pink.500"}>
            Terms and Conditions
          </ModalHeader>

          <ModalBody fontSize="sm">
            <Text marginBottom={4}>
              By using InstaDLD you agree to the following statements:
            </Text>

            <Heading size="sm" marginBottom={2}>
              Respect copyrights:
            </Heading>
            <Text marginBottom={4}>
              It is the enduser’s responsibility to credit the rightful owner of
              the content. InstaDLD is not created to violate the copyright at
              all.
            </Text>

            <Heading size="sm" marginBottom={2}>
              Don’t abuse this service:
            </Heading>
            <Text marginBottom={4}>
              The downloaded content is only for personal use and cannot be used
              for any commercial purposes, unless the owner gives you
              permission.
            </Text>

            <Text>InstaDLD can not be held responsible for any misuse.</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleClose}
              isFullWidth
              colorScheme={colorMode === "light" ? "green" : "teal"}
            >
              I agree
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TermsAndPolicy;
