import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className='text-2xl font-bold text-red-500 leading-none'>Home</h1>
    </main>
  )
}
