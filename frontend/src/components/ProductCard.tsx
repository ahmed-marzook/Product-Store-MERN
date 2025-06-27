import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { Product } from "../types/product.type";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { deleteProduct } = useProductStore();

  return (
    <Box
      shadow={"lg"}
      rounded="lg"
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={useColorModeValue("white", "gray.800")}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      ></Image>
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>
        <Text
          fontWeight={"bold"}
          fontSize={"xl"}
          color={useColorModeValue("gray.600", "gray.200")}
          mb={4}
        >
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton
            icon={<EditIcon />}
            colorScheme="blue"
            aria-label={"edit"}
          />
          <IconButton
            icon={<DeleteIcon />}
            colorScheme="red"
            aria-label={"delete"}
            onClick={() => deleteProduct(product._id)}
          />
        </HStack>
      </Box>
    </Box>
  );
}
