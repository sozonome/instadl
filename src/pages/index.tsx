import { Box, Flex } from "@chakra-ui/react";
import Form from "../components/form";
import HelpText from "../components/HelpText";

const Home = () => {
  return (
    <Flex flexWrap="wrap" mb={8} height="100%" width="100%">
      <Form />

      <HelpText />
    </Flex>
  );
};

export default Home;
