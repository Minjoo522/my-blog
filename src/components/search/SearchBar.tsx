'use client';

import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  return (
    <div className='flex h-10 w-64 items-center rounded-full border border-gray-200 bg-white px-4 shadow-sm'>
      <FiSearch size={18} className='text-gray-500' />
      <input
        type='text'
        placeholder='Search...'
        className='ml-2 flex-1 bg-transparent text-sm text-black placeholder-gray-400 outline-none'
      />
    </div>
  );
}
