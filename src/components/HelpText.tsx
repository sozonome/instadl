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
      allowToggle
      padding={8}
      backgroundColor={colorMode === "light" ? "white" : "blue.800"}
      borderRadius="1.5rem"
      border="2px solid black"
      boxShadow="0px 6px 0px black"
    >
      <AccordionItem>
        <AccordionButton>
          <Heading flex="1" textAlign="left" size="sm">
            {/* Why is it so easy & efficient? */}
            Some Tips
          </Heading>

          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel fontSize="xs">
          <Text>
            If you are on laptop / desktop, <br />
          </Text>
          {/* <Heading size="md">just add three letters!</Heading> */}
          <Text marginTop={2}>example:</Text>
          <Code wordBreak="break-word">
            https://www.<b>instagram</b>.com/p/CGp0Y42HKkm/
          </Code>
          <Text marginY={2}>
            just replace <Code>www.instagram.com</Code> with{" "}
            <Code>instadld.sznm.dev</Code>:
          </Text>
          <Code wordBreak="break-word">
            https://<b>instadld.sznm.dev</b>
            /p/CGp0Y42HKkm/
          </Code>
          <Text>then hit enter.</Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default HelpText;
