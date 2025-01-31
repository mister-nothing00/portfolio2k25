import React, { memo } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

import {
  FaCode,
  FaVectorSquare,
  FaMobile,
  FaWordpressSimple,
  FaGithub,
} from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";

 function MoreInfo() {
  return (
    <>
      <Grid
        fontFamily={"Montserrat"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gapX={6}
        gapY={8}
        my={150}
        px={{base:2, md:4}}
      >
        {/* Titolo */}
        <GridItem colSpan={{ base: 1, md: 3 }} textAlign="center">
          <Text fontSize={"4xl"} mb={4}>
            Need more info?
          </Text>
          <Text color={"#7C9FFE"} fontSize={"lg"}>
            Here are some of my skills.
          </Text>
        </GridItem>

        {/* Certificati */}
        <GridItem>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"gray.900"}
            padding={8}
            rounded={"md"}
            textAlign="center"
            _hover={{
              boxShadow: "  rgb(38, 57, 77) 0px 20px 30px -10px",
              transform: "translateY(-8px)",
              transition: "all 0.2s ease",
            }}
          >
            <FaCode color="#647bbc" size={22} />
            <Text fontSize={"2xl"} mt={4}>
              MERN Stack
            </Text>
            <Text fontSize={"sm"} color={"gray.400"} mt={2}>
              Developing full-stack web applications with MongoDB, Express.js,
              React, and Node.js for robust and scalable solutions.
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"gray.900"}
            padding={8}
            rounded={"md"}
            textAlign="center"
            _hover={{
              boxShadow: "  rgb(38, 57, 77) 0px 20px 30px -10px",
              transform: "translateY(-8px)",
              transition: "all 0.2s ease",
            }}
          >
            <FaMobile color="#647bbc" size={22} />
            <Text fontSize={"xl"} mt={4}>
              React Native
            </Text>
            <Text fontSize={"sm"} color={"gray.400"} mt={2}>
              Creating cross-platform mobile applications with React Native to
              deliver seamless user experiences on iOS and Android.
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"gray.900"}
            padding={8}
            rounded={"md"}
            textAlign="center"
            _hover={{
              boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
              transform: "translateY(-8px)",
              transition: "all 0.2s ease",
            }}
          >
            <MdOutlineMonitor color="#647bbc" size={22} />
            <Text fontSize={"2xl"} mt={4}>
              Responsive Design
            </Text>
            <Text fontSize={"sm"} color={"gray.400"} mt={2}>
              Ensuring websites adapt beautifully to all devices and screen
              sizes, delivering optimal performance everywhere.
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"gray.900"}
            padding={8}
            rounded={"md"}
            textAlign="center"
            _hover={{
              boxShadow: "  rgb(38, 57, 77) 0px 20px 30px -10px",
              transform: "translateY(-8px)",
              transition: "all 0.2s ease",
            }}
          >
            <FaVectorSquare color="#647bbc" size={22} />
            <Text fontSize={"xl"} mt={4}>
              UX Design
            </Text>
            <Text fontSize={"sm"} color={"gray.400"} mt={2}>
              Designing intuitive and user-focused interfaces to create
              meaningful and engaging digital experiences.
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"gray.900"}
            padding={8}
            rounded={"md"}
            textAlign="center"
            _hover={{
              boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
              transform: "translateY(-8px)",
              transition: "all 0.2s ease",
            }}
          >
            <FaWordpressSimple color="#647bbc" size={22} />
            <Text fontSize={"2xl"} mt={4}>
              WordPress
            </Text>
            <Text fontSize={"sm"} color={"gray.400"} mt={2}>
              Building dynamic, customizable, and SEO-friendly websites with
              WordPress to meet diverse business needs.
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            backgroundColor={"gray.900"}
            padding={8}
            rounded={"md"}
            textAlign="center"
            _hover={{
              boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
              transform: "translateY(-8px)",
              transition: "all 0.2s ease",
            }}
          >
            <FaGithub color="#647bbc" size={22} />
            <Text fontSize={"xl"} mt={4}>
              GitHub
            </Text>
            <Text fontSize={"sm"} color={"gray.400"} mt={2}>
              Streamlining version control with Git, ensuring efficient and
              organized development workflows.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default memo(MoreInfo);