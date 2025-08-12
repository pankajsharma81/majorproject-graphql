import { Avatar, Box, Card, Flex, Text} from "@radix-ui/themes";

export default function ProductCard({ product }) {
  return (
    <Box maxWidth="240px">
      <Card>
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src={product?.ImageUrl}
            radius="full"
            fallback={product?.title?.charAt(0) || "U"}
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              {product.title}
            </Text>
            <Text as="div" size="2" color="gray">
              {product.description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
}
