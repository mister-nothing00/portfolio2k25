import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Text,
  Image,
  Box,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useColorMode } from "../components/ui/color-mode";
import { useProjects } from "../context/Projects";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaLink, FaGithub } from "react-icons/fa";

export default function Admin() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const { projects, loading, addProject, deleteProject, fetchProjects, error } =
    useProjects();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [webLink, setWebLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("webLink", webLink);
    formData.append("githubLink", githubLink);
    formData.append("thumbnail", thumbnail);
    addProject(formData);
    resetForm();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    setImagePreview(URL.createObjectURL(file)); // Per la preview
  };

  const handleDeleteProject = (projectId) => {
    deleteProject(projectId); // Elimina il progetto tramite il contesto
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setThumbnail(null);
    setWebLink("");
    setGithubLink("");
    setImagePreview(null);
  };

  return (
    <Box p={4}>
      <Flex direction="column" align="start">
        <Box
          my={8}
          _hover={{
            transform: "translateX(-8px)",
            transition: "all 0.3s ease",
          }}
          onClick={() => navigate("/")}
        >
          <IoArrowBackCircleOutline size={24} />
        </Box>
        <Heading fontFamily={"Montserrat"} fontSize="8xl" mt={8} mb={20}>
          ADMIN PANEL
        </Heading>
        {error && <Text color="red.500">{error}</Text>}{" "}
        <form onSubmit={handleSubmit} style={{ width: "50%" }}>
          <Box fontFamily={"Montserrat"} mb={4}>
            <Text mb={2}>Titolo</Text>
            <Input
              type="text"
              placeholder="Titolo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              mb={2}
            />
          </Box>

          <Box fontFamily={"Montserrat"} mb={4}>
            <Text mb={2}>Descrizione</Text>
            <Input
              type="text"
              placeholder="Descrizione"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              mb={2}
            />
          </Box>

          <Box
            fontFamily={"Montserrat"}
            display={"flex"}
            alignItems={"center"}
            mb={4}
          >
            <Text mb={2}>Cover Image</Text>
            <Input
              border={"none"}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              my={2}
              mx={"auto"}
            />
            {imagePreview && (
              <Image
                src={imagePreview}
                alt="Preview"
                boxSize="150px"
                objectFit="cover"
                rounded={"md"}
              />
            )}
          </Box>

          <Box fontFamily={"Montserrat"} mb={4}>
            <Text mb={2}>Web URL</Text>
            <Input
              type="text"
              placeholder="Web URL"
              value={webLink}
              onChange={(e) => setWebLink(e.target.value)}
              mb={2}
            />
          </Box>

          <Box fontFamily={"Montserrat"} mb={4}>
            <Text mb={2}>GitHub URL</Text>
            <Input
              type="text"
              placeholder="GitHub URL"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              mb={2}
            />
          </Box>

          <Button
            fontFamily={"Montserrat"}
            type="submit"
            size="sm"
            rounded="full"
            isLoading={loading}
            isDisabled={loading}
            variant={"outline"}
            border={isDark ? "1.4px solid white" : "1.8px solid #000"}
          >
            Aggiungi
          </Button>
        </form>
        <Box width="100%" mt={8}>
          <Heading display={"flex"} fontFamily={"Montserrat"} fontSize="2xl" mb={4}>
            Progetti Aggiunti: <Text ms={2} color={"gray.300"}>{projects.length}</Text>
          </Heading>
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <Box
                key={project._id}
                p={4}
                border={isDark ? "1.4px solid #ffffff" : "1.4px solid #000"}
                rounded={"2xl"}
                mb={4}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow={"md"}
              >
                <Box
                  display={"flex"}
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent={{ base: "center", md: "space-around" }}
                  alignItems={"center"}
                  gap={2}
                >
                  <Image
                    src={project.thumbnail}
                    alt="Progetto"
                    width={"200px"}
                    rounded={"md"}
                    objectFit={"cover"}
                  />
                  <Box
                    display="flex"
                    flexDirection={"column"}
                    gapY={4}
                    fontFamily={"Montserrat"}
                  >
                    <Text
                      fontFamily={"Montserrat"}
                      fontSize="md"
                      fontWeight="bold"
                    >
                      {project.title}
                    </Text>
                    <Text
                      fontFamily={"Montserrat"}
                      fontSize="sm"
                      color="gray.600"
                    >
                      {project.description}
                    </Text>

                    <Link
                      as={RouterLink}
                      to={project.webLink}
                      target="_blank"
                      color={"blue.400"}
                      textDecoration={"none"}
                      fontFamily={"Montserrat"}
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
                </Box>

                <Button
                  aria-label="Elimina progetto"
                  backgroundColor="black"
                  border={"2px solid whiteAlpha.900"}
                  color={"red"}
                  onClick={() => handleDeleteProject(project._id)}
                  _hover={{
                    transform: "scale(0.9)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <MdDelete />
                </Button>
              </Box>
            ))
          ) : (
            <Text>Nessun progetto aggiunto ancora.</Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
