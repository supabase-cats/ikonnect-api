import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function IdolAvatar() {
  return (
    <div className="inline-flex rounded-full border-2 border-gray-400 p-[5px]">
      <Avatar className="h-20 w-20">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
