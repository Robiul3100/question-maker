import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { signInWithEmail, signInWithGoogle } from '../lib/firebase';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleEmailLogin(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await signInWithEmail(email, password);
      navigate('/', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'লগইন ব্যর্থ হয়েছে');
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    setBusy(true);
    try {
      await signInWithGoogle();
      navigate('/', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Google লগইন ব্যর্থ');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="app-shell min-h-screen px-6 pt-16 pb-8">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-card bg-primary text-white text-2xl font-bold">
          ম
        </div>
        <h1 className="text-xl font-bold text-ink">মাদ্রাসা প্রশ্নপত্র মেকার</h1>
        <p className="mt-1 text-sm text-ink-muted">আপনার অ্যাকাউন্টে লগইন করুন</p>
      </div>

      <form onSubmit={handleEmailLogin} className="space-y-3">
        <Input
          label="ইমেইল"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="পাসওয়ার্ড"
          type="password"
          name="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" fullWidth size="lg" disabled={busy}>
          {busy ? 'অপেক্ষা করুন…' : 'লগইন'}
        </Button>
      </form>

      <div className="my-5 flex items-center gap-3 text-xs text-ink-muted">
        <span className="h-px flex-1 bg-gray-200" />
        অথবা
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      <Button
        type="button"
        variant="secondary"
        fullWidth
        size="lg"
        onClick={handleGoogle}
        disabled={busy}
      >
        Google দিয়ে লগইন
      </Button>

      <p className="mt-6 text-center text-sm text-ink-muted">
        নতুন ব্যবহারকারী?{' '}
        <Link to="/register" className="font-semibold text-primary">
          রেজিস্টার করুন
        </Link>
      </p>
    </div>
  );
}
