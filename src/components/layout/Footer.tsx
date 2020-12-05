import {
  Box,
  Button,
  Flex,
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
      <Box
        display={["block", "flex"]}
        width="full"
        alignItems="center"
        textAlign={["center", "inherit"]}
      >
        <Text width={["full", "auto"]}>
          2020 -{" "}
          <Link href="https://sznm.dev" isExternal fontWeight="bold">
            sznm.dev
          </Link>
        </Text>
        <Button size="sm" onClick={onOpen} marginLeft={["inherit", "auto"]}>
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
