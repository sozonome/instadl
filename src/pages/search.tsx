import { Flex } from "@chakra-ui/react";

import SearchForm from "../components/form/search";

const Home = () => {
  return (
    <Flex flexWrap="wrap" mb={8} height="100%" width="100%">
      <SearchForm />
    </Flex>
  );
};

export default Home;
