import { Box, Flex } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <Box margin="0 auto" maxWidth={800}>
      <Meta />
      <Flex flexWrap="wrap" padding={8} minHeight="100vh">
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
