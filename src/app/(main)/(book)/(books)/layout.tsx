import DashboardSidebar from './components/sidebar/page'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid grid-cols-9 gap-4">
      <div className="col-span-2">
        <DashboardSidebar />
      </div>
      <div className="col-span-7">{children}</div>
    </div>
  )
}
