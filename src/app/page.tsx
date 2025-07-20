import Hero from '@/components/Hero';
import PostList from '@/components/posts/PostList';

export default function HomePage() {
  return (
    <div className='flex items-start gap-10'>
      <div>
        <Hero />
      </div>
      <PostList />
    </div>
  );
}
