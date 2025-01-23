import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "../ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { useColorMode } from "../ui/color-mode";
import { IoApps } from "react-icons/io5";
import { UserData } from "../../context/User";
import { IoIosArrowDropup } from "react-icons/io";

export default function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const { logoutUser, user, isAuth } = UserData();

  const handleLogout = () => {
    logoutUser();
  };
  return (
    <>
      <Flex
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pt={8}
        px={4}
      >
        {/*heading* */}
        <Box display={"block"} width={"100%"} mx={"auto"}>
          <Link to={"/"} as={RouterLink} textDecoration={"none"}>
            <Heading
              fontFamily={"Montserrat"}
              fontSize={"20px"}
              fontWeight={"semibold"}
              letterSpacing={1}
              _hover={{ color: "#bfdbfe", transition: "color 0.4s ease-in" }}
            >
              Francesco di Vita
            </Heading>
          </Link>
        </Box>

        {/*link* */}
        <Box
          display={"flex"}
          as={"nav"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gapX={4}
          width={"100%"}
          color={"gray.400"}
        >
          <Link
            display={isMobile ? "none" : "block"}
            as={"a"}
            href={"#about"}
            fontFamily={"Montserrat"}
            fontSize={"sm"}
            fontWeight={"semibold"}
            transition={"color 0.4s ease"}
            _hover={{
              color: "#bfdbfe",
              textDecoration: "none",
              transition: "color 0.4s ease",
            }}
          >
            about
          </Link>
          <Link
            display={isMobile ? "none" : "block"}
            as={"a"}
            href={"#creations"}
            fontFamily={"Montserrat"}
            fontSize={"sm"}
            fontWeight={"semibold"}
            transition={"color 0.4s ease"}
            _hover={{
              color: "#bfdbfe",
              textDecoration: "none",
              transition: "color 0.4s ease",
            }}
          >
            creations
          </Link>

          {/*LOGIN; ADMIN; LOGOUT and links for mobile* */}
          <MenuRoot>
            <MenuTrigger asChild>
              <Button
                border="none"
                fontFamily={"Montserrat"}
                variant="outline"
                size="sm"
                style={{
                  borderRadius: "8px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  color: "#bfdbfe",
                }}
              >
                {isMobile ? <IoApps /> : "other"}
              </Button>
            </MenuTrigger>
            <MenuContent>
              {isMobile ? (
                <MenuItem asChild value="about">
                  <Link
                    as={"a"}
                    href={"#about"}
                    textDecoration={"none"}
                    fontFamily={"Montserrat"}
                    fontSize={"sm"}
                    fontWeight={"medium"}
                    color={"gray.500"}
                    _hover={{
                      color: "whiteAlpha.800",
                      rounded: "2xl",
                      transition: "rounded 0.3s ease-in",
                    }}
                  >
                    about
                  </Link>
                </MenuItem>
              ) : (
                ""
              )}
              {isMobile ? (
                <MenuItem asChild value="projects">
                  <Link
                    as={"a"}
                    href={"#creations"}
                    textDecoration={"none"}
                    fontFamily={"Montserrat"}
                    fontSize={"sm"}
                    fontWeight={"medium"}
                    color={"gray.500"}
                    _hover={{
                      color: "whiteAlpha.800",
                      rounded: "2xl",
                      transition: "rounded 0.3s ease-in",
                    }}
                  >
                    creations
                  </Link>
                </MenuItem>
              ) : (
                ""
              )}
              <MenuItem asChild value="login">
                <Link
                  as={RouterLink}
                  to={"/login"}
                  textDecoration={"none"}
                  fontFamily={"Montserrat"}
                  fontSize={"sm"}
                  fontWeight={"medium"}
                  color={"gray.500"}
                  _hover={{
                    color: "whiteAlpha.800",
                    rounded: "2xl",
                    transition: "rounded 0.3s ease-in",
                  }}
                >
                  Login
                </Link>
              </MenuItem>
              {isMobile ? (
                ""
              ) : (
                <MenuItem asChild value="admin">
                  <Link
                    as={RouterLink}
                    to={"/admin"}
                    textDecoration={"none"}
                    fontFamily={"Montserrat"}
                    fontSize={"sm"}
                    fontWeight={"medium"}
                    color={"gray.500"}
                    _hover={{
                      color: "whiteAlpha.800",
                      rounded: "2xl",
                      transition: "rounded  0.3s ease-in",
                    }}
                  >
                    {user.role === "admin" ? " Admin" : null}
                  </Link>
                </MenuItem>
              )}
              <MenuItem asChild value="logout">
                <Link
                  onClick={handleLogout}
                  textDecoration={"none"}
                  fontFamily={"Montserrat"}
                  color="red.300"
                  fontSize={"sm"}
                  fontWeight={"medium"}
                  _hover={{
                    color: "red.400",
                    rounded: "2xl",
                    transition: "rounded 0.3s ease",
                  }}
                >
                  {isAuth ? "Logout" : null}
                </Link>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </Box>

        <Box display="flex" justifyContent={"flex-end"} px={4}>
          <Link as={"a"} href={"#hero"}>
            <IconButton
              position={"fixed"}
              bottom={16}
              right={2}
              variant="ghost"
              rounded={"full"}
              size="md"
              animation="bounce 4s infinite"
              cursor="pointer"
            >
              <IoIosArrowDropup size={32} />
            </IconButton>
          </Link>
        </Box>
      </Flex>
    </>
  );
}

{
  /*toggle color mode* */
}
{
  /*
   <Box display="flex" justifyContent={"flex-end"} px={4}>
          <IconButton
            position={"fixed"}
            bottom={8}
            right={2}
            onClick={toggleColorMode}
            variant="ghost"
            rounded={"full"}
            size="xs"
          >
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </Box>* */
}
