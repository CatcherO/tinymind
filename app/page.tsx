import ThoughtsList from "@/components/ThoughtsList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 sm:px-6">
        <ThoughtsList />
      </main>
    </div>
  );
}
