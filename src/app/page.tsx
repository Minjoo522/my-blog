import Hero from '@/components/Hero';
import { getAllPosts } from '@/service/posts';
import FilterablePosts from '@/components/posts/FilterablePosts';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className='flex items-start gap-10'>
      <div>
        <Hero />
      </div>
      <FilterablePosts posts={posts} />
    </div>
  );
}
