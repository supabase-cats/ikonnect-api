import MyCredit from '@/components/MyCredit';
import SponsorCard from '@/components/SponsorCard';
import Swiper from '@/components/Swiper';
import Toggle from '@/components/Toggle';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function ListPage() {
  const naviagte = useNavigate();

  return (
    <main className="m-auto flex max-w-[1200px] flex-col gap-10 px-10 pb-20">
      <MyCredit />
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">후원을 기다리는 조공</h2>
          <Button onClick={() => naviagte('/addSponsor')}>
            + 조공 등록하기
          </Button>
        </div>
        <div className="mt-1">
          <Toggle
            onToggle={(checked) => {
              console.log(checked);
            }}
          >
            내가 관심있는 아이돌
          </Toggle>
        </div>
        <div className="mt-4 flex">
          <Swiper>
            {Array.from({ length: 7 }).map(() => (
              <SponsorCard
                sponsor={{
                  image: 'https://github.com/shadcn.png',
                  title: '태연의 커피차',
                  deadline: new Date(2024, 8, 2),
                  totalCredit: 5000,
                  donatedCredit: 1000,
                }}
              />
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
