import { getPostData } from '@/service/posts';
import Image from 'next/image';
import CategoryButton from '@/components/categories/CategoryButton';
import NotionPost from '@/components/posts/NotionPost';
import { fetchNotionPage } from '@/service/notion';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage(props: Props) {
  const params = await props.params;
  const { slug } = params;

  const { title, date, category, imageUrl, notionPageId } = await getPostData(slug);

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
      <NotionPost recordMap={recordMap} />
    </article>
  );
}
