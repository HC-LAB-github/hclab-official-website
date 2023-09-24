import './globals.css'

export const metadata = {
  title: 'UnoCSS Example App',
  description: 'NextJS + UnoCSS Starter App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black text-white'>{children}</body>
    </html>
  )
}
