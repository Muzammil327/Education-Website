import Footer from '@/src/components/layout/footer/page'
import Navbar from '@/src/components/layout/navbar/page'

export default function ClassLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
