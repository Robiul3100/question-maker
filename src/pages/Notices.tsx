import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function NoticesPage() {
  // TODO: fetch users/{uid}/notices from Firestore
  const notices: Array<{ id: string; title: string; type: string }> = [];

  return (
    <>
      <Header
        title="নোটিশ"
        right={
          <Link to="/notices/new">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              + নতুন
            </Button>
          </Link>
        }
      />
      <main className="page-pad">
        {notices.length === 0 ? (
          <Card className="text-center">
            <div className="py-6">
              <div className="mb-2 text-4xl">📢</div>
              <p className="font-semibold">কোনো নোটিশ নেই</p>
              <p className="mt-1 text-sm text-ink-muted">
                নতুন নোটিশ তৈরি করুন (সাধারণ / ছুটি / পরীক্ষা)।
              </p>
              <Link to="/notices/new" className="mt-4 inline-block">
                <Button>নতুন নোটিশ</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            {notices.map((n) => (
              <Card key={n.id}>
                <p className="font-semibold">{n.title}</p>
                <p className="text-sm text-ink-muted">{n.type}</p>
              </Card>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
