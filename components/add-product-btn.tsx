import { Product } from "@/generated/prisma";
import { ADD_PRODUCT } from "@/lib/gql/mutation";
import gqlClient from "@/lib/services/gql";
import {
  Button,
  Dialog,
  Flex,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import React, { useState } from "react";

export default function AddProductButton() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleAddProduct() {
  
    try {
      const data: { addProducts: Product } = await gqlClient.request(
        ADD_PRODUCT,
        {
          title,
          description,
          category,
          price,
          stock,
          imageUrl,
        }
      );

      if (data.addProducts) {
        alert("product-created");
        // setName("");
        // setPasword("");
        // setEmail("");
        // setUserName("");
        // setRole("staff");
      } else {
        alert("product creation failed");
      }
    } catch (error) {
      alert("unable to add user Error")
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Add Product</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add Product</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Add a new Product in your Store
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Title
            </Text>
            <TextField.Root
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextField.Root
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your Description"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Price
            </Text>
            <TextField.Root
              value={price}
              onChange={(e) => setPrice(Number.parseFloat(e.target.value))}
              placeholder="Enter your Price"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Stock
            </Text>
            <TextField.Root
              value={stock}
              onChange={(e) => setStock(Number.parseInt(e.target.value))}
              placeholder="Enter your Stock"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              ImageUrl
            </Text>
            <TextField.Root
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter your ImageUrl"
            />
          </label>

          <Select.Root
            value={category}
            onValueChange={(value) => setCategory(value)}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Group>
                <Select.Label>Category</Select.Label>
                <Select.Item value="food">Food</Select.Item>
                <Select.Item value="beauty">Beauty</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>

            <Button onClick={handleAddProduct}>Save</Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
