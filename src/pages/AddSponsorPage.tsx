import DatePicker from '@/components/DatePicker';
import IdolAvatar from '@/components/IdolAvatar';
import Swiper from '@/components/Swiper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function AddSponsorPage() {
  return (
    <main className="m-auto flex max-w-[1200px] flex-col px-10 pb-20 pt-1">
      <div className="flex items-center justify-between">
        <h2 className="shrink-0 text-xl font-bold">조공 추가하기</h2>
        <Input
          className="ml-5 max-w-[500px]"
          placeholder="조공할 아이돌을 검색해보세요"
        />
      </div>
      <div className="mt-8">
        <Swiper>
          {Array.from({ length: 15 }).map((_, index) => (
            <IdolAvatar key={index} />
          ))}
        </Swiper>
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
        <Button>취소</Button>
        <Button>등록</Button>
      </div>
    </main>
  );
}
