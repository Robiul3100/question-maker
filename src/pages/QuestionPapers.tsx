import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function QuestionPapersPage() {
  // TODO: fetch users/{uid}/questionPapers from Firestore
  const papers: Array<{ id: string; title: string; subject: string }> = [];

  return (
    <>
      <Header
        title="প্রশ্নপত্র"
        right={
          <Link to="/papers/new">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              + নতুন
            </Button>
          </Link>
        }
      />
      <main className="page-pad">
        {papers.length === 0 ? (
          <Card className="text-center">
            <div className="py-6">
              <div className="mb-2 text-4xl">📄</div>
              <p className="font-semibold">কোনো প্রশ্নপত্র নেই</p>
              <p className="mt-1 text-sm text-ink-muted">
                শুরু করতে নতুন প্রশ্নপত্র তৈরি করুন।
              </p>
              <Link to="/papers/new" className="mt-4 inline-block">
                <Button>নতুন প্রশ্নপত্র</Button>
              </Link>
            </div>
          </Card>
        ) : (
          <div className="space-y-3">
            {papers.map((p) => (
              <Card key={p.id}>
                <p className="font-semibold">{p.title}</p>
                <p className="text-sm text-ink-muted">{p.subject}</p>
              </Card>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
