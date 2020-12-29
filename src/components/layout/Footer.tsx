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
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";

import SupportText from "../SupportText";

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <Flex
      as="footer"
      height={28}
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
        <Box>
          <Link
            href="https://www.producthunt.com/posts/instadld?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-instadld"
            isExternal
          >
            <Image
              src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=279185&theme=${colorMode}`}
              alt="InstaDLD - Download instagram post. Support multipost download! | Product Hunt"
              width="250"
              height="54"
            />
          </Link>
          <Text width={["full", "auto"]}>
            2020 -{" "}
            <Link href="https://sznm.dev" isExternal fontWeight="bold">
              sznm.dev
            </Link>
          </Text>
        </Box>
        <Button
          marginY={[4, 0]}
          size="sm"
          onClick={onOpen}
          marginLeft={["inherit", "auto"]}
        >
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
