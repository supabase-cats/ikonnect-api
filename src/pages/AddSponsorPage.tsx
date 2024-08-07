import { getIdols, searchIdol } from '@/api/idol';
import DatePicker from '@/components/DatePicker';
import IdolAvatar from '@/components/IdolAvatar';
import Swiper from '@/components/Swiper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Idol = Awaited<ReturnType<typeof getIdols>>[number];

export default function AddSponsorPage() {
  const [idols, setIdols] = useState<Idol[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIdols = async () => {
      const data = await getIdols();
      setIdols(data);
    };

    fetchIdols();
  }, []);

  useEffect(() => {
    const fetchIdols = async () => {
      const data = await searchIdol(searchKeyword);
      setIdols(data);
    };

    fetchIdols();
  }, [searchKeyword]);

  return (
    <main className="m-auto flex max-w-[1200px] flex-col px-10 pb-20 pt-1">
      <div className="flex items-center justify-between">
        <h2 className="shrink-0 text-xl font-bold">조공 추가하기</h2>
        <Input
          className="ml-5 max-w-[500px]"
          placeholder="조공할 아이돌을 검색해보세요"
          value={searchKeyword}
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
        />
      </div>
      <div className="mt-8 h-[130px]">
        {idols.length > 0 ? (
          <Swiper>
            {idols.map((idol) => (
              <div
                key={idol.id}
                className="flex select-none flex-col items-center justify-start"
              >
                <IdolAvatar image={idol.image} alt={idol.name} />
                <p className="mt-2">{idol.name}</p>
              </div>
            ))}
          </Swiper>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            결과가 없습니다
          </div>
        )}
      </div>
      <div className="mt-10 flex flex-col gap-8">
        <Input placeholder="제목" />
        <Textarea className="h-40 resize-none" placeholder="내용" />
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">조공 마감 날짜</h3>
            <DatePicker />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">필요 후원 크레딧</h3>
            <Input />
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-3">
        <Button onClick={() => navigate('/list')}>취소</Button>
        <Button>등록</Button>
      </div>
    </main>
  );
}
