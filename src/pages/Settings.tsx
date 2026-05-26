import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';

interface Row {
  icon: string;
  title: string;
  desc: string;
}

const rows: Row[] = [
  { icon: '🏫', title: 'প্রতিষ্ঠান', desc: 'নাম, লোগো, ঠিকানা, ফুটার' },
  { icon: '🎓', title: 'শ্রেণি', desc: 'শ্রেণি যোগ ও সাজান' },
  { icon: '📚', title: 'বিষয়', desc: 'প্রতি শ্রেণির বিষয়' },
  { icon: '📝', title: 'পরীক্ষার ধরন', desc: 'মাসিক, অর্ধবার্ষিক, বার্ষিক ইত্যাদি' },
  { icon: '🌐', title: 'ভাষা', desc: 'বাংলা / English / العربية / اردو' },
];

export default function SettingsPage() {
  return (
    <>
      <Header title="সেটিংস" />
      <main className="page-pad space-y-3">
        {rows.map((r) => (
          <Card key={r.title} className="flex items-center gap-3">
            <div className="text-2xl">{r.icon}</div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{r.title}</p>
              <p className="truncate text-sm text-ink-muted">{r.desc}</p>
            </div>
            <span className="text-ink-muted">›</span>
          </Card>
        ))}
      </main>
    </>
  );
}
