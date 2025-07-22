'use client';

import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import SearchBar from '@/components/search/SearchBar';
import DarkModeToggle from '@/components/DarkModeToggle';
import { useState } from 'react';
import SearchModal from '@/components/search/SearchModal';
import { FiSearch } from 'react-icons/fi';

export default function Header() {
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur-md transition-colors dark:border-zinc-700 dark:bg-zinc-900/60'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6'>
        <Link href='/'>
          <h1 className='text-xl font-bold sm:text-2xl md:text-3xl'>minjoo.dev</h1>
        </Link>
        <nav className='flex items-center gap-3 sm:gap-4'>
          {/* PC용 Search */}
          <div className='hidden sm:block'>
            <SearchBar />
          </div>

          {/* 모바일용 Search 버튼 */}
          <button className='block text-zinc-800 sm:hidden dark:text-zinc-100' onClick={() => setShowSearchModal(true)}>
            <FiSearch size={18} className='text-gray-500' />
          </button>

          <a
            href='https://github.com/Minjoo522'
            target='_blank'
            rel='noopener noreferrer'
            className='text-zinc-800 transition-colors hover:text-black dark:text-zinc-100 dark:hover:text-white'
          >
            <BsGithub size={20} />
          </a>
          <DarkModeToggle />
        </nav>
      </div>

      {/* 모바일용 Search 모달 */}
      {showSearchModal && <SearchModal onClose={() => setShowSearchModal(false)} />}
    </header>
  );
}
