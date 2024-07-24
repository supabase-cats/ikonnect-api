import { Button } from './ui/button';

export default function MyCredit() {
  const myCredit = 5000;
  return (
    <div className="flex items-center justify-between rounded-md border border-gray-400 p-5">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-gray-600">내 크레딧</p>
        <p className="text-xl font-bold">💎 {myCredit}</p>
      </div>
      <Button>충전하기</Button>
    </div>
  );
}
