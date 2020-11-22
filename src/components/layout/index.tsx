import { Box, Flex, useColorMode } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box backgroundColor={colorMode === "light" ? "orange.50" : "gray.900"}>
      <Meta />
      <Flex
        margin="0 auto"
        maxWidth={800}
        flexWrap="wrap"
        padding={8}
        minHeight="100vh"
      >
        <Header />
        <Box as="main" width="100%" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
