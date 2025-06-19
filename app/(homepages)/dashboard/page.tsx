import Providers from "@/app/providers";
import DashboardSummary from "@/global/components/dashboardSummary";

export default function DashboardPage() {

  return (
    <section className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Your Dashboard</h1>
      <Providers>
        <DashboardSummary />
      </Providers>
    </section>
  );
}
