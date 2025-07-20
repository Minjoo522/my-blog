import Hero from '@/components/Hero';
import { getAllPosts } from '@/service/posts';
import FilterablePosts from '@/components/posts/FilterablePosts';
import Categories from '@/components/categories/Categories';

export default async function HomePage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.flatMap((p) => (p.category ? [p.category] : [])))];

  return (
    <div className='flex items-start gap-10'>
      <div className='flex flex-col gap-5'>
        <Hero />
        <Categories categories={categories} />
      </div>
      <FilterablePosts posts={posts} />
    </div>
  );
}
