import { Container, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>
        <Text
          fontSize={"xl"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"gray.500"}
        >
          No Products found 😔
          <Link to={"/create"}>
            <Text
              as="span"
              color={"blue.500"}
              _hover={{ textDecoration: "underline" }}
            >
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
}
