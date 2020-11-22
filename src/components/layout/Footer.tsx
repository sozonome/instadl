import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";
import SupportText from "../SupportText";

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      as="footer"
      height={24}
      width="100%"
      align="center"
      alignSelf="flex-end"
    >
      <Box width="full" textAlign="center">
        <Text width="full">
          2020 -{" "}
          <Link href="https://sznm.dev" isExternal>
            sznm.dev
          </Link>
        </Text>
        <Button size="sm" onClick={onOpen}>
          Support
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader color="purple.400">Support / Donate</ModalHeader>
          <ModalCloseButton />

          <ModalBody paddingBottom={4}>
            <SupportText />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Footer;
