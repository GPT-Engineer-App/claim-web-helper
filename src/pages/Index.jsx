import { Container, Text, VStack, Heading, Button, Input, FormControl, FormLabel, IconButton, HStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Claim Your Website
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Enter your details below to claim your website and get started.
        </Text>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl id="website" isRequired>
          <FormLabel>Website</FormLabel>
          <Input placeholder="Enter your website URL" />
        </FormControl>
        <HStack spacing={4} width="100%">
          <Button colorScheme="teal" width="100%">
            Submit
          </Button>
          <IconButton aria-label="Send" icon={<FaPaperPlane />} colorScheme="teal" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
