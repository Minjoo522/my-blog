'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import CategoryNavButton from '@/components/categories/CategoryNavButton';

type Props = {
  categories: string[];
};

export default function Categories({ categories }: Props) {
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
    <section className='w-full'>
      <h2 className='mb-4 text-lg font-semibold'>Categories</h2>
      <ul className='scrollbar-hide flex flex-row gap-2 overflow-x-auto xl:flex-col xl:overflow-visible'>
        {categories.map((category) => (
          <li key={category} className='shrink-0'>
            <CategoryNavButton label={category} selected={selected === category} onClick={() => onClick(category)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
