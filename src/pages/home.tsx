import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import HelpText from "../components/HelpText";

const Home = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Head>
        <title>Instagram Downloader</title>
      </Head>
      <Box
        padding={8}
        marginBottom={8}
        backgroundColor={colorMode === "light" ? "white" : "blue.800"}
        borderRadius="1.5rem"
        border="2px solid black"
        boxShadow="0px 6px 0px black"
      >
        <Heading
          color={colorMode === "light" ? "blue.700" : "orange.500"}
          marginBottom={4}
        >
          Your Instagram Post Downloader
        </Heading>
        <Text marginBottom={2}>
          The easiest and most efficient Instagram post downloader you can find.
          Also support multipost download!
        </Text>
        <Text>No ads, spam, and trackers!</Text>
      </Box>
      <HelpText />
    </Box>
  );
};

export default Home;
