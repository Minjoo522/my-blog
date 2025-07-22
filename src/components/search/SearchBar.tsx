'use client';

import { FiSearch, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const current = searchParams.get('keyword');
    if (current) {
      setKeyword(current);
    }
  }, [searchParams]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keyword.trim()) {
      const params = new URLSearchParams(searchParams);
      params.set('keyword', keyword.trim());
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  const handleClear = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('keyword');
    router.push(`${pathname}?${params.toString()}`);
    setKeyword('');
  };

  return (
    <div className='relative flex h-10 w-64 items-center rounded-full border border-gray-200 bg-white px-4 shadow-sm'>
      <FiSearch size={18} className='text-gray-500' />
      <input
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Search...'
        className='ml-2 flex-1 bg-transparent text-sm text-black placeholder-gray-400 outline-none'
      />
      {keyword && (
        <button type='button' onClick={handleClear} className='absolute right-3 text-gray-400 hover:text-black'>
          <FiX size={18} />
        </button>
      )}
    </div>
  );
}
