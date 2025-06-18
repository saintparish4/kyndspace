import ClassList from "@/global/components/classList";
import Providers from "@/app/providers";

export default function ClassesPage() {
  return (
    <section className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Classes</h1>
      <Providers>
        <ClassList />
      </Providers>
    </section>
  );
}
