import Hero from '@/components/Hero';
import { getAllPosts } from '@/service/posts';
import FilterablePosts from '@/components/posts/FilterablePosts';
import Categories from '@/components/categories/Categories';

export default async function HomePage() {
  const posts = await getAllPosts();
  const categories = ['All', ...new Set(posts.flatMap((p) => (p.category ? [p.category] : [])))];

  return (
    <div className='mx-auto w-full max-w-[1200px] px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-8 xl:px-10'>
      <div className='flex flex-col gap-6 sm:gap-8 lg:gap-10 xl:flex-row xl:items-start xl:gap-12 2xl:gap-16'>
        <div className='flex w-full shrink-0 flex-col gap-4 sm:gap-5 xl:w-[260px]'>
          <Hero />
          <Categories categories={categories} />
        </div>
        <div className='w-full min-w-0'>
          <FilterablePosts posts={posts} />
        </div>
      </div>
    </div>
  );
}
