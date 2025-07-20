'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  categories: string[];
};

export default function CategoryFilter({ categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selected = searchParams.get('category');

  const onClick = (category?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <button onClick={() => onClick(undefined)} className={!selected ? 'font-bold' : ''}>
        All Posts
      </button>
      {categories.map((category) => (
        <button key={category} onClick={() => onClick(category)} className={selected === category ? 'font-bold' : ''}>
          {category}
        </button>
      ))}
    </div>
  );
}
