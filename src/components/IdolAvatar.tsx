import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Props {
  image: string;
  alt: string;
}

export default function IdolAvatar({ image, alt }: Props) {
  return (
    <div className="inline-flex rounded-full border-2 border-gray-400 p-[5px]">
      <Avatar className="h-20 w-20">
        <AvatarImage src={image} />
        <AvatarFallback>{alt}</AvatarFallback>
      </Avatar>
    </div>
  );
}
