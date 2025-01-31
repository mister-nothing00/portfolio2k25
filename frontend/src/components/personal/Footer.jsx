import { Box, Button, Flex, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import React, { memo } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  

  return (
    <>
      <Flex
        flexDirection={{base:"column-reverse",md:"row"}}
        justifyContent={{base:"center",md:"space-between"}}
        alignItems={"center"}
        padding={4}
        
        
       
      >
        <Text fontFamily={"Montserrat"} fontWeight={"normal"} fontSize={"sm"} textAlign={{base:"center", md:"inherit"}} marginTop={{base:4, md:0}}>
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
            backgroundColor={ "white" }
            variant={"outline"}
          >
            <Link
              to="https://www.linkedin.com/in/francesco-di-vita-113355183/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color={ "black"} />
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
            <Text fontSize="sm">me@gmail.com</Text>
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default memo(Footer);