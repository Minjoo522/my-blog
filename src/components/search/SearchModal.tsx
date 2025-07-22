'use client';

import { BsX } from 'react-icons/bs';
import SearchBar from '@/components/search/SearchBar';
import { useEffect, useRef } from 'react';

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-md dark:bg-zinc-900/90'>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-2xl text-zinc-700 dark:text-white'
        aria-label='Close'
      >
        <BsX />
      </button>

      <div className='w-[90%] max-w-md'>
        <SearchBar />
      </div>
    </div>
  );
}
