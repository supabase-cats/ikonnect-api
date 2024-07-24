import { calculateDaysUntil } from '@/lib/calculateDaysUntil';

import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface Props {
  sponsor: {
    image: string;
    title: string;
    deadline: Date;
    totalCredit: number;
    donatedCredit: number;
  };
}

export default function SponsorCard({ sponsor }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative flex justify-center">
        <img
          className="aspect-square rounded-md"
          src={sponsor.image}
          alt="조공 이미지"
        />
        <div className="absolute bottom-3">
          <Button>후원하기</Button>
        </div>
      </div>
      <div className="mt-3">
        <p>{sponsor.title}</p>
        <div className="mt-1 flex items-center justify-between text-xs text-gray-400">
          <p>💎 {sponsor.donatedCredit}</p>
          <p>{calculateDaysUntil(sponsor.deadline)}일 남음</p>
        </div>
        <Progress
          className="mt-2 max-h-1"
          value={(sponsor.donatedCredit / sponsor.totalCredit) * 100}
        />
      </div>
    </div>
  );
}
