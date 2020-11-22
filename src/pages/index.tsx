import { Box } from "@chakra-ui/react";
import Form from "../components/form";
import HelpText from "../components/HelpText";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <Form />

      <HelpText />
    </Box>
  );
};

export default Home;
