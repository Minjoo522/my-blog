import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';

export default function Hero() {
  return (
    <section className='flex w-64 flex-col items-center gap-4 rounded-xl bg-gray-200 p-8 text-center dark:bg-[#47495d]'>
      <div className='h-50 w-50 overflow-hidden rounded-full'>
        <Image
          className='h-full w-full object-cover'
          src={profileImage}
          alt='Picture of the author'
          width={240}
          height={320}
          priority
        />
      </div>
      <div>
        <h2 className='text-2xl font-bold tracking-tight'>Minjoo Kim</h2>
        <h3 className='text-sm text-gray-600 dark:text-gray-300'>backend engineer</h3>
      </div>
    </section>
  );
}
