import {
  Heading,
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
  Link,
  Avatar,
} from "@chakra-ui/react";

import { FaTwitter, FaGithub, FaGlobe, FaGlobeEurope } from "react-icons/fa";

const Home = () => {
  return (
    <VStack align="center" gap="32px" justify="center">
      <Avatar src="" size="2xl" mt="10" />

      <VStack>
        <Heading as="h1">Enea Xharja</Heading>
        <Heading size="md" as="h3">
          Web Developer
        </Heading>
      </VStack>

      <Text textAlign="center">
        👋 Hey there!
        <br />
        Welcome to this basic portfolio website built with{" "}
        <Link href="https://nextjs.org" target="_blank">
          <Text as="u">NextJS</Text>
        </Link>{" "}
        and{" "}
        <Link href="https://chakra-ui.com" target="_blank">
          <Text as="u">Chakra UI</Text>
        </Link>
        .
      </Text>

      <HStack spacing="20px" justifySelf="center">
        <Link href="https://eneaxharja.com" target="_blank">
          <Icon color="black" as={FaGlobeEurope} />
        </Link>
        <Link href="https://github.com/eneax" target="_blank">
          <Icon color="black" as={FaGithub} />
        </Link>
        <Link href="https://twitter.com/eneaxharja" target="_blank">
          <Icon color="blue.200" as={FaTwitter} />
        </Link>
      </HStack>
    </VStack>
  );
};

export default Home;
