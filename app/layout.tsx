export const metadata = {
  title: 'Flexibble',
  description: 'showcase and discover remarable developer projects',
}
import Navbar from '@/components/Navbar';
import './Global.css';
import Footer from '@/components/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
