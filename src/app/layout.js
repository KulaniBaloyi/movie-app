import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie App',
  description: 'A clone of MovieDB.org using their free api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
