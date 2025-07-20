'use client';

import { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

export default function ExpandableSearch() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <div
      className={`flex h-12 items-center overflow-hidden rounded-full transition-all duration-300 ease-in-out ${
        open ? 'w-64 border border-gray-300 bg-white px-4 shadow-md' : 'w-12 bg-transparent'
      }`}
      style={{ transitionProperty: 'width, background, border, box-shadow, padding' }}
    >
      <FiSearch size={20} className='shrink-0 cursor-pointer' onClick={() => setOpen(true)} />

      <input
        ref={inputRef}
        type='text'
        placeholder='Search...'
        className={`ml-2 flex-1 bg-transparent text-sm text-black placeholder-gray-400 transition-all duration-200 ease-in-out outline-none ${
          open ? 'ml-2 w-full opacity-100' : 'ml-0 w-0 opacity-0'
        }`}
      />

      {open && (
        <button
          onClick={() => setOpen(false)}
          className='ml-2 text-gray-400 hover:text-black'
          aria-label='Close Search'
        >
          <IoClose size={18} />
        </button>
      )}
    </div>
  );
}
