import {
  Flex,
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Link } from "@chakra-ui/next-js";
import { User } from "../../types/user";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [user] = useLocalStorage<User>("user", {});

  const pathname = usePathname();

  return (
      <Flex as="nav" justify="flex-end">
        {/* check if user is signed in and page is not 'editing page'. Is fo - show user info and add the link to edit data */}
        {user.name && pathname !== "/" && (
            <Popover>
              <PopoverTrigger>
                <Flex
                    cursor="pointer"
                    bgColor="#fff"
                    width={8}
                    height={8}
                    rounded={100}
                    alignItems="center"
                    justifyContent="center"
                >
                  <Image
                      src="/icons/user.svg"
                      alt="500 Server Error"
                      width={16}
                      height={16}
                  />
                </Flex>
              </PopoverTrigger>
              <PopoverContent
                  border="1px solid #e9e9e9"
                  rounded="xl"
                  shadow="xl"
                  boxShadow="none !important"
                  width="fit-content"
                  mr="12px"
              >
                <Flex direction="column" rounded="xl" shadow="xl" padding={4}>
                  <PopoverHeader>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        bgColor="#c2175b"
                        color="white"
                        width={16}
                        height={16}
                        rounded={100}
                        mx="auto"
                    >
                      <Text fontSize="3xl">
                        {(user.name as string)[0].toLocaleUpperCase()}
                      </Text>
                    </Flex>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column">
                      <Text fontWeight={700} mt="12px">Hi, {user.name}</Text>
                      <Text fontSize="xs">{user.jobTitle}</Text>
                    </Flex>
                  </PopoverHeader>
                  <PopoverBody mx="auto">
                    <Link href="/">Change information</Link>
                  </PopoverBody>
                </Flex>
              </PopoverContent>
            </Popover>
        )}
      </Flex>
  );
}
