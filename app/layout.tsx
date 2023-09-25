import './globals.css'

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
        <header>header</header>
        <main>
          {children}
        </main>
        <footer>footer</footer>
      </body>
    </html>
  )
}
