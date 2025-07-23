import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';

export type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
  notionPageId: string;
  category?: string;
  imageUrl?: string;
};

export type PostData = Post & {
  next: Post | null;
  prev: Post | null;
};

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getPostData(notionPageId: string): Promise<PostData> {
  const posts = await getAllPosts();
  const post = posts.find((post) => post.notionPageId === notionPageId);

  if (!post) throw new Error(`post not found: ${notionPageId}`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;
  return { ...post, next, prev };
}
