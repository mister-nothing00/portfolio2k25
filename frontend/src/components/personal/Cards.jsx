import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import { useProjects } from "../../context/Projects";
import { useColorMode } from "../ui/color-mode";
import { Link as RouterLink } from "react-router-dom";

import { FaLink, FaGithub } from "react-icons/fa";
import { IoChevronDownCircle } from "react-icons/io5";

// Helper function to truncate description
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default function Cards() {
  const { projects, fetchProjects } = useProjects();
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const isMobile = useBreakpointValue({ sm: true, md: false });

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <Flex id="creations" flexDirection={"column"} fontFamily={"Montserrat"} my={150}>
      <Box display={"flex"} alignItems={"center"} mb={4}>
        <BsStars size={isMobile ? 18 : 24} color="gray.100" />
        <Heading
          fontFamily={"Montserrat"}
          letterSpacing={0.5}
          fontSize={{ base: "4xl", md: "6xl" }}
          ml={2}
          color={isDark ? "#91c0f2" : "blue.600"}
        >
          Creation
        </Heading>
      </Box>
      <Text
        display={"flex"}
        justifyContent={"end"}
        animation={"linear"}
        fontFamily={"Montserrat"}
        letterSpacing={0.5}
        fontSize={"xs"}
        color={"gray.50"}
      >
        Drop left or right
      </Text>
      <Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <SwiperSlide key={project._id}>
                <Box
                  
                  boxShadow={"  rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}
                  overflow="auto"
                  p={4}
                  mb={16}
                  bg="transparent"
                  width={"98%"}
                  mx={"auto"}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width="auto"
                    borderRadius="md"
                    objectFit={"cover"}
                  />
                  <Text fontSize="lg" fontWeight="bold" mt={2}>
                    {project.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600" mt={1} mb={4}>
                    {truncateText(project.description, 68)}
                  </Text>
                  <Box display={"flex"}>
                    <Link
                      as={RouterLink}
                      to={project.webLink}
                      target="_blank"
                      color={"blue.400"}
                      textDecoration={"none"}
                      fontFamily={"Montserrat"}
                      mb={2}
                    >
                      <FaLink />
                      <Text
                        fontSize="sm"
                        display={"flex"}
                        alignItems={"center"}
                        color={"gray.400"}
                        _hover={{ color: "white", transition: "all 0.3s ease" }}
                      >
                        Web
                      </Text>
                    </Link>
                  </Box>
                  <Link
                    as={RouterLink}
                    to={project.githubLink}
                    target="_blank"
                    color={"blue.400"}
                    textDecoration={"none"}
                    fontFamily={"Montserrat"}
                  >
                    <FaGithub />
                    <Text
                      fontSize="sm"
                      display={"flex"}
                      alignItems={"center"}
                      color={"gray.400"}
                      _hover={{ color: "white", transition: "all 0.3s ease" }}
                    >
                      GitHub
                    </Text>
                  </Link>
                </Box>
              </SwiperSlide>
            ))
          ) : (
            <Text>No projects available</Text>
          )}
        </Swiper>
      </Box>
        {/*Scroll down* */}
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              mb={4}
              animation="bounce 2s infinite"
       
            >
              <IoChevronDownCircle size={32} />
            </Box>
    </Flex>
  );
}
