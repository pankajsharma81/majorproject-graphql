import {
  Button,
  Dialog,
  Flex,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import React, { useState } from "react";

export default function AddUserButton() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [role, setRole] = useState("staff");

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Add Member</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add Member</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Add a new member in your Store
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Username
            </Text>
            <TextField.Root
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your Username"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Password
            </Text>
            <TextField.Root
              value={password}
              onChange={(e) => setPasword(e.target.value)}
              placeholder="Enter your Password"
            />
          </label>

          <Select.Root value={role} onValueChange={(value)=>setRole(value)}>
            <Select.Trigger />
            <Select.Content>
              <Select.Group>
                <Select.Label>Role</Select.Label>
                <Select.Item value="staff">Staff</Select.Item>
                <Select.Item value="manager">Manager</Select.Item>
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
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
