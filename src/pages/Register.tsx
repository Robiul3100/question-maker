import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { registerWithEmail } from '../lib/firebase';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await registerWithEmail(email, password);
      // TODO: write profile doc to users/{uid} with `name`
      navigate('/', { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'রেজিস্ট্রেশন ব্যর্থ');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="app-shell min-h-screen px-6 pt-16 pb-8">
      <div className="mb-8 text-center">
        <h1 className="text-xl font-bold text-ink">নতুন অ্যাকাউন্ট</h1>
        <p className="mt-1 text-sm text-ink-muted">শুরু করুন বিনামূল্যে</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          label="পূর্ণ নাম"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          autoComplete="new-password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" fullWidth size="lg" disabled={busy}>
          {busy ? 'অপেক্ষা করুন…' : 'রেজিস্টার'}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-ink-muted">
        অ্যাকাউন্ট আছে?{' '}
        <Link to="/login" className="font-semibold text-primary">
          লগইন করুন
        </Link>
      </p>
    </div>
  );
}
