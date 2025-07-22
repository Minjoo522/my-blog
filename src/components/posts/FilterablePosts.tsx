'use client';

import { Post } from '@/service/posts';
import PostList from '@/components/posts/PostList';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

type Props = {
  posts: Post[];
};

export default function FilterablePosts({ posts }: Props) {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const keyword = searchParams.get('keyword')?.toLowerCase();

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory = category && category !== 'All Categories' ? post.category === category : true;
      const matchKeyword = keyword ? post.title.toLowerCase().includes(keyword) : true;
      return matchCategory && matchKeyword;
    });
  }, [category, keyword, posts]);

  return (
    <section>
      <PostList posts={filtered} />
    </section>
  );
}
