import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-40">
      <h1 className="text-5xl font-bold tracking-wider">I KONNECT</h1>
      <Button onClick={() => navigate('/list')}>Connect !</Button>
    </main>
  );
}
