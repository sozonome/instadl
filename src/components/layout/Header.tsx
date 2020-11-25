import { Flex, Heading, Box, Icon, useColorMode } from "@chakra-ui/react";
import { BiCloudDownload } from "react-icons/bi";

import AccessibleLink from "../AccessibleLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex as="header" height={10} width="full" align="center">
      <AccessibleLink href="/">
        <Heading
          as="h2"
          fontSize={["md", "2xl"]}
          alignItems="center"
          color={colorMode === "light" ? "blue.700" : "pink.500"}
        >
          InstaDLD
          <Icon as={BiCloudDownload} />
        </Heading>
      </AccessibleLink>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
