import { Post } from '@/service/posts';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

const ICON_CLASS = 'm-4 text-2xl transition-all group-hover:text-4xl';

export default function AdjacentPostCard({ post: { title, notionPageId, imageUrl }, type }: Props) {
  return (
    <Link href={`/posts/${notionPageId}`} className='relative max-h-56 w-full bg-black'>
      <div className='h-50 w-full overflow-hidden opacity-40'>
        {imageUrl && (
          <Image className='h-full w-full object-cover' src={imageUrl} alt={title} width={150} height={100} />
        )}
      </div>
      <div className='group absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-around px-8 text-white'>
        {type === 'prev' && <IoIosArrowBack className={ICON_CLASS} />}
        <div className='w-full px-4 text-center'>
          <h3 className='line-clamp-2 text-3xl font-bold'>{title}</h3>
        </div>
        {type === 'next' && <IoIosArrowForward className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
