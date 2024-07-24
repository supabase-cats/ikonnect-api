import { useNavigate } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 m-auto flex w-full max-w-[1200px] items-center justify-between bg-background/75 px-10 py-5">
      <p
        className="cursor-pointer text-xl font-bold"
        onClick={() => navigate('/list')}
      >
        I-KONNECT
      </p>
      <Avatar onClick={() => navigate('/mypage')}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
}
