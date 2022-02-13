import { promises as fs } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import matter from "gray-matter";
import glob from "fast-glob";

const getLocalMdx = async (source) => {
  const contentGlob = `${source}/**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];

  const content = await Promise.all(
    files.map(async (filepath) => {
      const slug = filepath
        .replace(source, "")
        .replace(/^\/+/, "")
        .replace(new RegExp(path.extname(filepath) + "$"), "");

      const mdxSource = await fs.readFile(filepath);

      const { content, data } = matter(mdxSource);
      const mdx = await serialize(content, { scope: data });

      return {
        filepath,
        slug,
        content,
        data,
        mdx,
      };
    })
  );

  return content;
};

export default getLocalMdx;
