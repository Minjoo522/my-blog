import { getAllPosts, getPostData } from '@/service/posts';
import Image from 'next/image';
import CategoryButton from '@/components/categories/CategoryButton';
import NotionPost from '@/components/posts/NotionPost';
import { fetchNotionPage } from '@/service/notion';
import { Metadata, ResolvingMetadata } from 'next';
import AdjacentPostCard from '@/components/AdjacentPostCard';
import { SITE_URL } from '@/constants/constants';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;

  const { title, description, imageUrl, notionPageId } = await getPostData(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    openGraph: {
      url: `${SITE_URL}/posts/${notionPageId}`,
      images: imageUrl ? [`${SITE_URL}${imageUrl}`, ...previousImages] : [...previousImages],
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;

  const { title, date, category, imageUrl, notionPageId, next, prev } = await getPostData(slug);

  const recordMap = await fetchNotionPage(notionPageId);

  return (
    <article>
      <div className='relative h-80 w-full overflow-hidden'>
        {imageUrl && (
          <Image className='h-full w-full object-cover' src={imageUrl} alt={title} width={760} height={420} priority />
        )}
        <div className='absolute inset-0 bg-black/20' aria-hidden='true' />
        <div className='absolute bottom-8 px-4 text-left text-white sm:px-6 md:px-12 lg:px-32 xl:px-80'>
          {category && <CategoryButton category={category} />}
          <h1 className='mt-1 text-3xl leading-tight font-bold'>{title}</h1>
          <p className='mt-1 text-sm text-white/80'>{date}</p>
        </div>
      </div>
      <section className='mb-20'>
        <NotionPost recordMap={recordMap} />
      </section>
      <section className='flex shadow-md'>
        {prev && <AdjacentPostCard post={prev} type='prev' />}
        {next && <AdjacentPostCard post={next} type='next' />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.slice(0, 5).map((post) => ({
    slug: post.notionPageId,
  }));
}
