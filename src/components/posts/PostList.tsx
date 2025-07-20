import PostCard from '@/components/posts/PostCard';
import { posts } from '@/app/data/posts';

export default function PostList() {
  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
