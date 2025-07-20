import PostCardImage from '@/components/posts/PostCardImage';
import CategoryButton from '@/components/CategoryButton';
import Link from 'next/link';
import { Post } from '@/service/posts';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <article className='flex gap-4 border-b border-gray-200 py-6 dark:border-gray-700'>
      <div className='flex flex-1 flex-col justify-between'>
        {post.category && <CategoryButton category={post.category} />}
        <Link href={`/posts/${post.id}`}>
          <h2 className='mt-1 text-xl font-bold'>{post.title}</h2>
          <p className='mt-2 line-clamp-2 text-gray-500 dark:text-gray-400'>{post.description}</p>
          <p className='mt-2 text-sm text-gray-400'>{post.date}</p>
        </Link>
      </div>

      {post.imageUrl && <PostCardImage imageUrl={post.imageUrl} alt={post.title} />}
    </article>
  );
}
