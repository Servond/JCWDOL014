import {
  Container,
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

function App() {
  return (
    <Container w="100%" mx="auto" textAlign="center" p="0.5rem">
      <Box
        borderWidth="2px"
        border="solid"
        borderRadius="0.375rem"
        borderColor="black"
      >
        <Text fontSize="2.25rem" lineHeight="2.5rem" color="rgb(239, 68, 68)">
          Ini Chakra UI
        </Text>
        <Button variant="with-shadow">Click Me!</Button>
        <Grid>
          <GridItem></GridItem>
        </Grid>
      </Box>
      <Accordion defaultIndex={[0]}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default App;
