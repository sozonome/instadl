import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

import HelpText from "../components/HelpText";

const Home = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Box
        padding={8}
        marginBottom={8}
        backgroundColor={colorMode === "light" ? "white" : "blue.800"}
        borderRadius="1.5rem"
        border="2px solid black"
        boxShadow="0px 6px 0px black"
      >
        <Heading color={colorMode === "light" ? "blue.700" : "orange.500"}>
          Your Instagram Post Downloader
        </Heading>
        <Text>
          The easiest and most efficient Instagram post downloader you can find.
        </Text>
      </Box>

      <HelpText />
    </Box>
  );
};

export default Home;
