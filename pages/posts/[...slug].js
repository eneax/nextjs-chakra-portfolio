import { Box, Heading } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";

import getLocalMdx from "@utils/getLocalMdx";

const BlogPost = ({ frontMatter, post }) => {
  return (
    <Box p={8}>
      <Heading as="h1" pb="1rem">
        {frontMatter.title}
      </Heading>

      <MDXRemote {...post.mdx} />
    </Box>
  );
};

export default BlogPost;

// pages are created on the fly
export const getStaticPaths = async () => {
  const posts = await getLocalMdx("./posts");
  const paths = posts.map(({ slug }) => ({
    params: {
      slug: slug.split("/"),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// getStaticProps executes at build time (static rendering)
export const getStaticProps = async ({ params: { slug } }) => {
  const posts = await getLocalMdx("./posts");
  const postSlug = slug.join("/");
  const [post] = posts.filter((post) => post.slug === postSlug);

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  return {
    props: {
      post,
      frontMatter: { ...post.data },
    },
  };
};
