"use client"
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { UserContext } from "./contexts/user-context";
import Image from "next/image";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="container mx-auto flex justify-between items-center pt-3" >
      <div>
        <Image src="/logoipsum-361.svg" alt="logo" height={50} width={50} />
      </div>
      <div>

      <Box maxWidth="240px">
        <Card>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src={user?.avatar || ""}
              radius="full"
              fallback={user?.name.charAt(0) || 'U'}
            />
            <Box>
              <Text as="div" size="2" weight="bold">
                {user?.name}
              </Text>
              <Text as="div" size="2" color="gray">
                {user?.role}
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
              </div>
    </header>
  );
}
