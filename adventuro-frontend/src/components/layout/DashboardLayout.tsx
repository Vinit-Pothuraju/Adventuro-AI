import Navbar from "./Navbar";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Offset for fixed navbar */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}
