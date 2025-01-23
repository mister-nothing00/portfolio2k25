import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { MdOutlineTouchApp } from "react-icons/md";
import { IoChevronDownCircle } from "react-icons/io5";

import DarkContainer from "../../assets/containerBlack.svg";
import WhiteContainer from "../../assets/containerWhite.svg";

export default function Hero() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Flex
        id="hero"
        minWidth={"100%"}
        flexDirection={{ sm: "column-reverse", md: "row" }}
        justifyContent={{ sm: "center", md: "space-between" }}
        alignItems={{ sm: "center", md: "space-between" }}
        minHeight={"100vh"}
        my={{ sm: "50px", md: "0px" }}
        gap={{ sm: 4, md: 2 }}
      >
        {/*Presentation* */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={{ sm: "center", md: "space-between" }}
          alignItems={{ sm: "center", md: "flex-start" }}
          width={"100%"}
        >
          {/*Tecnologies stack * */}
          <Box
            display={"flex"}
            maxWidth={"100%"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            mt={{ sm: 8, md: 0 }}
            mb={{ sm: 16, md: 16 }}
            gapX={4}
            fontFamily={"Montserrat"}
          >
            <Button
              letterSpacing={0.5}
              fontWeight={"semibold"}
              size={"xs"}
              rounded={"full"}
              variant={"outline"}
              border={isDark ? "0.5px solid #eaeaea" : "0.5px solid #000"}
              _hover={{
                fontWeight: "bold",
                backgroundColor: "#a3cfff",
                color: "blackAlpha.900",
                border: "none",
                transform: "translateY(-2px)",
                boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                transition: "all 0.2s ease-in",
              }}
            >
              MERN Stack
            </Button>
            <Button
              letterSpacing={0.5}
              fontWeight={"semibold"}
              size={"xs"}
              rounded={"full"}
              variant={"outline"}
              border={isDark ? "0.5px solid #eaeaea" : "0.5px solid #000"}
              _hover={{
                fontWeight: "bold",
                backgroundColor: "#a3cfff",
                color: "blackAlpha.900",
                border: "none",
                transform: "translateY(-2px)",
                boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                transition: "all 0.2s ease-in",
              }}
            >
              React Native
            </Button>
            <Button
              letterSpacing={0.5}
              fontWeight={"semibold"}
              size={"xs"}
              rounded={"full"}
              variant={"outline"}
              border={isDark ? "0.5px solid #eaeaea" : "0.5px solid #000"}
              _hover={{
                fontWeight: "bold",
                backgroundColor: "#a3cfff",
                color: "blackAlpha.900",
                border: "none",
                transform: "translateY(-2px)",
                boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                transition: "all 0.2s ease-in",
              }}
            >
              Wordpress
            </Button>
          </Box>

          <Heading
            fontFamily={"Montserrat"}
            fontSize={{ sm: "3xl", md: "4xl" }}
            fontWeight={"semibold"}
            color={isDark ? "gray.400" : "blackAlpha.700"}
          >
            Hello, I'm
          </Heading>
          <Text
            letterSpacing={0.5}
            fontFamily={"Montserrat"}
            fontSize={{ sm: "6xl", md: "8xl" }}
            fontWeight={"bold"}
            color={isDark ? "white" : "black"}
            mb={2}
          >
            Francesco
          </Text>
          <Text
            fontFamily={"Montserrat"}
            textAlign={{ sm: "center", md: "left" }}
            fontSize={"md"}
          >
            An entry-level full-stack developer specializing in React Native,
            WordPress, and the MERN stack, passionate about building intuitive
            and impactful digital solutions.
          </Text>

          {/*Buttons* */}
          <Flex
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
            my={8}
          >
            <Button
              display={"flex"}
              alignItems={"center"}
              variant={"solid"}
              fontFamily={"Montserrat"}
              fontSize={"md"}
              backgroundColor={isDark ? "#eaeaea" : "blue.600"}
              color={isDark ? "black" : "white"}
              rounded={"4xl"}
            >
              Get in Touch <MdOutlineTouchApp />
            </Button>
            <Button
              fontFamily={"Montserrat"}
              fontSize={"md"}
              variant={"outline"}
              rounded={"4xl"}
            >
              Learn more
            </Button>
          </Flex>
        </Box>

        {/*Tecnologies* */}
        <Box display={"block"} width={{ sm: "400px", md: "1200px" }}>
          {isDark ? (
            <Image
              src={DarkContainer}
              objectFit={"cover"}
              rounded={"2xl"}
              border={"0.4px solid #bfdbfe"}
            />
          ) : (
            <Image
              src={WhiteContainer}
              objectFit={"cover"}
              border={"0.5px solid black"}
              rounded={"2xl"}
            />
          )}
        </Box>
      </Flex>

      {/*Scroll down* */}
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        mb={4}
        animation="bounce 2s infinite"
      >
        <IoChevronDownCircle size={22} />
      </Box>
    </>
  );
}

{
  /***/
}
