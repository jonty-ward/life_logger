import {AthleteDashboard} from "@/modules/athlete/components/AthleteDashboard";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-4xl font-bold">
        Athlete & Wealth OS
      </h1>

      <p className="mt-4 text-zinc-400">
        Your personal analytics dashboard.
      </p>
      <AthleteDashboard />
    </main>
  )
}