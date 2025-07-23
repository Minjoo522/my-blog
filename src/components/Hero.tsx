import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';

export default function Hero() {
  return (
    <section className='flex w-full flex-row items-center gap-6 rounded-lg bg-gray-200 p-6 text-left xl:flex-col xl:items-center xl:gap-5 xl:p-4 xl:text-center dark:bg-[#47495d]'>
      <div className='h-24 w-24 shrink-0 overflow-hidden rounded-full md:h-28 md:w-28 xl:h-40 xl:w-40'>
        <Image
          className='h-full w-full object-cover'
          src={profileImage}
          alt='Picture of the author'
          width={160}
          height={160}
          priority
        />
      </div>
      <div className='flex flex-col gap-2 xl:gap-1'>
        <h2 className='text-lg font-bold tracking-tight md:text-xl xl:text-2xl'>Minjoo Kim</h2>
        <h3 className='text-sm text-gray-600 md:text-base dark:text-gray-300'>backend engineer</h3>
      </div>
    </section>
  );
}
