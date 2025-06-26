import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import type { Product } from "../types/product.type";

export default function CreatePage() {
  const { createProduct } = useProductStore();

  async function registerForm(formData: FormData) {
    const newProduct: Product = {
      name: formData.get("name") as string,
      price: parseFloat(formData.get("price") as string),
      image: formData.get("imageURL") as string,
    };
    const { success, message } = await createProduct(newProduct);
    console.log("Product:", newProduct);
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Create a New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          borderRadius="md"
          boxShadow="md"
        >
          <form action={registerForm}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Product Name</FormLabel>
                <Input placeholder="Product Name" name="name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Price</FormLabel>
                <InputGroup>
                  <InputLeftAddon
                    pointerEvents="none"
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize="1.2em"
                    bg={useColorModeValue("gray.100", "gray.600")}
                  >
                    £
                  </InputLeftAddon>
                  <Input
                    type="number"
                    min={1}
                    defaultValue={1}
                    name="price"
                    borderLeftRadius={"0"}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Image URL</FormLabel>
                <Input placeholder="Image URL" name="imageURL" />
              </FormControl>
              <Button colorScheme="blue" type="submit" width={"full"}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
}
