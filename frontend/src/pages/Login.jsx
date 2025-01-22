import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { PasswordInput } from "../components/ui/password-input";
import { InputGroup } from "../components/ui/input-group";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { useColorMode } from "../components/ui/color-mode";
import { Link } from "react-router-dom";
import { UserData } from "../context/User.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, loading } = UserData();

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUser(email, password, navigate);
  };

  return (
    <>
      <Heading
        fontFamily={"Montserrat"}
        fontSize={{ base: "4xl", md: "5xl", lg: "8xl" }}
        textAlign={{ base: "center", md: "left", lg: "left" }}
        fontWeight={"semibold"}
        color={isDark ? "whiteAlpha.800" : "blackAlpha.800"}
        mt={24}
        mb={16}
      >
        Login Form
      </Heading>
      <Flex
        justifyContent={{
          base: "center",
          md: "space-between",
          lg: "space-between",
        }}
        alignItems={"center"}
        maxWidth={"100%"}
      >
        <form onSubmit={handleSubmit}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            height={"auto"}
            maxWidth={"100%"}
            gapY={4}
            color={isDark ? "whiteAlpha.800" : "blackAlpha.800"}
            fontFamily={"Montserrat"}
            fontWeight={"medium"}
            fontSize={"sm"}
          >
            {/* Email */}
            <Text>E-mail</Text>
            <InputGroup
              flex="1"
              width={{ base: "250px", md: "350px" }}
              endElement={<FaRegEnvelope />}
            >
              <Input
                type="email"
                size={"sm"}
                variant={"outline"}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                rounded={"md"}
                width="100%"
                htmlSize={"14px"}
                aria-label="Enter your email"
                required
              />
            </InputGroup>

            {/* Password */}
            <Text>Password</Text>
            <PasswordInput
              size="sm"
              placeholder="Enter your password"
              rounded="md"
              value={password}
              width="100%"
              htmlSize={"14px"}
              required
              aria-label="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Bottone */}
            <Button
              type="submit"
              fontFamily={"Montserrat"}
              fontWeight={"medium"}
              letterSpacing={0.2}
              size="sm"
              rounded={"full"}
              colorScheme={"blue"}
              my={8}
              _hover={{
                transform: "translateX(10px)",
                boxShadow: "lg",
                transition: "all 0.4s ease",
              }}
              isLoading={loading}
              loadingText="Submitting..."
            >
              Submit
            </Button>
            <Text
              fontFamily={"Montserrat"}
              textDecoration={"underline"}
              fontSize={"sm"}
              letterSpacing={0.5}
            >
              Do not have an account?
              <Link to="/register">
                <b> Register </b>
              </Link>
            </Text>
          </Box>
        </form>
      </Flex>
    </>
  );
}
