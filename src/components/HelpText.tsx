import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Code,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const HelpText = () => {
  const { colorMode } = useColorMode();
  return (
    <Accordion
      alignSelf="flex-end"
      width={["100%", "60%"]}
      marginX={"auto"}
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
          <Heading flex="1" textAlign="left" size="sm">
            Some other Hacks
          </Heading>

          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel fontSize="xs">
          <Text>
            You can just edit the link in your browser address when you open
            instagram.
          </Text>
          <Text marginTop={2}>example:</Text>
          <Code wordBreak="break-word">
            https://www.<b>instagram</b>.com/p/CGp0Y42HKkm/
          </Code>
          <Text marginY={2}>
            just add <Code>dld</Code> after <Code>instagram</Code>:
          </Text>
          <Code wordBreak="break-word">
            https://www.instagram<b>dld</b>
            .com/p/CGp0Y42HKkm/
          </Code>
          <Text>then open the link.</Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default HelpText;
