import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} padding={4}>
      <Button as={Link} to="/" colorScheme="teal">
        Home
      </Button>
      <Button as={Link} to="/login" colorScheme="teal">
        Login
      </Button>
      <Button as={Link} to="/register" colorScheme="teal">
        Register
      </Button>
    </HStack>
  );
};

export default Navigation;
