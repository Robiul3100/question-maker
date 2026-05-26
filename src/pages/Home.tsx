import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { useAuthStore } from '../stores/authStore';

export default function HomePage() {
  const user = useAuthStore((s) => s.user);

  return (
    <>
      <Header title="মাদ্রাসা প্রশ্নপত্র মেকার" />
      <main className="page-pad">
        <Card className="bg-primary text-white shadow-card">
          <p className="text-sm opacity-90">আসসালামু আলাইকুম,</p>
          <h2 className="mt-1 text-lg font-semibold">
            {user?.name || user?.email || 'ব্যবহারকারী'}
          </h2>
          <p className="mt-2 text-sm opacity-90">
            আপনার মোবাইল থেকে পেশাদার প্রশ্নপত্র তৈরি করুন।
          </p>
        </Card>

        <h3 className="mt-5 mb-2 text-sm font-semibold text-ink-muted">দ্রুত শুরু</h3>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/papers/new" className="block">
            <Card className="h-full">
              <div className="text-2xl">📝</div>
              <p className="mt-2 font-semibold">নতুন প্রশ্নপত্র</p>
              <p className="text-xs text-ink-muted">খালি টেমপ্লেট থেকে শুরু</p>
            </Card>
          </Link>
          <Link to="/notices/new" className="block">
            <Card className="h-full">
              <div className="text-2xl">📢</div>
              <p className="mt-2 font-semibold">নতুন নোটিশ</p>
              <p className="text-xs text-ink-muted">ছুটি / পরীক্ষার বিজ্ঞপ্তি</p>
            </Card>
          </Link>
          <Link to="/papers" className="block">
            <Card className="h-full">
              <div className="text-2xl">📂</div>
              <p className="mt-2 font-semibold">আমার প্রশ্নপত্র</p>
              <p className="text-xs text-ink-muted">সংরক্ষিত পেপার দেখুন</p>
            </Card>
          </Link>
          <Link to="/settings" className="block">
            <Card className="h-full">
              <div className="text-2xl">🏫</div>
              <p className="mt-2 font-semibold">প্রতিষ্ঠান</p>
              <p className="text-xs text-ink-muted">নাম, লোগো, ফুটার সেট করুন</p>
            </Card>
          </Link>
        </div>
      </main>
    </>
  );
}
