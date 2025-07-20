import { readFile } from 'node:fs/promises';
import path from 'node:path';

export type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  imageUrl?: string;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
