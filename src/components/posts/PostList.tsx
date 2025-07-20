import PostCard from '@/components/posts/PostCard';
import { Post } from '@/service/posts';

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
