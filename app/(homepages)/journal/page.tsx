import JournalEditor from "@/global/components/journalEditor";

export default function JournalPage() {
  return (
    <section className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Daily Journal</h1>
      <JournalEditor />
    </section>
  );
}
