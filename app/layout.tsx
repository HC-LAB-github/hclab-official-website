import './globals.css'
import Footer from '../components/footer/page'
import Header from '../components/header/page'

export const metadata = {
  title: 'HCLAB-环创工作室',
  description: 'NextJS + UnoCSS Starter App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black text-white'>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
