import Image from 'next/image';

type Props = {
  imageUrl: string;
  alt: string;
};

export default function PostCardImage({ imageUrl, alt }: Props) {
  return (
    <div className='h-32 w-32 shrink-0 overflow-hidden rounded-md'>
      <Image src={imageUrl} alt={alt} className='h-full w-full object-cover' width={250} height={250} />
    </div>
  );
}
