import { VStack } from "@chakra-ui/react";

import ProjectCard from "@components/ProjectCard";

const Projects = () => {
  return (
    <VStack spacing={10} mt={10} justify="flex-start" direction="column">
      <ProjectCard
        image="/portfolio.png"
        name="My Portfolio Project"
        link="https://github.com/eneax/nextjs-chakra-portfolio"
      />
    </VStack>
  );
};

export default Projects;
