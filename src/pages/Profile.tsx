import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useAuthStore } from '../stores/authStore';
import { signOut } from '../lib/firebase';

export default function ProfilePage() {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);

  async function handleSignOut() {
    await signOut();
    navigate('/login', { replace: true });
  }

  return (
    <>
      <Header title="প্রোফাইল" />
      <main className="page-pad space-y-4">
        <Card className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-white">
            {(user?.name || user?.email || 'U').slice(0, 1).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold">{user?.name || 'ব্যবহারকারী'}</p>
            <p className="truncate text-sm text-ink-muted">{user?.email}</p>
          </div>
        </Card>

        <Card>
          <p className="font-semibold">সাবস্ক্রিপশন</p>
          <p className="mt-1 text-sm text-ink-muted">ফ্রি প্ল্যান — পরবর্তীতে আপগ্রেড অপশন।</p>
        </Card>

        <Button variant="danger" fullWidth onClick={handleSignOut}>
          লগআউট
        </Button>
      </main>
    </>
  );
}
