import Footer from '@/src/components/layout/footer/page'
import DashboardSidebar from './components/sidebar/page'
import Navbar from '@/src/components/layout/navbar/page'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <div className="lg:grid lg:grid-cols-9 lg:gap-10">
        <div className="xl:col-span-2 lg:col-span-3">
          <DashboardSidebar />
        </div>
        <div className="xl:col-span-7 lg:col-span-6">{children}</div>
      </div>
      <Footer />
    </>
  )
}
