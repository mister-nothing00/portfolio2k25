import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { IoChevronDownCircle } from "react-icons/io5";

// Images-Certificate
import frontEnd from "../../assets/master-frontend.jpg";
import fullStack from "../../assets/master-fullstack.jpg";
import reactNative from "../../assets/react-native.png";

const certificates = [
  {
    name: "Front-End Master",
    thumbnail: frontEnd,
  },
  {
    name: "Full-Stack Master",
    thumbnail: fullStack,
  },
  {
    name: "React Native Course",
    thumbnail: reactNative,
  },
];

export default function About() {
  return (
    <>
      <Flex
        id="about"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        minWidth={"100%"}
        px={4}
        my={150}
      >
        {/* Presentazione */}
        <Text
          fontFamily={"Montserrat"}
          fontSize={{ sm: "xl", md: "4xl" }}
          lineHeight={{ sm: "40px", md: "64px" }}
          letterSpacing={1}
          fontWeight={"medium"}
          width={"100%"}
          textAlign={{ sm: "left", md: "left" }}
          mx={"auto"}
        >
          I'm Francesco Di Vita, an entry-level developer passionate about
          technology and innovation. Specializing in full-stack development with
          MERN technologies, React Native, and WordPress. I love turning ideas
          into digital concrete solutions. I'm excited to grow professionally
          and collaborate with a dynamic team to create extraordinary
          experiences. Let's create something unique together!
        </Text>

        {/* Certificati */}
        <Flex
          mt={10}
          gap={6}
          wrap="wrap"
          justifyContent={{ base: "center", md: "space-around" }}
          alignItems="center"
        >
          {certificates.map((certificate, index) => (
            <Box
              key={index}
              display={"flex"}
              flexDirection={"column-reverse"}
              alignItems="center"
            >
              <Image
                src={certificate.thumbnail}
                alt={`Certificate of ${certificate.name}`}
                width="240px"
                borderRadius="md"
                boxShadow="md"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.4s ease-in-out",
                }}
              />
              <Text
                mt={4}
                fontFamily="Montserrat"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing={1}
                mb={2}
              >
                {certificate.name}
              </Text>
            </Box>
          ))}
        </Flex>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={75}
          animation="bounce 2s infinite"
        >
          <IoChevronDownCircle size={28} />
        </Box>
      </Flex>

      {/* Scroll down */}
    </>
  );
}
