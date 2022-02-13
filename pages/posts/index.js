import {
  VStack,
  LinkOverlay,
  LinkBox,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

import getLocalMdx from "@utils/getLocalMdx";

const BlogPage = ({ posts }) => {
  return (
    <Stack spacing={[4, 8, 12]} justify="center" alignItems="center">
      {posts.map((post) => (
        <LinkBox
          mt={6}
          p={8}
          border="1px solid black"
          borderRadius="8px"
          as="article"
          key={post.slug}
        >
          <VStack>
            <Link href={`/posts/${post.slug}`} passHref>
              <LinkOverlay>
                <Heading>{post.title}</Heading>
              </LinkOverlay>
            </Link>
            <Text>{post.description}</Text>
          </VStack>
        </LinkBox>
      ))}
    </Stack>
  );
};

export default BlogPage;

// getStaticProps executes at build time (static rendering)
export const getStaticProps = async () => {
  const posts = await getLocalMdx("./posts");
  const allMdx = posts.map((post) => ({
    slug: post.slug,
    ...post.data,
  }));

  return {
    props: {
      posts: allMdx,
    },
  };
};
