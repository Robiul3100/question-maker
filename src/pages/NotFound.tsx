import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="app-shell flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="text-6xl">🤔</div>
      <h1 className="mt-3 text-xl font-bold">পেজ খুঁজে পাওয়া যায়নি</h1>
      <p className="mt-1 text-sm text-ink-muted">
        আপনি যে লিঙ্কে গিয়েছেন সেটি বিদ্যমান নেই।
      </p>
      <Link to="/" className="mt-6">
        <Button>হোমে ফিরে যান</Button>
      </Link>
    </div>
  );
}
