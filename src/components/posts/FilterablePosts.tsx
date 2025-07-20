'use client';

import { Post } from '@/service/posts';
import PostList from '@/components/posts/PostList';
import { useSearchParams } from 'next/navigation';

type Props = {
  posts: Post[];
};

export default function FilterablePosts({ posts }: Props) {
  const searchParams = useSearchParams();
  const selected = searchParams.get('category');
  const filtered = selected ? posts.filter((post) => post.category === selected) : posts;

  return (
    <section>
      <PostList posts={filtered} />
    </section>
  );
}
