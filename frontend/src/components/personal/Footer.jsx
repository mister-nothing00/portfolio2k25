import { Box, Button, Flex, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useColorMode } from "../ui/color-mode";

export default function Footer() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Flex
        flexDirection={{sm:"column-reverse",md:"row"}}
        justifyContent={{sm:"center",md:"space-between"}}
        alignItems={"center"}
        padding={4}
        
       
      >
        <Text fontFamily={"Montserrat"} fontWeight={"normal"} fontSize={"sm"} textAlign={{sm:"center", md:"inherit"}} marginTop={{sm:4, md:0}}>
          Made with ❤️ by Francesco.
        </Text>
        <Box
          display={"flex"}
          justifyContent={"end"}
          alignItems={"center"}
          gapX={4}
          
        >
          {/* LinkedIn Button */}
          <Button
            rounded={"full"}
            backgroundColor={isDark ? "white" : "black"}
            variant={"outline"}
          >
            <Link
              to="https://www.linkedin.com/in/francesco-di-vita-113355183/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color={isDark ? "black" : "white"} />
            </Link>
          </Button>

          {/* Email Button */}
          <Button
            as="a"
            href="mailto:francescodavidedivita@gmail.com"
            rounded="full"
            variant={"outline"}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <FaEnvelope />
            <Text fontSize="sm">francescodavidedivita@gmail.com</Text>
          </Button>
        </Box>
      </Flex>
    </>
  );
}
