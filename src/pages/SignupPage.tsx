import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignupPage() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-bold">I KONNECT</h1>
      <form className="flex w-full max-w-[460px] flex-col gap-4 px-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">이메일</Label>
          <Input id="email" type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">이름</Label>
          <Input id="name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">비밀번호</Label>
          <Input id="password" type="password" />
        </div>
        <Button>회원가입</Button>
      </form>
    </main>
  );
}
