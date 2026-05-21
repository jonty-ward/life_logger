type DashboardLayoutProps = {
  children: React.ReactNode
}

export function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <aside className="w-64 border-r border-zinc-800 p-6">
        <h2 className="text-2xl font-bold">
          A&W OS
        </h2>

        <nav className="mt-8 space-y-4">
          <a
            href="/"
            className="block rounded-lg px-3 py-2 hover:bg-zinc-800"
          >
            Overview &{` `}
          </a>

          <a
            href="/athlete"
            className="block rounded-lg px-3 py-2 hover:bg-zinc-800"
          >
            Athlete &{` `}
          </a>

          <a
            href="/wealth"
            className="block rounded-lg px-3 py-2 hover:bg-zinc-800"
          >
            Wealth
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}