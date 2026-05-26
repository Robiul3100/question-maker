import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function QuestionPaperEditorPage() {
  // TODO: form for paper meta (institution / class / subject / examType / duration / marks)
  // TODO: dynamic question list — supports types: general, sub, vocabulary, mcq, tick_mcq, math_mcq, table, section
  // TODO: save to users/{uid}/questionPapers/{paperId}
  return (
    <>
      <Header
        title="প্রশ্নপত্র সম্পাদনা"
        showBack
        right={
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            সংরক্ষণ
          </Button>
        }
      />
      <main className="page-pad space-y-3">
        <Card>
          <p className="font-semibold">পেপার তথ্য</p>
          <p className="mt-1 text-sm text-ink-muted">
            শিরোনাম, প্রতিষ্ঠান, শ্রেণি, বিষয়, পরীক্ষার ধরন — পরবর্তী ধাপে।
          </p>
        </Card>
        <Card>
          <p className="font-semibold">প্রশ্নসমূহ</p>
          <p className="mt-1 text-sm text-ink-muted">
            এখানে প্রশ্ন যোগ/সম্পাদনা/পুনর্বিন্যাস হবে।
          </p>
        </Card>
      </main>
    </>
  );
}
