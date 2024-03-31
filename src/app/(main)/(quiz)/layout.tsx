import Footer from '@/src/components/layout/footer/page'
import Navbar from '@/src/components/layout/navbar/page'

export default function QuizLayout({
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
