import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";

const SupportText = () => {
  return (
    <>
      <Heading size="md" marginBottom={2}>
        Hi! Thank you for visiting / using this service.
      </Heading>
      <Text marginY={2}>
        I'm Agustinus Nathaniel a.k.a. sozonome. A digital crafter based in
        Indonesia.
      </Text>
      <Text fontSize="sm">
        I personally invest my time and money to develop and run this service.
        This project is free of charge. You can donate if you want to support me
        for maintaining this service and the other services I develop and
        provide.
      </Text>

      <Flex marginY={2} flexWrap="wrap">
        <Link href={"https://buymeacoff.ee/sozonome"} isExternal marginY={1}>
          <Button colorScheme="yellow" size="sm">
            BuyMeACoffee
          </Button>
        </Link>

        <Link href={"https://ko-fi.com/sozonome"} marginY={1} isExternal>
          <Button colorScheme="orange" size="sm">
            Ko-Fi
          </Button>
        </Link>

        <Link href={"https://saweria.co/sozonome"} marginY={1} isExternal>
          <Button size="sm">saweria</Button>
        </Link>

        <Link
          href={"http://paypal.me/agustinusnathaniel"}
          marginY={1}
          isExternal
        >
          <Button colorScheme="blue" size="sm">
            PayPal
          </Button>
        </Link>
      </Flex>

      <Box>
        <Text>Have some feedbacks or want to report problems?</Text>
        <Link href="mailto:hello@sznm.dev?cc=agustinusnathaniel228@gmail.com&subject=InstagramDLD Feedback">
          <Button leftIcon={<BiMailSend />}>Mail Me</Button>
        </Link>
      </Box>

      <Text fontSize="sm" marginY={2}>
        Visit my other Projects here:{" "}
        <Link href="https://sznm.dev" isExternal>
          sznm.dev
        </Link>
      </Text>
    </>
  );
};

export default SupportText;
