import { memo } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { MdOutlineTouchApp } from "react-icons/md";
import { IoChevronDownCircle } from "react-icons/io5";
import DarkContainer from "../../assets/containerBlack.svg";

function Hero() {
  return (
    <>
      <Flex
        id="hero"
        width={"100%"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center", md: "center" }}
        height={{ base: "auto", md: "100vh" }}
        py={{ base: 10, md: 0 }}
        px={4}
        gap={{ base: 6, md: 2 }}
      >
        {/* Presentation */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems={{ base: "center", md: "flex-start" }}
          width={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          {/* Technologies stack */}
          <Box
            display={"flex"}
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={"center"}
            gapX={3}
            flexWrap="wrap" 
            fontFamily={"Montserrat"}
            mb={{ base: 6, md: 12 }}
          >
            {["MERN Stack", "React Native", "WordPress"].map((tech) => (
              <Button
                key={tech}
                letterSpacing={0.5}
                fontWeight={"semibold"}
                size={{ base: "sm", md: "xs" }}
                marginBottom={{ base: 2, md: 0 }}
                rounded={"full"}
                variant={"outline"}
                border={"0.5px solid #eaeaea"}
                width={{ base: "100%", md: "auto" }} // Ensures it stays on the same row on larger screens
                _hover={{
                  fontWeight: "bold",
                  backgroundColor: "#a3cfff",
                  color: "blackAlpha.900",
                  border: "none",
                  transform: "translateY(-2px)",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  transition: "all 0.2s ease-in",
                }}
              >
                {tech}
              </Button>
            ))}
          </Box>

          <Heading
            fontFamily={"Montserrat"}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight={"semibold"}
            color={"gray.400"}
          >
            Hello, I'm
          </Heading>
          <Text
            letterSpacing={0.5}
            fontFamily={"Montserrat"}
            fontSize={{ base: "5xl", md: "8xl" }}
            fontWeight={"bold"}
            color={"white"}
            mb={2}
          >
            Francesco
          </Text>
          <Text fontFamily={"Montserrat"} fontSize={{ base: "sm", md: "md" }}>
            An entry-level full-stack developer specializing in React Native,
            WordPress, and the MERN stack, passionate about building intuitive
            and impactful digital solutions.
          </Text>

          {/* Buttons */}
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            alignItems={"center"}
            gap={4}
            my={6}
          >
            <Button
              display={"flex"}
              alignItems={"center"}
              variant={"solid"}
              fontFamily={"Montserrat"}
              fontSize={"md"}
              backgroundColor={"#eaeaea"}
              color={"black"}
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

        {/* Technologies */}
        <Box display={"block"} width={{ base: "250px", md: "400px" }}>
          <Image
            src={DarkContainer}
            objectFit={"cover"}
            rounded={"xl"}
            border={"1.5px solid #bfdbfe"}
          />
        </Box>
      </Flex>

      {/* Scroll down */}
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

export default memo(Hero);
