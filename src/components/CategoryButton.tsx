import Link from 'next/link';

type Props = {
  category: string;
};

export default function CategoryButton({ category }: Props) {
  return (
    <Link
      href={`/?category=${encodeURIComponent(category)}`}
      className='inline-block w-fit rounded-full bg-sky-100 px-3 py-1 text-sm font-medium whitespace-nowrap text-sky-700 transition-colors hover:bg-sky-200'
    >
      {category}
    </Link>
  );
}
