import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import ExpandableSearch from '@/components/ExpandableSearch';

export default function Header() {
  return (
    <header className='flex items-center justify-between px-10 py-2'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>minjoo.dev</h1>
      </Link>
      <nav className='flex items-center gap-4'>
        <ExpandableSearch />
        <a href='https://github.com/Minjoo522' target='_blank' rel='noopener noreferrer'>
          <BsGithub size={20} />
        </a>
      </nav>
    </header>
  );
}
