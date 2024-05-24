import { Container, VStack, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Register = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Register
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <Button colorScheme="teal" width="100%">
          Register
        </Button>
      </VStack>
    </Container>
  );
};

export default Register;
