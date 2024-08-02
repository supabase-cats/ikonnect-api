import { getDonations } from '@/api/donation';
import MyCredit from '@/components/MyCredit';
import SponsorCard from '@/components/SponsorCard';
import Swiper from '@/components/Swiper';
import Toggle from '@/components/Toggle';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Donation = Awaited<ReturnType<typeof getDonations>>[number];

export default function ListPage() {
  const naviagte = useNavigate();

  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const data = await getDonations();
      setDonations(data);
    };

    fetchDonations();
  }, []);

  return (
    <main className="m-auto flex max-w-[1200px] flex-col gap-10 px-10 pb-20 pt-1">
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
          <Swiper size="large">
            {donations.map((donation) => (
              <SponsorCard
                key={donation.id}
                sponsor={{
                  image: donation.image,
                  title: donation.title,
                  deadline: new Date(donation.deadline),
                  totalCredit: donation.targetAmount,
                  donatedCredit: donation.savedAmount,
                }}
              />
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
