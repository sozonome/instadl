import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const HelpText = () => {
  const { colorMode } = useColorMode();
  return (
    <Accordion
      alignSelf="flex-end"
      width="100%"
      allowToggle
      marginY={4}
      padding={8}
      backgroundColor={colorMode === "light" ? "white" : "blue.800"}
      borderRadius="1.5rem"
      border="2px solid black"
      boxShadow="0px 6px 0px black"
    >
      <AccordionItem>
        <AccordionButton>
          <Heading flex="1" textAlign="left" size="md">
            Some other Hacks
          </Heading>

          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text fontSize="xs">
            you can just replace the link when you open instagram.
            <br />
            example: https://<b>www.instagram.com</b>/p/CGp0Y42HKkm/ replace it
            into https://instagram<b>dld.com</b>/p/CGp0Y42HKkm/ then open the
            link.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default HelpText;
