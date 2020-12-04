import { Box, Flex, useColorMode } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";
import TermsAndPolicy from "../TermsAndPolicy";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.900"}
      transition="0.4s ease-out"
    >
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

      <TermsAndPolicy />
    </Box>
  );
};

export default Layout;
