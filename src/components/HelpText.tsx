import { Box, Heading, Text } from "@chakra-ui/react";

const HelpText = () => {
  return (
    <Box marginY={4}>
      <Heading size="lg">Some other Hacks</Heading>
      <Text fontSize="xs">
        you can just replace the link.
        <br />
        example: https://<b>www.instagram.com</b>/p/CGp0Y42HKkm/ replace it into
        https://<b>instadl.sznm.dev</b>/p/CGp0Y42HKkm/ then open the link.
      </Text>
    </Box>
  );
};

export default HelpText;
